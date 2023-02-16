import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="navbar">
                    <ul className="ul-list">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                      
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
