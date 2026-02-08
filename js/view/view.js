export default class View {
  _data;

  render(data) {
    this._data = data;
    console.log(this._data);
    if (!data || (Array.isArray(data) && data.length === 0)) {
     
      return this._alert("No data found", "error");
    }
    const markup = this._generateMarkup(data);

    this._parentElement.innerHTML = "";

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _alert(message, result) {
    if (!result) return ;
    const body = document.querySelector("body");
    const markup = this._generateAlertMarkup(message);
 
    body.insertAdjacentHTML("afterbegin", markup);

    const alert = body.querySelector(".alert"); 
    if (alert) {
      result === "success"
        ? alert.classList.add("alert-success")
        : alert.classList.add("alert-error");
    }
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  _generateAlertMarkup(message) {
    return `
        <div class="alert">
            <p>
            ${message} <span class="material-symbols-outlined">
                    task_alt</span>
            </p>
        </div>
        `;
  }

  Pagination(items, currentPage, data) {
    console.log(data);
    if (!items && !data) return;
    console.log(currentPage);
    let start = currentPage * items;
    let end = start + items;
    console.log(start, end, data);
    if (end >= data.length) {
      this._nextbt.classList.add("hidden");
      return;
    }
    if (end < data.length) {
      this._nextbt.classList.remove("hidden");
    }
    document.querySelector(".pg-text-start").textContent = start;
    document.querySelector(".pg-text-end").textContent = end;
    const paginated = data.slice(start, end);
    console.log(paginated);
    return paginated;
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
