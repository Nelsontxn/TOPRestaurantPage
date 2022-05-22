import header from '../src/header';
import footer from '../src/footer';

let home = () =>{
    /* Content Wrapper */
    let ContentWrapper = document.createElement('div');
    ContentWrapper.className = 'ContentWrapper'
    ContentWrapper.id = 'ContentWrapper';

    /* Hero Content */
    let hero = document.createElement('div');
    hero.className = 'hero'
    hero.id = 'hero';

    //Wrapper for the Hero class//
    let HeroIntroductionWrapper = document.createElement('div');
    HeroIntroductionWrapper.className = 'hero-introduction-wrapper';
    

    let heroHeader = document.createElement('div');
    heroHeader.className = 'hero-header';
    heroHeader.textContent = 'Welcome to Roach Restaurant!';

    let heroIntroduction = document.createElement('div');
    heroIntroduction.className = 'hero-introduction';
    heroIntroduction.textContent = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. \r\n Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. \r\n Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.';

    HeroIntroductionWrapper.append(heroHeader);
    HeroIntroductionWrapper.append(heroIntroduction);

    /* Opening Hours */

    let OpeningHours = document.createElement('div');
    OpeningHours.className = 'OpeningHours';


    let OpeningHoursHeader = document.createElement('div');
    OpeningHoursHeader.className = 'OpeningHours-Header';
    OpeningHoursHeader.textContent = 'Opening Hours';


    let OpeningHoursBody = document.createElement('div');
    OpeningHoursBody.className = 'OpeningHours-Body';
    OpeningHoursBody.textContent = 
    `Sunday: 8am - 8pm
    Monday: 6am - 6pm
    Tuesday: 6am - 6pm
    Wednesday: 6am - 6pm
    Thursday: 6am - 10pm
    Friday: 6am - 10pm
    Saturday: 8am - 10pm`;


    OpeningHours.append(OpeningHoursHeader);
    OpeningHours.append(OpeningHoursBody);

    /* Location */

    let Location = document.createElement('div');
    Location.className = 'Location';

    let LocationHeader = document.createElement('div');
    LocationHeader.className = 'location-header';
    LocationHeader.textContent = 'Location';

    let LocationBody = document.createElement('div');
    LocationBody.className = 'location-body';
    LocationBody.textContent = '123 Pesticide Drive, RATaurant, New York';

    Location.append(LocationHeader);
    Location.append(LocationBody);

    //Build the Hero

    hero.append(HeroIntroductionWrapper);
    hero.append(OpeningHours);
    hero.append(Location);

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

    let HeaderBtnActive = document.getElementById('HomeBtn');
    HeaderBtnActive.classList.add('activeHeaderbtn');
};

export default home;