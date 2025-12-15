import View from "./view.js";

class Userview extends View{

    _parentElement = document.querySelector('.sign-in');

    changeUser(user) {
        if (!user) return;
        const firstLetter = user[0].toUpperCase();

        this._parentElement.querySelector('.sign-in-p').remove();
        const userEl = document.createElement('p')
        userEl.classList.add('user');
        userEl.textContent = firstLetter;
        console.log(firstLetter)
        this._parentElement.appendChild(userEl)
        this._alert(`yay!!!! ${user} have successfully signed in...`)
    }
    
    // _generateMarkup(data) {
    //     if (!data) return;
    //     return `
    //         <p class='user'>${data}</p>
    //     `
    // }

}

export default new Userview() ;