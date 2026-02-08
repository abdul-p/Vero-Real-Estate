import { AJAX } from "./helper.js";

export const state = {
  properties: [],
  property: {
    id: "",
    name: "",
    location: "",
    price: 0,
    size: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: "",
    image_url: "",
    category: "",
  },
  search: {
    query: "",
    results: [],
    resultsPerPage: 10,
    page: 1,
  },
  bookmarks: [],
  User: {
    email: "",
    password: "",
  },
  Agents: [],
};

export const addProperty = async function (url) {
  try {
    let data = await AJAX(url);
    console.log(data);
    state.properties = data.map((rec) => {
      return {
        id: rec.id,
        image_url: rec.image_url,
        title: rec.title,
        description: rec.description,
        location: rec.location,
        long: rec.lng,
        lat: rec.lat,
        price: rec.price,
        bedrooms: rec.bedrooms,
        bathrooms: rec.bathrooms,
        size: rec.size,
        category: rec.category,
        type: rec.type,
        state: rec.state,
        
      };
    });

    console.log(state);
  } catch (error) {
    console.error(error);
  }
};

export const addAgent = async function (url) {
  try {
    let data = await AJAX(url);
    console.log(data);

    state.Agents = data.map((rec) => {
      return {
        agent_id: rec.id,
        name: rec.name,
        position: rec.position,
        phone: rec.phone,
        email: rec.email,
        image_url: rec.image_url,
      };
    });

    console.log(state);
  } catch (error) {
    console.error(error);
  }
};

console.log(state.properties);

// export const handler = (handle) => {
//     window.addEventListener('load', handle);
// }

// export const ui = () => {

//     const container = document.querySelector('.properties-body');
//     container.innerHTML = '';
//     container.insertAdjacentHTML('afterbegin', state.properties.map(data =>
//         `
//                 <div class="property">
//                     <img src="${data.image_url[0]}" alt="${data.title}">
//                     <div class="property-name-category">
//                         <h1>${data.title}</h1>
//                         <p>${data.location}</p>
//                     </div>
//                     <p class="property-details">${data.description}</p>
//                     <p class="property-details">$${data.price}/Monthly</p>
//                     <div class="property-specs">
//                         <p>up to 20</p>
//                         <p>${data.bedrooms} rooms</p>
//                         <p>${data.bathrooms} bathrooms</p>
//                     </div>
//                 </div>
//             `
//     ).join(''))

// }

// ui();
