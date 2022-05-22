import header from '../src/header';
import footer from '../src/footer';

let about = () =>{
    /* Content Wrapper */
    let ContentWrapper = document.createElement('div');
    ContentWrapper.className = 'ContentWrapper'
    ContentWrapper.id = 'ContentWrapper';


    /* Hero content */
    let hero = document.createElement('div');
    hero.className = 'hero'
    hero.id = 'hero';

    /* About */
    let AboutIntroductionWrapper = document.createElement('div');
    AboutIntroductionWrapper.className = 'hero-introduction-wrapper';
    

    let heroHeader = document.createElement('div');
    heroHeader.className = 'hero-header';
    heroHeader.textContent = 'About Us';

    let heroIntroduction = document.createElement('div');
    heroIntroduction.className = 'hero-introduction';
    heroIntroduction.textContent = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. \r\n Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. \r\n Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.';

    AboutIntroductionWrapper.append(heroHeader);
    AboutIntroductionWrapper.append(heroIntroduction);

    /* Build about page */

    hero.append(AboutIntroductionWrapper);

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



    let HeaderBtnActive = document.getElementById('AboutBtn');
    HeaderBtnActive.classList.add('activeHeaderbtn');
}

export default about;