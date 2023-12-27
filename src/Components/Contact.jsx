const Contact = () => {
  return (
    // <div>Hello</div>

    <section id="contact" className="p-80px-tb ">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>CONTACT US</span>
              <h2 className="display-6">We'd love to hear from you</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b aos-init"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact-form-box">
              <form id="contact-form">
                <div className="form-group mb13">
                  <input
                    name="name"
                    className="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    /* required={true} */
                  />
                  <span className="text-danger d-block fw-400 fs-small mt-2"></span>
                </div>
                <div className="form-group mb13">
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    /* onChange={(e) => onChangeInput(e)} */
                    /* required={true} */
                  />
                  <span className="text-danger d-block fw-400 fs-small mt-2"></span>
                </div>
                <div className="form-group mb13">
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    /* onChange={(e) => onChangeInput(e)} */
                  />
                  <span className="text-danger d-block fw-400 fs-small mt-2"></span>
                </div>
                <div className="form-group mb30">
                  <textarea
                    name="notes"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="d-flex ">
                  <button
                    type="submit"
                    className="btn frontend-btn align-items-center"
                    /* disabled={disable} */
                  >
                    <span>Send Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 m-25px-b aos-init"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact__address p-30px">
              <ul className="contact__address__content">
                <li>
                  <span>ADDRESS:</span>
                  Great Nag Rd, Indira Nagar
                  <br />
                  Rambagh, Nagpur, Maharashtra 440003
                </li>
                <li>
                  <span>PHONE:</span>
                  <a href="tel:+918981055565">(+91) 898 105 5565</a>
                </li>
                <li>
                  <span>EMAIL:</span>
                  <a href="/">info@digitallibrary.com</a>
                </li>
              </ul>
              <h4>Reach out to us on social media</h4>
              <ul className="social-icon mt-3">
                <li>
                  <a href="https://www.facebook.com">
                    <img
                      className="img-fluid"
                      src="images/facebook.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <img
                      className="img-fluid"
                      src="images/twitter.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <img
                      className="img-fluid"
                      src="images/linkedin.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <img
                      className="img-fluid"
                      src="images/youtube-play.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.whatsapp.com">
                    <img
                      className="img-fluid"
                      src="images/whatsapp.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
