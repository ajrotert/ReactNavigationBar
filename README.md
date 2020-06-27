# React Navigation Bar
Responsive navigation bar built using react JS.
View with github hosting: https://ajrotert.github.io/ReactNavigationBar/index
## HOW TO USE
### THREE STEPS

## (1) At the top of each HTML BODY add

    <nav id="nav-placeholder"></nav>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script type="text/babel" src="Navigation/reactnav.js"></script>



## (2) Add navigation links in the render() function inside the  <ul className="nav" id="navStart"> </ul>
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



 ## (3) To show the active page add the page ID to the list below
        else if (title.includes("Online")) {
            document.getElementById("PB-Page").classList.add("active");
