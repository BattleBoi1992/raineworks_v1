import axios from 'axios';

import brandIcon from '@/assets/logos/raineworks-icon.png'; // Small logo image for small displays less than 801 px in width.
import logoLight from '@/assets/logos/raineworks-light.png'; // Full logo image for dark mode.
import logoDark from '@/assets/logos/raineworks-dark.png'; // Full logo image for night mode. 

/*
* 
*  State
* 
*/

const state = () => ({
   
   // Theme variables. 

   theme: 'light', 
   themeToggle: false, 

   // Is the site loading? 

   loading: false,
   
   // Is the mobile menu active? 

   menuActive: false, 

   // Is the site under maintenance? 

   maintenance: false,

   // Files (temporaty location)

   brandIcon: brandIcon,
   logoDark: logoDark,
   logoLight: logoLight

})

/*
* 
*  Getters
* 
*/

const getters = {

   // Put stuff here

}

/*
* 
*  Actions
* 
*/

const actions = {

   // Toggle theme between light and dark mode. (Action)

   toggleTheme(context) {
      context.commit('toggleTheme')
   },
    
    // Toggle loading state. (Action)

   loadToggle(context) {
      context.commit('loadToggle')
   },

    // Toogle menu state. (Action)

   toggleMenu(context) {
      context.commit('toggleMenu')
   },

   // Get maintenace flag state from database. (Action)

   async loadFlags(context) {
      const response = await axios.get('https://' + process.env.VUE_APP_RAINEWORKS_DB_URL + '/site-settings')
      let flags = {
         siteMaintenance: response.data.Maintenance
      }
      context.commit('setFlags', flags)
   }, 

}

/*
* 
*  Mutations
* 
*/

const mutations = {

   // Toggle theme between light and dark mode. (Mutation)

   toggleTheme(state) {
      state.themeToggle = !state.themeToggle
      if(state.themeToggle) {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
   }, 

   // Toggle loading state. (Mutation)

   loadToggle(state) {
      state.loading = !state.loading
   },

   // Toggle menu state. (Mutation)

   toggleMenu(state) {
      state.menuActive = !state.menuActive
   }, 

   // Toggle site maintenance flag. (Mutation)
   setFlags(state, flags) {
      state.maintenance = flags.siteMaintenance
      if(state.maintenance) {
         console.log('Site is undergoing scheduled maintenance.')
      }
   },

}

export default {
   namespace: true, 
   state, 
   getters, 
   actions, 
   mutations
}