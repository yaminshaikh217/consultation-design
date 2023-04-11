import Accordian from "../Accordian";

const Aboutus = () => {
    return (
        <>
            <section className="why-us">
                <div className="w-90">
                    <div className="sec-hp">
                        <h3 className="sec-heading">Why Us</h3>
                        <p className="sec-p p-border">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                            tempore maiores exercitationem, neque doloremque libero suscipit
                            optio aspernatur voluptatem. Rem?
                        </p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <div><img src="public/images/estate.svg" alt="estate" /></div>
                                <h3>Estate Planning</h3>
                                <p className="sec-p">
                                    You want to protect your legacy?. We’re here to help.
                                    We are integral part of the team that wants to help protect the legacy you worked hard to build. This product is powered by the NetLaw Platform™, works closely with your trusted advisor to offer a comprehensive solution to ensuring proper legal protections for your estate. By combining the experience of a national law firm with the dynamic technology offered by NetLaw, you get comprehensive advice through contemporary means. That’s quality estate planning, intelligently delivered.
                                </p>
                            </div>
                            <div><img src="public/images/house.svg" alt="house" /></div>
                        </div>
                        <div className="card card-2">
                            <div><img src="public/images/penny.png" alt="penny" /></div>
                            <div><div><img src="public/images/retire.svg" alt="penny" /></div>
                                <h3>Retirement Planning</h3>
                                <p className="sec-p">
                                    Plan for Retirement Champ (Private Pension Plan): If You’re approaching retirement age, maybe you feel that you’ve started planning for retirement too late, or you’re concerned that you won’t have enough saved by the time you retire.
                                    Our Products can help with the retirement gap and can use the potential cash value growth to help supplement your retirement income to fill the retirement gap in your financial strategy. You can access cash value through Product loans or withdrawals and the money could be used for a generally tax-free income stream.
                                </p></div>
                        </div>
                        <div className="card d-block">
                            <div><img src="public/images/clock.svg" alt="clock" /></div>
                            <h3>Annuities</h3>
                            <p className="sec-p">
                                Annuities can help protect your financial future. We understand your need and analyze Financial Gap. A annuity can provide a versatile plan for the unpredictable future.
                            </p>
                            <h3>We offer flexible annuity products:</h3>
                            <div className="accordion specific">
                                <Accordian />
                            </div>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-pen-fancy Icon"></i>
                            <h3>Education Planning</h3>
                            <p className="sec-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                                inventore voluptas modi quae porro. Expedita consequuntur nisi
                                ipsum quas id.
                            </p>
                            <button className="Read-btn">Read More</button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Aboutus;
