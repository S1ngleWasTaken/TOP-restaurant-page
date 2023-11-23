import './style.css'
import { loadHomePage } from './home-page-module';
import { loadAboutUs } from './about-us-module';
import { loadContact } from './contact-module';



const navItems = document.querySelectorAll('.nav-item');
loadHomePage()
navItems.forEach(navItem => {
    navItem.addEventListener('click', function(){
        switch (navItem.innerHTML) {
            case 'Home':
                loadHomePage();
                break;
            case 'About us':
                loadAboutUs();
                break;
            case 'Contact':
                loadContact();
                break;
        }
    })
});
