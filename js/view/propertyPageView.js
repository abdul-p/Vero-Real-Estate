import View from "./view.js";
import { KEY, MAPTILER_URL, MAP_ATTRIBUTE } from "../../config.js";
class propertyPageView extends View {
    #pmap;
    _parentElement = document.querySelector('.properties-body');
    _buyBtn = document.querySelector('.buy');
    _rentBtn = document.querySelector('.rent');
    _category = document.querySelector('.category-bottom');
    _paginationButton = document.querySelector('.pagination');
    _nextbt = document.querySelector('.next');
    _lat;
    _long;
    _markerLayer;
    _currPaginatedPage = 0 ;

    addHandlerBuyClick(handler) {
        this._buyBtn.addEventListener('click', handler);
    }

    addHandlerRentClick(handler) {
        this._rentBtn.addEventListener('click', handler);
    }

    addHandlerPagination(handler) {
        if (!this._paginationButton) return ;
        let curPage =  this._currPaginatedPage;
        this._paginationButton.addEventListener('click', (e) =>  {
            // this._currPaginatedPage = 0;
            e.preventDefault();
           const button = e.target.closest('.pagination-bt').textContent ;
           console.log(button)
          if (button === 'Prev' && curPage > 0 ) {
            curPage = curPage - 1 ;
          };

          if (button === 'Next') curPage = curPage + 1 ;
          console.log(curPage);
          
          handler(curPage);
        });
        
        
    }

    _generateMarkup(data) {
            console.log(data);
          return data.map(data => this._generateMarkupProperty(data)).join('');
    }

    addhandleCategoryClick(handler) {
        if (!this._category) return;
        this._category.addEventListener('click', function(e) {
            const category = e.target.closest('.category-link');    
            if (!category) return;
            const categoryText = category.textContent.replace('→', '').trim();
            handler(categoryText);
        });
    }

    

    _generateMarkupProperty(results) {
        console.log(results)
        return `
                <li class="property-card" data-id="${results.id}">
                    <article>
                    <!-- IMAGE / CAROUSEL -->
                    <div class="property-media">
                        <img src="${results.image_url[0]}" alt="${results.title}" />
                        <button class="save-btn">
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                        </button>
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
                        <li>
                            <span class="material-symbols-outlined">
                                bed
                            </span>
                            <b>${results.bedrooms}</b> Beds
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                shower
                            </span>
                            <b>${results.bathrooms}</b> Baths
                        </li>
                        </ul>
                        
                    </div>
                    </article>
                </li>
            `
    }

    getSearchParams () {
         const params = new  URLSearchParams(window.location.search);

        const inputs = {
            location : params.get('location'),
            type : params.get('type'),
            price : params.get('price'),
            bedrooms : params.get('bedrooms')
        }


        return inputs;
    }

    filterProperties(properties, filter) {
        console.log(properties, filter)
        
        const filtered = properties.filter(p => {
            return( 
                console.log(p.location?.toLowerCase() , filter.location?.toLowerCase()),
                (p.location?.toLowerCase() === filter.location?.toLowerCase() )
                   && (Number(p.price) <= Number(filter.price) || filter.price === '')
                )
        }
        );
        console.log(filtered);
        return filtered;
        
        // (p.type === filter.type || filter.type === '')  &&
        //            (p.rooms >= filter.rooms || filter.rooms === '');
    }

    renderMap(onRender) {
        if (this.#pmap) return; 
            if (!L) return;
            // let long , lat  ;
            window.navigator.geolocation.getCurrentPosition(pos => {
                    this._lat = pos.coords.latitude;
                    this._long = pos.coords.longitude;
                    console.log(this._lat , this._long);
                    console.log(L);
                this.#pmap = L.map('pmap').setView([this._lat, this._long] , 13);
                // Initialize the map
                
        
                L.tileLayer(MAPTILER_URL, {
                    maxZoom: 19,
                    attribution: MAP_ATTRIBUTE
                }).addTo(this.#pmap);
                this._markerLayer = L.layerGroup().addTo(this.#pmap);
                L.marker([this._lat, this._long]).addTo(this.#pmap)
                .bindPopup("<b>You are here!</b>").openPopup();
    
                    L.control.maptilerGeocoding({
                        apiKey : KEY ,
                        placeholder: "hey map" ,
                        collapsed : true ,
                    });
                if (onRender) onRender();
            });
            this._alert('Map Loaded Successfully', 'success');

           
    
    }

    renderPropertiesOnMap(properties) {
       
        if (!this.#pmap) {
        console.error("Map not initialized");
        return;
        }
            console.log(properties);
            
        // 🔐 Guard: return early if no properties
        if (!properties || properties.length === 0) return;
        this._markerLayer.clearLayers();
        const bounds = L.latLngBounds();
        let hasValidMarker = false;

        properties.forEach(p => {
            
            if (typeof p.lat !== 'number' || typeof p.long !== 'number') return;
            console.log(p.lat, p.long);
            hasValidMarker = true;

            const marker = L.marker([p.lat, p.long]).addTo(this._markerLayer);

            marker.bindPopup(`
                <b>${p.title}</b><br>
                ${p.location}<br>
                ₦${p.price.toLocaleString()}
            `);

            bounds.extend([p.lat, p.long]);
        });

        // 🔐 Guard: only fit if at least one marker exists
        if (hasValidMarker) {
            this.#pmap.fitBounds(bounds, { padding: [60, 60] });
        }

    }

   

}

export default new propertyPageView();