
class HeaderView {

    _logo = document.querySelector('.logo');
    _navbar = document.querySelector(".nav-link");
    _buttonDiv = document.querySelector('.properties-button');
    _contactSection = document.querySelector('.nav-contact');
    _categoryBt = document.querySelector('.category-bt');
    _filter = document.querySelector('.place-search-filters')
    
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
    
    filterHandler () {
        let filter;
        // const query = this._parentElement.querySelector('.place-search-button').value;
        filter = this._filter.addEventListener('click' , (e) => {
            e.preventDefault();
            const filter = e.target.closest('.filter-bt').textContent ;
            console.log(filter);
            return filter;
        })
        console.log(filter);
        return filter ;
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

    scrollHandler () { 
        let scrollX = 0;
        this._buttonDiv.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('go right or left')
            const direction = e.target.closest('.p-scroll');
           
            

            if (direction.hasAttribute('data-name') && direction.dataset.name === 'right') {
                scrollX += 300 ;
                document.querySelector('.properties-body').scrollTo({
                    left : scrollX,
                    behavior: 'smooth'
                });

            }

            if (direction.hasAttribute('data-name') && direction.dataset.name === 'left') {
                scrollX -= 300 ;
                document.querySelector('.properties-body').scrollTo({
                    left: scrollX,
                    behavior: 'smooth'
                });
            }
            console.log(scrollX);
        })
    }

    contactView () {
        const newsletter = document.getElementById('newsletter');
        this._contactSection.addEventListener('click', (e) =>  {
            e.preventDefault();
            this.scrollIntoView(newsletter);
            
        });
    }

    

    scrollIntoView(element) {
        element.scrollIntoView({ behavior: 'smooth' , block: 'center' , });
    }
}

export default new HeaderView() ;