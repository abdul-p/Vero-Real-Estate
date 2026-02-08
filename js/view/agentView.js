import View from "./view.js";

class AgentView extends View {

  _parentElement = document.querySelector('.agent-body');
  _agentLink = document.querySelector('.agent-list-type');
  _formSwitch = document.querySelector('.form-switch');

  addAgenthandler(handler) {
    if (!this._agentLink) return;
        this._agentLink.addEventListener('click', (e) => {
            const button = e.target.closest('.list');
            console.log(button, 'hello');
             handler(button.textContent);
        });
  }

  addFormSwitchHandler(handler) {
    if (!this._formSwitch) return;
    this._formSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const button = e.target.closest('.form-switch-btn');
            handler(button.textContent);
    });
  }
  _generateAgentMarkup() {
    return `
            <div class="agents">
                <div class="agents-list">
                    <div class="agent-list-top">
                        <h2>Real Estate Agents in Lagos, NIGERIA</h2>
                        <p>With over a million agents from all the top brokerages, a local agent knows your market and can guide you through the process from start to finish</p>
                    </div>
                    <div class="agent-cards">
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="agent-card">
                            <div class="card">
                                <div class="agents-img">
                                    <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                                </div>
                                <div class="agent-details">
                                    <div class="card-det-left">
                                    <p class="agent-role">TEAM</p>
                                    <p class="agent-ratings">5.8<i>⭐</i>(1891)</p>
                                    </div>
                                    
                                    <h2 class="agent-name">Sarrah Johnson</h2>
                                    <p class="agent-company">Americorp Reall Estate</p>
                                    <div class="agent-stats">
                                        <p><span>$23K-$3.6M</span> team price range</p>
                                        <p><span>551</span> team sales last 12 months</p>
                                        <p><span>5380</span> team sales in Nigeria</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>View more</button>
                </div>
                <div class="get-help-agent">
                    <h2>Get help finding an agent</h2>
                    <p>We'll pair you with a Vero Premier Agent who has the inside scoop on your market.</p>
                    <button>Connect with a local agent</button>
                </div>
                <div class="faqs">
                    <div class="faq-top">
                        <h1>FREQUENTLY ASKED QUESTION</h1>
                    </div>
                    <div class="faq">
                        <h2>How to find a good real estate agent near me? <span>></span></h2>
                        <p>You can search for a real estate agent by name or narrow your search by location. View an agent's profile to compare, read reviews, and explore current listings and past sales. Our directory can help you find a top-rated real estate agent for buying, renting, or selling your home.</p>
                    </div>
                    <div class="faq">
                        <h2>How to pick a real estate agent?<span>></span></h2>
                        <p>Choose a real estate agent or broker with local expertise to guide you through the process of renting, buying, or selling your next home. Since each location's housing market is unique, a local real estate agent will understand your needs best.</p>
                    </div>
                    <div class="faq">
                        <h2>How to contact a real estate agent?<span>></span></h2>
                        <p>You can contact a real estate agent directly from their profile. Use the contact box to type a message to the agent and then select “Send message”. The real estate agent or broker you contacted will then reach out to connect with you.</p>
                    </div>
                    <div class="faq">
                        <h2>How do I leave a review for a real estate agent?<span>></span></h2>
                        <p>Search for the agent by name using the directory search bar. Once on their profile, you can rate the real estate agent and write a review. You can also read reviews from others.</p>
                    </div>
                    <div class="faq">
                        <h2>What is the difference between an agent and a broker?<span>></span></h2>
                        <p>Both an agent and a real estate broker are licensed to help you buy, rent, or sell a home. In some states, the words are used interchangeably. In others, a broker may have a higher level of licensing, enabling them to oversee and guide agents.</p>
                    </div>
                </div>
                <div class="agent-list-location">
                    <div class="agent-list-loc-top">
                        <h2>Are you a real estate agent?</h2>
                        <p>Check out the extensive resources you can find in our Premier Agent® Resource Center, covering everything from business plan templates to complete guides on real estate marketing. Not a Premier Agent yet? Find out how real estate advertising on Zillow and Trulia can help you get more leads.</p>
                    </div>
                    <div class="agent-list-loc">
                        <ul>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <button>+ show more</button>
                        </ul>
                        <ul>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <button>+ show more</button>
                        </ul>
                        <ul>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <button>+ show more</button>
                        </ul>
                        <ul>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <li><a href="/">Chicago Real Estate Agents</a></li>
                            <button>+ show more</button>
                        </ul>
                    </div>
                    
                </div>
            </div>        
        `;
  }

  _generatePropertyManegerMarkup() {
    return `
        <div class="property-manager">
            <h1>Find Property Managers Near You</h1>
            <form action="">
                <div class="property-manager-inputs">
                    <label for="location-input">LOCATION</label>
                    <input type="text" name="" id="" placeholder="Enter city, neighborhood, or ZIP code">
                </div>
                <div class="property-manager-inputs">
                    <label for="location-input">LOCATION</label>
                    <input type="text" name="" id="" placeholder="Enter city, neighborhood, or ZIP code">
                </div>
                <div class="property-manager-inputs">
                    <label for="location-input">LOCATION</label>
                    <select name="" id="">
                        <option value="">Any</option>
                        <option value="">Property Management</option>
                        <option value="">Vacation / Short-term Rentals</option>
                    </select>
                </div>
                <div class="property-manager-inputs">
                    <label for="location-input">LOCATION</label>
                    <select name="" id="">
                        <option value="">English</option>
                    </select>
                </div>
            </form>
            <div class="property-managers">
                <h1>REVIEWS IN CHICAGO, IL</h1>
                <div class="pm-cards">
                    <div class="property-manager-card">
                    <div class="pm-img">
                        <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                    </div>
                    <div class="pm-details">
                        <h2 class="pm-name">Sarrah Johnson</h2>
                        <p class="pm-phone">(710) 848-1234</p>
                        <div class="pm-stats">
                            <p><span>120</span> Properties Managed</p>
                            <p><span>4.8</span> Rating</p>
                            <p>100 Reviews</p>
                        </div>
                    </div>
                    </div>
                    <div class="property-manager-card">
                        <div class="pm-img">
                            <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                        </div>
                        <div class="pm-details">
                            <h2 class="pm-name">Sarrah Johnson</h2>
                            <p class="pm-phone">(710) 848-1234</p>
                            <div class="pm-stats">
                                <p><span>120</span> Properties Managed</p>
                                <p><span>4.8</span> Rating</p>
                                <p>100 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div class="property-manager-card">
                        <div class="pm-img">
                            <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                        </div>
                        <div class="pm-details">
                            <h2 class="pm-name">Sarrah Johnson</h2>
                            <p class="pm-phone">(710) 848-1234</p>
                            <div class="pm-stats">
                                <p><span>120</span> Properties Managed</p>
                                <p><span>4.8</span> Rating</p>
                                <p>100 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div class="property-manager-card">
                        <div class="pm-img">
                            <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                        </div>
                        <div class="pm-details">
                            <h2 class="pm-name">Sarrah Johnson</h2>
                            <p class="pm-phone">(710) 848-1234</p>
                            <div class="pm-stats">
                                <p><span>120</span> Properties Managed</p>
                                <p><span>4.8</span> Rating</p>
                                <p>100 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div class="property-manager-card">
                        <div class="pm-img">
                            <img src="./img/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="">
                        </div>
                        <div class="pm-details">
                            <h2 class="pm-name">Sarrah Johnson</h2>
                            <p class="pm-phone">(710) 848-1234</p>
                            <div class="pm-stats">
                                <p><span>120</span> Properties Managed</p>
                                <p><span>4.8</span> Rating</p>
                                <p>100 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    `
  }

  _generateLocationMarkup() {
    return `
        <div class="find-location">
            <input type="text" id="agent-location" placeholder="City, neighborhood, or ZIP code">
        </div> 
    `
  }

  _generateNameMarkup() {
    return `
        <div class="find-name">
            <input type="text" name="" id="" placeholder="Enter agent name">
        </div>
    `
  }
}

export default new AgentView();
