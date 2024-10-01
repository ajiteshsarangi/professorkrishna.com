import React from "react";
import Marquee from "react-fast-marquee";

const HeaderTopV1 = () => {
  return (
    <>
      <div className="top-bar-area top-bar-style-two bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <Marquee>
              <div className="col-lg-4 text-end">
                <div className="info">
                  <h5>
                    <a href="mailto:info@crysta.com">info@bestup.com</a>
                  </h5>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopV1;
