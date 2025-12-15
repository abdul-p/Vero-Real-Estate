import View from "./view.js";

class signInView extends View {
    _parentElement = document.querySelector('.sign-body');
    _email = document.querySelector('input[type="email"]');
    _password = document.querySelector('input[type="password"]');
    
    _signIn = document.querySelector('.sign-in')

    _clear() {
        this._parentElement.innerHTML = '';
    }

    addHandlerOpenModal() {
        console.log(this._signIn)
         const modal = document.querySelector('.auth-overlay');
         this._signIn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('clicked', modal)
            // if(this_modal.classList.contains('hidden'))return;
            if (modal) {
                modal.classList.remove('hidden');
            }else {
                console.log('modal not visible')
            }
            
            // classList.remove('hidden');
            
         })
    }

    addHandlerCloseModal() {
         const modal = document.querySelector('.auth-overlay');
         modal.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target === modal) {
                modal.classList.add('hidden');
            }
            
            // classList.remove('hidden');
            
         })
    }

    addHandlerSingIn(handler) {
        
        const regContainer = document.querySelector('.sign-left');
        if (!regContainer) { return console.log('not ready') }
        regContainer.addEventListener('click',  (e) => {
                e.preventDefault();
                
                const signUpBtn = e.target.closest('.registration-switch span');
                if (!signUpBtn) return;
                const signUp = signUpBtn.classList.contains('sign');
                const logIn = signUpBtn.classList.contains('log');
                console.log(logIn);
                if (!signUp && !logIn) return; 
                this._clear();
                this._parentElement.insertAdjacentHTML('afterbegin', signUp ? this._generateMarkupSignUP() : this._generateMarkupLogIn());
               
                handler();
                console.log('clicked');
        });
        
        
    }


    submit (handler) {
        const submit = document.querySelector('.sign-left');
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target);
            const sub = e.target.closest('.submit-bt');
            if (!sub) return;
            console.log('clicked');
            let email = this._email.value;
            let password = this._password.value;
            if (!email || !password) return this._alert('Please fill in both fields');
            if(!email && !password) return;
            handler(email, password);
            console.log(email, password);
        });
    }

    

    _generateMarkupSignUP() {
        return `
            <div class="sign-left-1 sign-body">
                <div class="registration-switch">
                    <span class='log'>LogIn</span>
                    <span class="sign switch-active">Sign Up</span>
                </div>
                <div class="registration-det">
                    <h1>Create an account</h1>
                    <p>Please enter your details to create an account</p>
                </div>
                <form action="">
                    <div class="inputBox">
                        <span>Email address </span>
                        <input type="email" required="required">
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <span>Password</span>
                        <input type="password" required="required">
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="#">Create an account</a>
                    </div>
                    <div class="terms">
                        <label>
                        <input type="checkbox" checked>
                        <span class="terms-check">Please keep me updated by email with the latest news, research findings, reward programs, event updates.</span>
                        </label>
                    </div>
                    <div class="submit">
                        <button class="submit-bt">Sign UP</button>
                    </div>
                </form>
            </div>
        `;
    }

    _generateMarkupLogIn() {
        return ` <div class="sign-left-2 sign-body">
                <div class="registration-switch">
                    <span class="log switch-active">LogIn</span>
                    <span class='sign'>Sign Up</span>
                </div>
                <div class="registration-det">
                    <h1>Log In</h1>
                    <p>Please enter your details to log in.</p>
                </div>
                <form action="">
                    <div class="inputBox">
                        <span>Email address </span>
                        <input type="email" required="required">
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <span>Password</span>
                        <input type="password" required="required">
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="#">Log In</a>
                    </div>
                    <div class="terms">
                        <label>
                        <input type="checkbox" checked>
                        <span class="terms-check">Please keep me updated by email with the latest news, research findings, reward programs, event updates.</span>
                        </label>
                    </div>
                    <div class="submit">
                        <button class="submit-bt">Sign UP</button>
                    </div>
                </form>
            </div>
        `;
    }
}

export default new signInView() ;