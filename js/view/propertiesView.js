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
                <li class="property-card" data-id="${results.id}">
                    <article>
                    <!-- IMAGE / CAROUSEL -->
                    <div class="property-media">
                        <img src="${results.image_url[0]}" alt="${results.title}" />
                        <button class="save-btn">♡</button>
                        <p class="save-btn-r">${results.category}</p>
                    </div>

                    <!-- PROPERTY INFO -->
                    <div class="property-info">
                        <p class="property-type">${results.category}</p>
                        <p class="property-price">$${results.price}/Monthly</p>
                        <a href="/property/vero_102" class="property-card-address">
                        ${results.description.split(' ').splice(0, 7).join(' ')}
                        </a>
                        <ul class="property-meta">
                        <li><b>${results.bedrooms}</b> Beds</li>
                        <li><b>${results.bathrooms}</b> Baths</li>
                        </ul>
                        
                    </div>
                    </article>
                </li>
            `
    }
}


export default new PropertiesView();