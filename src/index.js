import home from './home';
import about from './about';
import clear from './clear';
import contact from './contact';


home();


//Delegating Event
document.getElementById("content").addEventListener("click", function(e) {

    // Homepage
	if(e.target.id == "HomeBtn") {
        clear();
        home();
	};
    //Aboutpage
    if(e.target.id  == "AboutBtn") {
        clear();
        about();
	};

    if(e.target.id == 'ContactBtn'){
        clear();
        contact();
    };

});