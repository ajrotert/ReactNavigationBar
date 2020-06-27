
/* HOW TO USE
 * THREE STEPS

 *(1) At the top of each HTML BODY add

    <nav id="nav-placeholder"></nav>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script type="text/babel" src="Navigation/reactnav.js"></script>



 *(2) Add navigation links in the render() function inside the  <ul className="nav" id="navStart"> </ul>
    * For NON-Dropdown use this template:
        <li className="navitem" id="Home-Page"><a href="index.html">Home</a></li>

    * For Dropdown use this template:
        <li class="dropdown navitem" id="Main-Page">
            <a href="#null" class="dropbtn">Dropdown Menu</a>
            <div class="dropdown-content">
                <a href="#webpage_here">Item 1</a>
                <a href="#webpage_here">Item 2</a>
                <a href="#webpage_here">Item 3</a>
            </div>
        </li>



    *(3) To show the active page add the page ID to the list below
        else if (title.includes("Online")) {
            document.getElementById("PB-Page").classList.add("active");
*/


//Styles for the navigation bar
function getStylesAsString() {
    return { __html: 'ul.nav { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; } li.navitem { float: left;  } li.navitem a, .dropbtn { display: inline-block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; } li.navitem a:hover, dropdown:hover .dropbtn { background-color: #0066ff; } li.dropdown { display: inline-block; } .dropdown-content { display: none; position: absolute; background-color: #DCDCDC; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } div.dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; text-align: left; display: block; } .dropdown-content a:hover { background-color: #f1f1f1; } .dropdown:hover .dropdown-content { display: block; } .active { background-color: #022E6D; } .hamburgerBar { display: none; } .sticky { position: fixed; top: 0; width: 90%; z-index: 100; } img.logo-nav { z-index: 1; position: fixed; top: 0; left: 0; height: 60px;} @media screen and (max-width: 1000px) { li.navitem a, .dropbtn { font-size: 12px;} div.dropdown-content a { font-size: 12px; } .sticky { width: 100%; } } @media screen and (max-width: 600px) { .nav li:not(:first-child):not(:last-child) { display: none; } .nav.responsive li:not(:empty) { float: none; display: block; text-align: left; } .navitem.hamburgerBar { float: right; display: block; } .nav.responsive { position: relative; } .nav.responsive .hamburgerBar { position: absolute; right: 0; top: 0; } .dropdown-content a { background-color: #DCDCDC; } .dropdown:hover .dropdown-content { display: contents; color: white; } li.navitem a, .dropbtn { float: none; display: block; text-align: left;} }'};
}

//Create navigation bar using react/JSX
class ArNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
            <style dangerouslySetInnerHTML={getStylesAsString()} />

            <nav id="nav-placeholder">
                <ul className="nav" id="navStart">
                        <li className="navitem" id="Home-Page"><a href="index.html">Home</a></li>
                        <li class="dropdown navitem" id="Main-Page">
                            <a href="#null" class="dropbtn">Dropdown Menu</a>
                            <div class="dropdown-content">
                                <a href="#webpage_here">Item 1</a>
                                <a href="#webpage_here">Item 2</a>
                                <a href="#webpage_here">Item 3</a>
                            </div>
                        </li>
                    <li className="navitem" id="PB-Page"><a href="https://developednotdownloaded.com" target="_blank">Parent Website</a></li>
                    <li className="navitem hamburgerBar" id="Drop-Down"><a href="#null" onClick={this.props.onClick}>&#9776;</a></li>
                </ul>
                </nav>
            </div>
        );
    }
}

//Loads navigation bar into webpage
ReactDOM.render(<ArNav onClick={toggleFunction} />, document.querySelector('#nav-placeholder'));


//*******************************************************************************
//Shows color on the active page. 
var title = document.title;

if (title.includes("Home"))
    document.getElementById("Home-Page").classList.add("active");
else if (title.includes("Online")) {
    document.getElementById("PB-Page").classList.add("active");
}
//*******************************************************************************
//Toggles Responsive menu 
function toggleFunction() {
    var x = document.getElementById("navStart");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
    return false;
}

//*******************************************************************************
//Toggles sticky menu. When the menu reaches the top, it attaches to the top

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-placeholder");

var sticky = navbar.offsetTop;

function myFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }

}