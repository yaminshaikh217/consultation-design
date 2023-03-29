
const Hero = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="Hero-container">
                        <div className="Hero-left">
                            <h1>Let's Plan <br /> For The <br /> Future</h1>
                            <button className="cta">Explore Now</button>
                        </div>
                        <form className="form">
                            <h3 className="reg-now">Connect Now <i class="fa-solid fa-hand-point-down blinking"></i> </h3>
                            <div className="input-div">
                                <input type="text" placeholder=" Your Name" />
                            </div>
                            <div className="input-div">
                                <input type="email" placeholder=" Your Email" />
                            </div>
                            <div className="input-div">
                                <input type="phone" placeholder=" Phone Number" />
                            </div>
                            <div className="last-reg">
                                {/* <p>"We will never share your personal info"</p> */}
                                <button className="btn">Connect</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero