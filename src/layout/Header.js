export default function Header() {
    return(
       <>
        <nav>
        <div className="nav-wrapper container">
          <a href="index.html" className="brand-logo">Movie</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="index.html">React</a></li>
            {/* <li><a href="#">Components</a></li>
            <li><a href="#">JavaScript</a></li> */}
          </ul>
        </div>
      </nav>
       </>
    )
}