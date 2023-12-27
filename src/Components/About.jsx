import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div className="content-wrapper">
      {/* <ProgressBar /> */}
      <Header />
      <section id="author" className="section-padding authorv2 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
              <div className="section-title-center text-center">
                <span>ABOUT E-LIBRARY</span>
                <h2 className="display-6">Where Information Comes Alive</h2>
                <div className="section-divider divider-traingle"></div>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-6 mb-4 mb-lg-0 aos-init"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="authorv2__image">
                <img
                  className="img-fluid"
                  src="images/achive.png"
                  alt="Author"
                />

                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p>
                Smart City Digital Library is the online repository of
                knowledge, where it is easy to discover the knowledge from
                available recourse with search/browse facilities. It is an
                innovative project mentored by Nagpur Smart and Sustainable City
                Development Corporation Limited under the Smart City Mission of
                Ministry of Housing and Urban Affairs (MoHUA), Government of
                India. The objective of this ambitious solution is to ease the
                access of the readers to the right resources on the go with
                minimum efforts.
                <br />
                <br />
                Smart City&apos;s Digital Library provides Study resources that
                benefit all age group users, School and College students,
                aspirants preparing for competitive exams, Researchers and
                general learners. This Digital Library is designed to hold
                content of English, Hindi, Marathi languages. Under this project
                traditional Libraries of Nagpur Municipal Corporation are being
                converted to Digital libraries with the facilities to have
                access to the resources worldwide. The library is equipped with
                smart devices which facilitates differently-able learners to
                gain the knowledge of their choice
              </p>
              <br />
              <div className="authorv2__content">
                <ul className="social-icon mt-3">
                  <li>
                    <a href="https://www.facebook.com">
                      <img
                        className="img-fluid"
                        src="images/facebook.svg"
                        alt="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <img
                        className="img-fluid"
                        src="images/twitter.svg"
                        alt="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <img
                        className="img-fluid"
                        src="images/linkedin.svg"
                        alt="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com">
                      <img
                        className="img-fluid"
                        src="images/youtube-play.svg"
                        alt="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com">
                      <img
                        className="img-fluid"
                        src="images/whatsapp.svg"
                        alt="icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding counters ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
              <div className="section-title-center text-center">
                <span>AWESOME STATS</span>
                <h2 className="display-6">ALL MILESTONES ACHIEVED</h2>
                <div className="section-divider divider-traingle"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="counters__stats m-0 p-0 d-flex flex-wrap align-items-center justify-content-center">
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  className="aos-init"
                >
                  <div className="counters__stats-box h-100 translateEffect1">
                    <div className="counters__stats-icon">
                      <img
                        className="img-fluid"
                        src="images/page.svg"
                        alt="icon"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="counters__stats-box__number">
                      <span></span>
                    </div>
                    <h5>Books</h5>
                  </div>
                </li>

                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                  className="aos-init"
                >
                  <div className="counters__stats-box h-100 translateEffect1">
                    <div className="counters__stats-icon">
                      <img
                        className="img-fluid"
                        src="images/cart-alt.svg"
                        alt="icon"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="counters__stats-box__number">
                      <span>12500+</span>
                    </div>
                    <h5>Total Views </h5>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="aos-init"
                >
                  <div className="counters__stats-box h-100 translateEffect1">
                    <div className="counters__stats-icon">
                      <img
                        className="img-fluid"
                        src="images/award.svg"
                        alt="icon"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="counters__stats-box__number">
                      <span>3</span>
                    </div>
                    <h5>Awards</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
