import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
        <ul>
            <li className="sub-menu-trigger">
                <span className='nav-item text-white'>Collections</span>
                <div className="sub-menu">
                    <ul>
                        <li>
                            <a href="#">
                                Womenswear
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Womenswear accessories
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menswear
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menswear accessories
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Couture
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/en/model" className="nav-item">Models</a>
            </li>
            <li>
                <a href="/en/model" className="nav-item">Trends</a>
            </li>
            <li>
                <a href="/en/model" className="nav-item">Insights</a>
            </li>
            <li>
                <a href="/en/model" className="nav-item">Newsletter</a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
