import View from "./view.js";



class PropertiesView extends View {
    // _property = document.querySelector('.property');
    _parentElement = document.querySelector('.properties-body');


    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
            console.log(this._data);
          return this._data.map(data => this._generateMarkupProperty(data)).join('');
    }

    _generateMarkupProperty(results) {
        return `
                <div class="property">
                    <img src="${results.image_url[0]}" alt="${results.title}">
                    <div class="property-name-category">
                        <h1>${results.title}</h1>
                        <p>${results.location}</p>
                    </div>
                    <p class="property-details">${results.description}</p>
                    <p class="property-details">$${results.price}/Monthly</p>
                    <div class="property-specs">
                        <p>up to 20</p>
                        <p>${results.bedrooms} rooms</p>
                        <p>${results.bathrooms} bathrooms</p>
                    </div>
                </div>
            `
    }
}


export default new PropertiesView();