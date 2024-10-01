import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json'
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <div className="about-three-thumb">
                                <img src="/img/thumb/banner.jpg" alt="Image Not Found" />
                                <img src="/img/thumb/profile.jpg" alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong><CountUp end={18} duration={3} enableScrollSpy /></strong> Years Experience</h2>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="about-three-info">
                                <h4 className="sub-title">About Us</h4>
                                <h2 className="title">Lorem ipsum <br /> dolor sit amet </h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas elementum nunc, sit amet tempor enim. Vestibulum nec ornare nisl.
                                </p>
                                <ul className="list-grid-four">
                                    {AboutV3ListData.map(about =>
                                        <li key={about.id}>{about.item}</li>
                                    )}
                                </ul>
                                <div className="about-author">
                                    {/* <div className="thumb">
                                        <img src="/img/team/9.jpg" alt="Image Not Found" />
                                    </div> */}
                                    <div className="info">
                                        <h4>Gati Krushna Acharya</h4>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;