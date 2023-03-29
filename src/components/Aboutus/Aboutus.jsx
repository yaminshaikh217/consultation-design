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
                            <i class="fa-solid fa-pen-fancy Icon"></i>
                            <h3>Education Planning</h3>
                            <p className="sec-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                                inventore voluptas modi quae porro. Expedita consequuntur nisi
                                ipsum quas id.
                            </p>
                            <button className="Read-btn">Read More</button>
                        </div>
                        <div className="card">
                            <i class="fa-regular fa-calendar-days Icon"></i>
                            <h3>Retirement Planning</h3>
                            <p className="sec-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                                inventore voluptas modi quae porro. Expedita consequuntur nisi
                                ipsum quas id.
                            </p>
                            <button className="Read-btn">Read More</button>
                        </div>
                        <div className="card">
                            <i class="fa-sharp fa-solid fa-circle-dollar-to-slot Icon"></i>
                            <h3>Annuities</h3>
                            <p className="sec-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                                inventore voluptas modi quae porro. Expedita consequuntur nisi
                                ipsum quas id.
                            </p>
                            <button className="Read-btn">Read More</button>
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
                    <div className="accordion specific">
                        <Accordian />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutus;
