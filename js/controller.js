import * as model from './model.js';
import { API_URL } from '../config.js';
import PropertiesView from './view/propertiesView.js';
import headerView from './view/headerView.js';
import propertiesView from './view/propertiesView.js';
import searchView from './view/searchView.js';
import signInView from './view/signInView.js';
import UserView from './view/UserView.js';
import homePageMapView from './view/homePageMapView.js';
import propertyPageView from './view/propertyPageView.js';
import propertyView from './view/propertyView.js';
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

function controlProperty (e) {
        console.log(e);
        const params = new URLSearchParams();

        if (e) params.set("id", e);
        if (!e) return ;

        window.location.href =  `p.html?${params.toString()}`
        console.log('property-clicked')
}

const controlPropertyPage  = async function () { 
        // propertyPageView.renderMap()
        
        console.log("controlPropertyPage called ✅");

        // console.log(model.state.properties)
        const module = model.state.properties;
        
        console.log(module)
       
       
        const filter = propertyPageView.getSearchParams(); 
        const searchProperties = propertyPageView.filterProperties(module, filter);
        propertyPageView.render(searchProperties);
        propertyPageView.renderMap( () => {
            propertyPageView.renderPropertiesOnMap(searchProperties);
        })
        
        console.log(searchProperties, filter , module);
       
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
    const input =  searchView.getQuery();
    console.log(input);
    const location = input.location;
    const type = input.type;
    const price = input.price;
    const bedrooms = input.rooms;

    const params = new URLSearchParams();

    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (price) params.set("price", price);
    if (bedrooms) params.set("bedrooms", bedrooms);

    if (!location & !type & !price & !bedrooms ) return ;

    window.location.href =  `property.html?${params.toString()}`
    
    const all = model.state.properties; 
    // const filtered = searchView.filterProperties(all);
    // searchView.displayFilteredProperties(filtered);
    

    // return filtered ;

}




async function init() {
    // navbar animation 
    // View.navbarHandler();

    window.addEventListener("load", function () {
      // logo animation
      headerView.logoHandler();
      // hero animation
      headerView.heroHandler();
      headerView.handler();
      
    });
    try {
        await model.addProperty(API_URL);
    } catch (err) {
        console.error("Failed to load properties:", err);
    }
    PropertiesView.addHandlerRender(controlProperties);
    searchView.addHandlerSearch(controlSearch);
    signInView.addHandlerSingIn(controlRegistration);
    signInView.submit(controlUserData)
    signInView.addHandlerOpenModal();
    signInView.addHandlerCloseModal();
    homePageMapView.renderMap(model.state.properties);
    homePageMapView.handleSearch(controlMapSearch);
    
    if (document.body.classList.contains("properties-page") ) {
        propertyPageView.renderMap()
        propertyPageView.render(model.state.properties);
        controlPropertyPage();
        console.log('property page loaded');

    };

    if (document.body.classList.contains("properties-page") || document.body.classList.contains("Home") ) {
        propertyView.addhandleproperty(controlProperty);
        console.log('property')
    }

    if( document.body.classList.contains("property-page") ) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        console.log("Property ID from URL:", id);
        const property = model.state.properties.find(prop => prop.id === id);
        console.log(property);
        propertyView.render(property);
        // propertyPageView.renderMapForProperty(property);
    }
    

    
}

// document.addEventListener('DOMContentLoaded', function () {
    init();
// })

console.log(model.state.properties);
console.log("URL:", window.location.search);
