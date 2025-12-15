import view from "./view.js";

class SearchView extends view{
    
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
        const type = this._propertyType.value;
        const price = this._price.value;
        const local = this._location.value;
        const rooms = this._rooms.value;

        console.log(type, price, local, rooms);
        this._clearInput();
        // return query;
    }

    _clearInput(){
        this._location.value = '';
        this._propertyType.value = '';
        this._price.value = '';
        this._rooms.value = '';
    }

    filterProperties(data) {
        const filtered = data.filter(p => {
            return (p.type === input.type || input.type === '') &&
                   (p.location === input.location || input.location === '') &&
                   (p.price <= input.price || input.price === '') &&
                   (p.rooms >= input.rooms || input.rooms === '');
        }
        );
        return filtered;
    }

    displayFilteredProperties(properties) {
        //goto properties page and display properties on
        const hre = window.location.href;
        console.log(properties, hre);
    }

}

export default new SearchView();