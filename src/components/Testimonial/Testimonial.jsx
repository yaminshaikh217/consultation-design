import testimonial from "../../assets/testimonial.png"

const Testimonial = () => {
    return (
        <>
            <section className="testimonial">
                <div className="box">
                    <div className="left-column">
                        <h3 className="testi_heading">Our Testimonial <span>Pro</span></h3>
                        <p>Dummy text of the printing and typesetting industry orhas been the industry's standard unknown printa galley.</p>
                        <div className="slider">
                            <div className="image">
                                <img src={testimonial} alt="human" />
                            </div>
                            <div className="about-image">
                                <p>Dummy text of the printing and typesetting
                                    industry orhas been the industry's standard
                                    unknown printa galley.</p>
                                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
                                <p>But ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore edoom agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui commodo consequat. Duis aute rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fatur. Exce pteur sint cupi tanont proident sunt in culpa qui officia deserune dipisicing elit sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <h3 className="testi_heading"> Our Success <span>Stories</span></h3>
                        <p>Dummy text of the printing and typesetting industry orhas been the industry's standard unknown printa galley.</p>
                        <div className="line">
                            <div className="boxes">
                                <div className="empty"></div>
                                <div className="fancy">
                                    <div>
                                        <img src={testimonial} alt="human" />
                                    </div>
                                    <p>Dummy text of the print and typesettg industry industry.</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="empty"></div>
                                <div className="fancy">
                                    <div>
                                        <img src={testimonial} alt="human" />
                                    </div>
                                    <p>Dummy text of the print and typesettg industry industry.</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="empty"></div>
                                <div className="fancy">
                                    <div>
                                        <img src={testimonial} alt="human" />
                                    </div>
                                    <p>Dummy text of the print and typesettg industry industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial