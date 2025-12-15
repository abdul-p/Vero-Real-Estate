
class HeaderView {

    _logo = document.querySelector('.logo');
    _navbar = document.querySelector(".nav-link");
    
    logoHandler () {
        this._logo.style.opacity === 1 ? (this._logo.style.opacity = 0)
        : (this._logo.style.opacity = 1);

        this._logo.style.transition = "opacity 1.2s ease-in-out";

    }

    heroHandler () {
        const hero = document.querySelectorAll(".hero-animation");
        hero.forEach((el) => {
            el.style.transform = "translateY(0)";
            el.style.transition = "transform 1.2s ease-in-out";
        });
    }

    handler() {
        console.log(this._navbar);
    }
    

    navbarHandler () {
        this._navbar.addEventListener("click", function (e) {
            const target = e.target.closest(".nav-link");
            console.log(target);
            if (!target) return;
            const links = this._navbar.querySelectorAll(".nav-link");
            console.log(this._navbar);
            links.forEach((link) => link.classList.remove("active"));
            target.classList.add("active");
        });
    }
}

export default new HeaderView() ;