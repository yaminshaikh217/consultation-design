import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <>
            <footer>
            
                <div className="footer-container">

                    <div>
                        <img src={logo} alt="logo" />
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil expedita molestias illo omnis dolor neque aut quis cumque ab.</p> */}
                    </div>

                    {/* <div className="footer-div">
                        <h3 className="footer-h3">Service Areas</h3>
                        <li>Education Planning</li>
                        <li>Retirement Planning</li>
                        <li>Annuities</li>
                        <li>401K Rollover Plan</li>
                        <li>Estate Planning</li>
                    </div> */}
                    <div className="footer-div">
                        <h3 className="footer-h3">Contact Info</h3>
                        <li><i className="fa-solid fa-phone"></i>
                            1234567890</li>
                        <li><i className="fa-solid fa-envelope"></i>
                            raju@arkay-consulting.com</li>
                        <li><i className="fa-solid fa-location-dot"></i>
                            Jalan USJ 12/1, Usj 12, 47630 Subang
                            Jaya, Selangor, Malaysia</li>
                    </div>
                    {/* <div className="footer-div">
                        <h3 className="footer-h3">Subscribe</h3>
                        <p>Enter your email and get latest updates
                            and offers subscribe us</p>
                        <div className="input-email">
                            <input type="Email" placeholder="Your Email " />
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div> */}
                </div>
            </footer>
        </>
    )
}

export default Footer