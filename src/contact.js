import header from '../src/header';
import footer from '../src/footer';


let contact = () =>{
    /* Content Wrapper */
    let ContentWrapper = document.createElement('div');
    ContentWrapper.className = 'ContentWrapper'
    ContentWrapper.id = 'ContentWrapper';


    /* Hero content */
    let hero = document.createElement('div');
    hero.className = 'hero'
    hero.id = 'hero';

    // Contact content

    let ContactIntroductionWrapper = document.createElement('div');
    ContactIntroductionWrapper.className = 'hero-introduction-wrapper';
    

    let heroHeader = document.createElement('div');
    heroHeader.className = 'hero-header';
    heroHeader.textContent = 'Contact Us!';

    let heroIntroduction = document.createElement('div');
    heroIntroduction.className = 'hero-introduction';
    heroIntroduction.textContent = 
    `Our team of elite chefs would love to hear from you. Give us a call or send us an email.

    Phone: (619) 123-4567
    
    Email: tobago@tripoli.com`;

    ContactIntroductionWrapper.append(heroHeader);
    ContactIntroductionWrapper.append(heroIntroduction);


        /* Build about page */

        hero.append(ContactIntroductionWrapper);

        let content = document.getElementById('content');
    
        if (!document.querySelector('header')) {
            let headerbar = header();
            ContentWrapper.append(headerbar);
        };  
        
        ContentWrapper.append(hero);
        
        if (!document.querySelector('footer')) {
            let footerbar = footer();
            ContentWrapper.append(footerbar);
        };
    
    
        content.append(ContentWrapper);
    
    
    
        let HeaderBtnActive = document.getElementById('ContactBtn');
        HeaderBtnActive.classList.add('activeHeaderbtn');
};

export default contact