import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Blog = () => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <main>
      <div
        className="blog"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <div className="blog-container has-scrollbar">
            <div className="blog-card">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712736280/blog-1_ma5xwq.jpg"
                  alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                  width={300}
                  className="blog-banner"
                />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">
                  Fashion
                </a>
                <a href="#">
                  <h3 className="blog-title">
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </h3>
                </a>
                <p className="blog-meta">
                  By <cite>Mr Admin</cite> /{" "}
                  <time dateTime="2022-04-06">Apr 06, 2024</time>
                </p>
              </div>
            </div>
            <div className="blog-card">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712736279/blog-2_sjskwe.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width={300}
                />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">
                  Clothes
                </a>
                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Robin</cite> /{" "}
                  <time dateTime="2022-01-18">Jan 18, 2024</time>
                </p>
              </div>
            </div>
            <div className="blog-card">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712736278/blog-3_imxomj.jpg"
                  alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                  className="blog-banner"
                  width={300}
                />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">
                  Shoes
                </a>
                <h3>
                  <a href="#" className="blog-title">
                    EBT vendors: Claim Your Share of SNAP Online Revenue.
                  </a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Selsa</cite> /{" "}
                  <time dateTime="2022-02-10">Feb 10, 2024</time>
                </p>
              </div>
            </div>
            <div className="blog-card">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712736279/blog-4_ui8mt0.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width={300}
                />
              </a>
              <div className="blog-content">
                <a href="#" className="blog-category">
                  Electronics
                </a>
                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>
                <p className="blog-meta">
                  By <cite>Mr Pawar</cite> /{" "}
                  <time dateTime="2022-03-15">Mar 15, 2024</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
