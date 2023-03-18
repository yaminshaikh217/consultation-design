
const Register = () => {
    return (
        <>
            <section className="register-sec">
                <div className="left">
                    <p className="r-p c-w">  LET’S GET STARTED WITH </p>
                    <p className="r-p c-y">ARKAY CONSULTING</p>
                </div>
                <div className="right">
                    <form className="form">
                        <h3 className="reg-now">Connect Now </h3>
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
                            <p>"We will never share your personal info"</p>
                            <button className="btn">Connect</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register