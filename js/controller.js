import * as model from './model.js';
import PropertiesView from './view/propertiesView.js';
import headerView from './view/headerView.js';
import propertiesView from './view/propertiesView.js';
import searchView from './view/searchView.js';
import signInView from './view/signInView.js';
import UserView from './view/UserView.js';
import homePageMapView from './view/homePageMapView.js';
import searchBestPlaceView from './view/searchBestPlaceView.js';
// import resultsView from './view/resultsView.js';



function controlRegistration () {
    // event.preventDefault();
    // console.log(event.target.textContent);
    // event.target.textContent === 'Sign UP' ? alert('Sign Up Successful') : alert('Log In Successful');
    console.log('click');
   

}

function controlUserData (email, password) {
    const modal = document.querySelector('.auth-overlay');

        model.state.User.email = email ;
        model.state.User.password = password;
        console.log(email, password);
        console.log(model.state.User.email);
        const userEmail = model.state.User.email;
        UserView.changeUser(userEmail);
        modal.classList.add('hidden');
}


function controlProperties () {
    propertiesView.render(model.state.properties);
    console.log(model.state.properties)

}      

function calcDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI/180;
    const dLng = (lng2 - lng1) * Math.PI/180;

    const a =
      Math.sin(dLat/2) ** 2 +
      Math.cos(lat1*Math.PI/180) *
      Math.cos(lat2*Math.PI/180) *
      Math.sin(dLng/2) ** 2;

    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}


function controlMapSearch({ lat, long }) {
    const all = model.state.properties;

    const filtered = all.filter(p => calcDistance(lat, long, p.lat, p.long) < 10);

    PropertiesView.render(filtered);         // Update property list
    homePageMapView.renderPropertiesOnMap(filtered); // Add markers on map
}


function controlSearch(){
    searchView.getQuery();
}

function controlBestSearch(input) {
    const all = model.state.properties; 
    const filtered = searchBestPlaceView.filterProperties(all);
    searchBestPlaceView.displayFilteredProperties(filtered);
}


function init() {
    // navbar animation 
    // View.navbarHandler();

    window.addEventListener("load", function () {
      // logo animation
      headerView.logoHandler();
      // hero animation
      headerView.heroHandler();
      headerView.handler();
    });
    PropertiesView.addHandlerRender(controlProperties);
    searchView.addHandlerSearch(controlSearch);
    signInView.addHandlerSingIn(controlRegistration);
    signInView.submit(controlUserData)
    signInView.addHandlerOpenModal();
    signInView.addHandlerCloseModal();
    homePageMapView.renderMap(model.state.properties);
    homePageMapView.handleSearch(controlMapSearch);
    searchBestPlaceView.addhandlerSearch(controlBestSearch);
}

// document.addEventListener('DOMContentLoaded', function () {
    init();
// })

console.log(model.state.properties);