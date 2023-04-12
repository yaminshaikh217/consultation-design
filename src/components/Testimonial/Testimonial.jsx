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
                        <h3 className="testi_heading"> <span>Why</span> Us?</h3>
                        <p>Dummy text of the printing and typesetting industry orhas been the industry's standard unknown printa galley.</p>
                        <div className="line">
                            {/* <div className="line-abs">
                                    <img src="public/images/line.png" alt="diamond" />
                                </div> */}
                            <div className="boxes">
                                <div className="empty">
                                    <img src="public/images/diamond.png" alt="diamond" />
                                </div>

                                <div className="fancy">
                                    <p>World-Class Quality</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="empty">
                                    <img src="public/images/bulb.png" alt="bulb" />
                                </div>
                                <div className="fancy">
                                    <p>Expert Strategic Planning</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="empty">
                                    <img src="public/images/thumb.png" alt="thumb" />
                                </div>
                                <div className="fancy">
                                    <p>Industry-Best Pricing</p>
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