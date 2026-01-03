export default class View {
    _data;

    render(data) {
        this._data = data;
        console.log(this._data)
        const markup = this._generateMarkup(data);

        this._parentElement.innerHTML = '';

        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        
    }

    _alert(message, result) {
        
       const body = document.querySelector('body')
       result === 'success' ? body.classList.add('alert-success') : body.classList.remove('alert-success');
       const markup = this._generateAlertMarkup(message);
         body.insertAdjacentHTML('afterbegin', markup);
    }

    _generateAlertMarkup(message) {
        return `
        <div class="alert">
            <p>${message}</p>
        </div>
        `;
    }

    

    // _generateMarkup(data) {
    //     return `
    //         <div class="property">
    //             <img src="${data.image_url}" alt="${data.title}">
    //             <div class="property-name-category">
    //                 <h1>${data.title}</h1>
    //                 <p>${data.location}</p>
    //             </div>
    //             <p class="property-details">${data.description}</p>
    //             <p class="property-details">$${data.price}/Monthly</p>
    //             <div class="property-specs">
    //                 <p>up to 20</p>
    //                 <p>${data.bedrooms} rooms</p>
    //                 <p>${data.bathrooms} bathrooms</p>
    //             </div>
    //         </div>
    //     `;
    // }

}