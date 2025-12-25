import view from "./view.js";

class SearchView extends view{
    
    _parentElement = document.querySelector('.properties')
    _location = document.querySelector('.property-location');
    _propertyType = document.querySelector('.property-type');
    _price = document.querySelector('.property-price');
    _rooms = document.querySelector('.property-rooms');

    addHandlerSearch(handler){
        const SearchButton = document.querySelector('.place-search-button');
        if (!SearchButton) { return console.log('not ready') }
        SearchButton.addEventListener('click', function(e) {
            e.preventDefault();
            handler();
        })  
    }

    getQuery(){
        // const query = this._parentElement.querySelector('.place-search-button').value;
        const input = {
            type: this._propertyType.value,
            price: this._price.value,
            location: this._location.value,
            rooms: this._rooms.value
        }

        console.log(input);
        this._clearInput();
        return input;
    }

    _clearInput(){
        this._location.value = '';
        this._propertyType.value = '';
        this._price.value = '';
        this._rooms.value = '';
    }

    

    displayFilteredProperties(properties) {
        //goto properties page and display properties on
        // window.location.href = './property.html';
        // this.render(properties);
        // console.log(properties);
        
    }

    _generateMarkup(data) {
            console.log(data);
          return data.map(data => this._generateMarkupProperty(data)).join('');
    }

    _generateMarkupProperty(results) {
        return `
                <li class="property-card">
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

export default new SearchView();