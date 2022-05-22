let header = () => {
    /* main header div */
    let header = document.createElement('div');
    header.className = 'header';
    header.id = 'header';


    /*Header left + Logo */
    let headerleft = document.createElement('header-left');
    headerleft.className = 'header-left';
    headerleft.id = 'header-left';

    let headerlogo = document.createElement('img');
    headerlogo.className = 'header-logo';
    headerlogo.src = '../dist/img/logo.png'

    let restaurantName = document.createElement('div');
    restaurantName.className = 'BrandName';
    restaurantName.id = 'BrandName';
    restaurantName.textContent = 'Roach Resturant';

    headerleft.append(headerlogo);
    headerleft.append(restaurantName);


    /* Header Right*/

    let headerRight = document.createElement('div');
    headerRight.id = 'header-right';
    headerRight.className = 'header-right';

    let HomeBtn = document.createElement('div');
    HomeBtn.id = 'HomeBtn';
    HomeBtn.classList.add('headerbtn', 'HomeBtn');
    HomeBtn.textContent = 'Home';

    let aboutBtn = document.createElement('div');
    aboutBtn.id = 'AboutBtn';
    aboutBtn.classList.add('headerbtn', 'AboutBtn');
    aboutBtn.textContent = "About";

    let ContactBtn = document.createElement('div');
    ContactBtn.id = 'ContactBtn';
    ContactBtn.classList.add('headerbtn', 'ContactBtn');
    ContactBtn.textContent = "Contact";

    headerRight.append(HomeBtn);
    headerRight.append(aboutBtn);
    headerRight.append(ContactBtn);


    /*    Combine the two to form the Header Bar     */

    header.append(headerleft);
    header.append(headerRight);

    return header
};

export default header;