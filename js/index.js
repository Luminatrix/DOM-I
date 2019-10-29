const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },


  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

///append before prepend


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


document.querySelector('header').style.background = 'green';

const navLinks = document.querySelectorAll('a');
let count = 1;
navLinks.forEach(
  element => {
    if (count !== navLinks.length) {
      element.textContent = siteContent ['nav'] [`nav-item-${count}`];
      count += 1;
    }
  }
)
// console.log(navLinks);

const newLink2 = document.createElement('a');
newLink2.setAttribute('href', '#');
newLink2.textContent = 'Home';

const newLink1 = document.createElement('a');
newLink1.setAttribute('href', '#');
newLink1.textContent = 'Blog';


const nav = document.querySelector('nav');

nav.append(newLink1);
nav.prepend(newLink2);





const circleImage = document.getElementById("cta-img");
circleImage.setAttribute('src', siteContent["cta"]["img-src"]);

const awesomeHeader = 
document.querySelector('h1').textContent = "DOM Is Awesome";
console.log(awesomeHeader);

const startButton =
document.querySelector('button').textContent = "Get Started";
console.log(startButton);

const featuresHeader = 
document.querySelector('.top-content h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];
console.log(featuresHeader);

const featuresContent =
document.querySelector('.top-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutHeader =
document.querySelector('.top-content div:last-child h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

const aboutContent =
document.querySelector('.top-content div:last-child p');
aboutContent.textContent = siteContent['main-content']['about-content'];


const middleImage =
document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
console.log(middleImage)

const servicesHeader =
document.querySelector('.bottom-content h4');
servicesHeader.textContent = siteContent['main-content']['services-h4'];

const servicesContent =
document.querySelector('.bottom-content p');
servicesContent.textContent = siteContent['main-content']['services-content'];


const productHeader =
document.querySelector('.bottom-content div:nth-of-type(2) h4');
productHeader.textContent = siteContent['main-content']['product-h4'];


const productContent =
document.querySelector('.bottom-content div:nth-of-type(2) p');
productContent.textContent = siteContent['main-content']['product-content'];


const visionHeader =
document.querySelector('.bottom-content div:last-child h4');
visionHeader.textContent = siteContent['main-content']
['vision-h4'];

const visionContent =
document.querySelector('.bottom-content div:last-child p');
visionContent.textContent = siteContent['main-content']['vision-content'];


const contactHeader = 
document.querySelector('.contact h4').textContent = "Contact";
console.log(contactHeader);

const contactAddress =
document.querySelector('.contact p').textContent = "123 Way 456 Street Somewhere, USA";
console.log(contactAddress);

const contactPhone =
document.querySelector('.contact p:nth-of-type(2)').textContent = "1 (888) 888-8888";
console.log(contactPhone);

const contactEmail =
document.querySelector('.contact p:last-child').textContent =
"sales@greatidea.io";
console.log(contactEmail);

const footerStuff =
document.querySelector('footer p').textContent =
"Copyright Great Idea! 2018";

// [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.






