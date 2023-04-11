
import human from "../../assets/human.png"

const Information = () => {
    return (
        <>
            <section className="info-section">
                <h3 className="sec-heading"> We Teach People How To
                    Conquer Your Financial Future
                </h3>
                <div>
                    <p className="sec-p p-bolder">The Rule of 72</p>
                    <p className="sec-p">A basic priciple on how money doubles over time </p>
                </div>
                <div>
                    <p className="sec-p p-bolder">The Power of Indexed Contracts</p>
                    <p className="sec-p">Imagine being able to participate in the successes of the market with a zero-loss guarantee</p>
                </div>
                <div>
                    <p className="sec-p p-bolder">Accelarated Living Benifits</p>
                    <p className="sec-p">Life insurance that you don't have to die to use </p>
                </div>
                <div>
                    <p className="sec-p p-bolder">The Wealth Flow Formula</p>
                    <p className="sec-p">Your financial needs change over time</p>
                </div>
                {/* <p className="sec-p">Lorem Ipsum is simply dummy text the printing and
                    typesetting industry. Lorem Ipsum has been the
                    Lorem Ipsum is simply dummy text the printing and
                    typesetting industry. Lorem Ipsum has been
                    the industryindustry</p> */}
                <img src={human} alt="human" className="img" />
            </section>
        </>
    )
}

export default Information