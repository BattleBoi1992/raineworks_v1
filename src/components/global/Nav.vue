<template>
   <header class="header">
      <div class="nav-bar">
         <router-link to="/" class="brand-icon">
            <img class="mobile-icon" v-if="window.width < 801" :src="$store.state.brandIcon"/>
            <img class="desk-icon" v-else-if="theme == 'dark'" :src="$store.state.logoDark"/>
            <img class="desk-icon" v-else :src="$store.state.logoLight"/>
         </router-link>

         <nav class="link-container">
            <ul>
               <!-- Navigation links -->
               <li v-for="(navLink, index) in navLinks" :key="index" class="dskBtn">
                  <router-link :to="{ name: navLink.name }" :class="navLink.class">{{ navLink.text }}</router-link>
               </li>

               <!-- Theme toggle button -->
               <li class="themeBtn" @click="toggleTheme">
                  <i v-if="theme !== 'dark'" class="fas fa-moon"></i>
                  <i v-else class="fas fa-sun"></i>
               </li>

               <!-- Menu button for small displays -->
               <li class="menu-btn" @click="toggleMenu">
                  <i v-if="!menuState" class="fas fa-plus"></i>
                  <i v-else class="fas fa-times"></i>
               </li>
            </ul>
         </nav>

         <!-- (Menu system) Takes up the full screen and is displayed infront of everything on the highest Z index.  -->
         <div :class="menuClass">
            <div class="menu-container" :class="theme">

            </div>
         </div>
      </div>
   </header>
</template>

<script>

export default {
   name: 'Nav', 
   components: {
      //
   }, 
   data() {
      return {
         menuClass: 'menu-closed',
         window: {
            width: 0
         },

         navLinks: [
            {
               name: 'About', 
               text: 'About',
               class: this.theme
            }, 
            {
               name: 'Projects', 
               text: 'Projects',
               class: this.theme
            }, 
            {
               name: 'Blog', 
               text: 'Blog',
               class: this.theme
            }, 
            {
               name: 'Contact', 
               text: 'Contact',
               class: this.theme
            }, 
         ]
      }
   },
   methods: {
      toggleTheme() {
         this.$store.dispatch('toggleTheme');
      },
      toggleMenu() {
         this.$store.dispatch('toggleMenu'); // Changes menuActive state in the store.

         // Adds and removes a class to the body tag depending on the state of menuActive
         let body = document.querySelector('body')
         if(this.menuState) {
            body.classList.add('menu-active')
            this.menuClass = 'menu-open'
         } else {
            body.classList.remove('menu-active')
            this.menuClass = 'menu-closed'
         }
      }, 
      updateActiveLink() {
         // Iterates through the navLinks and checks if the name matches the current route. If it does then the class is changed to 'active' if not then the class is changed to match the current theme.
         for(let i = 0; i < this.navLinks.length; i++) {
            if(this.navLinks[i].name == this.$route.name) {
               this.navLinks[i].class = 'active'
            } else {
               this.navLinks[i].class = this.theme
            }
         }
      },
      handleResize() {
         this.window.width = window.innerWidth;
      },
   }, 
   computed: {
      theme() {
         let theme = this.$store.state.theme
         return theme
      },
      menuState() {
         let menuState = this.$store.state.menuActive
         return menuState
      },
   },
   created() {
      this.updateActiveLink() // Checks for active link when instance is created. 

      window.addEventListener('resize', this.handleResize)
      this.handleResize() 
   },
   destroyed() {
      window.removeEventListener('resize', this.handleResize);
   },
   beforeUpdate() {
      this.updateActiveLink()
   },
}
</script>

<style lang='scss'>

   .menu-active {
      overflow: hidden;
   }

   .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      padding: 32px;
      max-width: $max-width;
   }

   .desk-icon {
      width: 200px;
   }

   .mobile-icon {
      width: 30px;
   }

   .link-container {
      display: flex;

      ul {
         display: flex;
         align-items: center;
      }

      li {
         list-style-type: none;
         margin-left: 24px;
      }

      i {
         cursor: pointer;
      }

      a {
         text-decoration: none;
         padding: 6px 8px;
         border-radius: 4px;
         outline: none;

         &.light {
            color: $text-color-light;
         }

         &.dark {
            color: $text-color-dark;
         }

         &.active {
            color: #ffffff;
            background-image: linear-gradient(to right, $primary-one , $primary-two);
         }
         &:hover {
            color: #ffffff;
            background-image: linear-gradient(to right, $primary-one , $primary-two);
         }
      }
   }

   .menu-closed {
      display: none;
   }

   .menu-open {
      display: flex;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;

      .menu-container {
         width: 100%;
         height: 100%;

         &.light {
            background-color: $background-light;
         }

         &.dark {
            background-color: $background-dark;
         }
      }
   }

   .menu-btn {
      display: none;
   }

   .themeBtn {
      padding: 4px;
      outline: none;
      font-size: em(18px);
      cursor: pointer;
   }

   @media screen and (max-width: $tablet-landscape) {
      .menu-btn {
         padding: 4px;
         outline: none;
         display: inline;
         font-size: em(24px);
         cursor: pointer;
         z-index: 20;
      }  
      .dskBtn, .themeBtn {
         display: none;
      }
   }

</style>