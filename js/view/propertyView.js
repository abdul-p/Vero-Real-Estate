import View from "./view.js";

class PropertyView extends View{

    _parentElement = document.querySelector('.main-property');
    _propertyhandler = document.querySelector('.prop');

    addhandleproperty (handler) {
        console.log('at- first')
        if (!this._propertyhandler) return ;
        this._propertyhandler.addEventListener('click', (e) => {
            console.log('hello');
                e.preventDefault();
                if (!e.target.closest('.property-card')) return;
                handler(e.target.closest('.property-card').dataset.id);
           
        });
    }



    _generateMarkup (data) {
        return `
            <div class="property-top-info">
                <div class="property-top-i">
                            <div class="navigation">
                                <ul class="page-nav">
                                    <li><a href="">H</a></li>
                                    <li><a href="./index.html">Home/</a></li>
                                    <li><a href="./property.html">Properties/</a></li>
                                    <li><a href="./">${data.name}</a></li>
                                    
                                </ul>
                                <ul class="button-nav">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                            <div class="property-short-info">
                                <div class="property-name">
                                    <h2>${data.name}</h2>
                                    <p>$${data.price}/mo</p>
                                </div>
                                <p class="short-info-address">2436 SW 8th St, Miami,FL 33135, USA</p>
                                <div class="short-info-category">
                                    <button class="ft">Featured</button>
                                    <button class="fr">For Rent</button>
                                </div>
                            </div>
                </div> 
            </div> 

            <section class="main-section">
                <div class="property-body">
                    <div class="property-image-slide">
                            <div class="property-image">
                                <img src="${data.img}" alt="">
                            </div>
                            <div class="property-images-select">
                                <ul>
                                    <li><img src="./img/house1/008.jpg" alt=""></li>
                                    <li><img src="./img/house1/009.jpg" alt=""></li>
                                    <li><img src="./img/house1/012.jpg" alt=""></li>
                                    <li><img src="./img/house1/030.jpg" alt=""></li>
                                    <li><img src="./img/house1/035.jpg" alt=""></li>
                                    <li><img src="./img/house1/036.jpg" alt=""></li>
                                    <li><img src="./img/house1/040.jpg" alt=""></li>
                                    <li><img src="./img/house1/045.jpg" alt=""></li>
                                    <li><img src="./img/house1/047.jpg" alt=""></li>
                                </ul>
                            </div>
                    </div>
                    <div class="property-overview">
                        <div class="property-overview-top">
                            <h2>Overview</h2>
                            <p><span>Proprty ID:</span>${data.id}</p>
                        </div>
                        <div class="property-overview-main">
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>property-type</p>
                            </div>
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>Bedroom</p>
                            </div>
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>Bathrooms</p>
                            </div>
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>Garage</p>
                            </div>
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>Area size</p>
                            </div>
                            <div class="property-overview-info">
                                <p>Apartment</p>
                                <p>Year Built</p>
                            </div>
                        </div>
                    </div>
                    <div class="property-description">
                        <div class="property-description-top">
                            <h2>Description</h2>
                        </div>
                        <div class="property-description-main">
                            <p>
                                ${data.description}
                            </p>
                        </div>
                    </div>
                    <div class="property-address">
                        <div class="property-address-head">
                            <h2>Address</h2>
                            <button>Open Address on google maps</button>
                        </div>
                        <div class="property-address-details">
                            <div class="property-address-detail-right">
                                <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                </div>
                                <div class="property-address-detail">
                                <p>State/Country</p>
                                <p>FLORIDA</p>
                                </div>
                                <div class="property-address-detail">
                                   <p>Area</p>
                                <p>West Flagger</p>
                                </div>
                            </div>
                            <div class="property-address-detail-left">
                                <div class="property-address-detail">
                                <p>City</p>
                                <p>Miami</p>
                                </div>
                                <div class="property-address-detail">
                                <p>Zip/Postal code</p>
                                <p>33135</p>
                                </div>
                                <div class="property-address-detail">
                                <p>Country</p>
                                <p>AMERICA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="property-details">
                        <div class="property-details-top">
                            <h2>Details</h2>
                            <p>Updated on November 11, 2025 at 2:53am</p>
                        </div>
                        <div class="property-main-details">
                        <div class="property-details-main-left">
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                        </div>
                        <div class="property-details-main-right">
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                            <div class="property-address-detail">
                                <p>Address</p>
                                <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                            </div>
                        </div> 
                        </div>
                        <div class="additional-details">
                            <h2>Additional Details</h2>
                            <div class="additional-detail">
                                <div class="additional-details-left">
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                </div>
                                <div class="additional-details-right">
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                    <div class="property-address-detail">
                                        <p>Address</p>
                                        <p>2436 SW 8th St, Miami,FL 33135, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="property-images-grid">
                        <img src="./img/house1/008.jpg" alt="">
                        <img src="./img/house1/009.jpg" alt="">
                        <img src="./img/house1/012.jpg" alt="">
                        <img src="./img/house1/030.jpg" alt="">
                        <img src="./img/house1/035.jpg" alt="">
                        <img src="./img/house1/036.jpg" alt="">
                        <img src="./img/house1/040.jpg" alt="">
                        <img src="./img/house1/045.jpg" alt="">
                        <img src="./img/house1/047.jpg" alt="">
                    </div>
                    <div class="property-features">
                        <h2>Features</h2>
                        <ul>
                            <li>Air Conditioner1</li>
                            <li>Dryer</li>
                            <li>Microwave</li>
                            <li>Refridgerator</li>
                            <li>Laundry</li>
                            <li>Swimming pool</li>
                            <li>Gym</li>
                            <li>Washer</li>
                            <li>Barbeque</li>
                            <li>Lawn</li>
                            <li>Outdoor shower</li>
                        </ul>
                    </div>
                    <div class="property-floor-plans">
                        <h2>Floor Plans</h2>
                        <div class="property-floor-plan">
                            <div class="property-floor-plan-top">
                                <p>First floor</p>
                                <div class="floor-plan">
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                </div>
                            </div>
                            <div class="property-floor-plan-top">
                                <p>First floor</p>
                                <div class="floor-plan">
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                    <p><span>Size</span> 1267 Sqft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="property-video">
                        <h2>Video</h2>
                        <video src="./img/3410663-uhd_2562_1440_30fps.mp4"></video>
                    </div>
                    <div class="property-360-virtual">
                        <h2>360 Virtual Tour</h2>
                        <video src=""></video>
                    </div>
                    
                    <div class="review-top">
                        <div class="review-top-right">
                            <p>0 Reviews</p>
                            <p>⭐⭐⭐⭐⭐ <span>5 out of 5</span></p>
                        </div>
                        <div class="review-top-left">
                            <p>Sort By: <span>Default Order</span></p>
                            <button>Leave a Review</button>
                        </div>
                    </div>
                    <div class="property-review">
                        <h2>Leave a Review</h2>
                        <form action="">
                                <div class="property-form">
                                    <label for="">Email</label>
                                    <input type="text">
                                </div>
                                <div class="title-rating">
                                    <div class="property-form-m">
                                        <label for="">Title</label>
                                        <input type="text">
                                    </div>
                                    <div class="property-form-m">
                                        <label for="">I'm a</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="property-form">
                                    <label for="">Message</label>
                                    <input type="text">
                                </div>
                                <button class="property-review-bt">Sumbmit Review</button>
                        </form>
                    </div>
                    <div class="similar-listing">
                        <h2>Similar Listing</h2>

                    </div>
                    <div class="property-tour">

                    </div>
                </div>
                <aside>
                    <div class="property-agent-contact">
                        <div class="top">
                            <p>Contact Information</p>
                            <button>View Listings</button>
                        </div>
                        <div class="property-agent">
                            <img src="./img/chuttersnap-awL_YCtPGv4-unsplash.jpg" alt="">
                            <div class="property-agent-details">
                                <p>Samuel Palmer</p>
                                <div class="property-agent-phone">
                                    <p>321 456 9865</p>
                                    <p>321 456 9865</p>
                                    <p>321 456 9865</p>
                                </div>
                                <ul class="socials">
                                    <li class="social"><a href="/">f</a></li>
                                    <li class="social"><a href="/">f</a></li>
                                    <li class="social"><a href="/">f</a></li>
                                    <li class="social"><a href="/">f</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="property-enquiry">
                            <p class="property-enquiry-p">Enquire about this property</p>
                            <form action="" id="form">
                                <div class="property-form-top">
                                    <div class="property-form">
                                        <label for="text">Name</label>
                                        <input type="text" id="name">
                                    </div>
                                    <div class="property-form">
                                        <label for="text">Phone</label>
                                        <input type="text" id="Phone">
                                    </div>
                                    <div class="property-form">
                                        <label for="text">Email</label>
                                        <input type="text" id="email">
                                    </div>
                                    <div class="property-form">
                                        <label for="text">I'm a</label>
                                        <select name="" id="select">
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>  
                                </div>
                                
                                <div class="property-form-message">
                                    <label for="">Message</label>
                                    <textarea id="textarea"></textarea>
                                </div>
                                <p class="submit-terms">By Submitting this form i agree to <a href="/">Terms of use</a></p>
                                <button>Register Information</button>
                            </form>
                        </div>
                    </div>
                </aside>  
            </section>
        `
    }

}


export default new PropertyView();

