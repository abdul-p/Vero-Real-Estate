import View from "./view.js";
import { KEY } from "../../config.js";

class HomePageMapView extends View {
    #map
    _long
    _lat
    _submitBtn = document.getElementById('map-search-button');
    _inputLocation = document.querySelector('.map-property-location');
    _inputCities = document.getElementById('cities');
    _inputstatus = document.getElementById('statu');
    _inputType = document.getElementById('type');
    _inputBedrrom = document.getElementById('bedrooms');
    _inputBathroom = document.getElementById('bathroom');
    _inputMin = document.getElementById('min-area');
    _inputMax = document.getElementById('max-area');
    _inputArea = document.getElementById('area');
    _inputId = document.getElementById('id');
    

    renderMap() {
        if (!document.getElementById('map')) return;
        if (!L) return;
        if(document.body.classList.contains("properties-page")) return ;
        // let long , lat  ;
        window.navigator.geolocation.getCurrentPosition(pos => {
            this._lat = pos.coords.latitude;
            this._long = pos.coords.longitude;
            console.log(this._lat , this._long);
         this.#map = L.map('map').setView([this._lat, this._long] , 13);
        // Initialize the map
        

        L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=s0XxQd584IjGmJ67EHHx', {
            maxZoom: 19,
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(this.#map);
        let marker = L.marker([this._lat, this._long]).addTo(this.#map);
        marker.bindPopup("<b>You are here!</b>").openPopup();

        L.control.maptilerGeocoding({
            apiKey : KEY ,
            placeholder: "hey map" ,
            collapsed : true ,
        })
        });
        this._alert('Map Loaded Successfully', 'success');

    }

    handleSearch(handler) {
        const location = this._inputLocation;
        if (!this._submitBtn) return;
        this._submitBtn.addEventListener("click", e => {
            e.preventDefault();
            const query = location.value;
            fetch(`https://api.maptiler.com/geocoding/${query}.json?key=${KEY}`)
            .then(response => response.json())
            .then(data => { 
                const lat = data.features[0].geometry.coordinates[1];
                const long = data.features[0].geometry.coordinates[0];
                console.log(lat , long);
                handler({ lat, long });
            });
        });
        this._alert('Map Loaded Successfully', 'success');
    }

    renderPropertiesOnMap(properties) {
        console.log(properties);
     // 🔐 Guard: return early if no properties
    if (!properties || properties.length === 0) return;

    const bounds = L.latLngBounds();
    let hasValidMarker = false;

    properties.forEach(p => {
        if (typeof p.lat !== 'number' || typeof p.long !== 'number') return;
        console.log(p.lat, p.long);
        hasValidMarker = true;

        const marker = L.marker([p.lat, p.long]).addTo(this.#map);

        marker.bindPopup(`
            <b>${p.title}</b><br>
            ${p.location}<br>
            ₦${p.price.toLocaleString()}
        `);

        bounds.extend([p.lat, p.long]);
    });

    // 🔐 Guard: only fit if at least one marker exists
    if (hasValidMarker) {
        this.#map.fitBounds(bounds, { padding: [60, 60] });
    }

    }
}

export default new HomePageMapView();