/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//nagivation global var
const navigation = document.querySelector("#navbar__list");
//section global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = function () {
    const fragment = document.createDocumentFragment();
    // looping over all sections
    sections.forEach(section => {
        const sectionID = section.getAttribute("id");
        const sectionDataNav = section.getAttribute("data-nav");
        const li = document.createElement('li');
        li.innerHTML = `<a class="menu__link" href="#${sectionID}">${sectionDataNav}</a>`;
        fragment.appendChild(li)
    });
    // append all elements to the naviation
    navigation.appendChild(fragment);
}

navBuilder();

// Add class 'active' to section when near top of viewport

const sectionActivation = () => {
    // looping over all sections
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top < 150 && box.bottom >= 150) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

document.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event

const sectionscroll = () => {
    // listen the click in navbar
    // Prevent the default a tag action
    document.getElementById('navbar__list').addEventListener('click', event => {
        event.preventDefault();
        // Make sure clicked a tag.
        if (event.target.tagName == 'A') {
            // Get target section's id from href attribute
            const id = event.target.href.split('#')[1];
            // Get the section by Id and scroll smoothly
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
    })
}
sectionscroll()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


