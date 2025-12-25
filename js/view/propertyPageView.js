import View from "./view.js";
import { KEY, MAPTILER_URL, MAP_ATTRIBUTE } from "../../config.js";
class propertyPageView extends View {
    #pmap;
    _parentElement = document.querySelector('.properties');
    _lat;
    _long;
    _markerLayer;

    

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
                (p.location.toLowerCase() === filter.location.toLowerCase() )
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