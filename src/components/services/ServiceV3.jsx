import React from 'react';
import ServiceV3Data from '../../jsonData/ServiceV3Data.json'
import SingleServiceV3 from './SingleServiceV3';

const ServiceV3 = () => {
    return (
        <>
            <div className="services-style-three-area bg-dark bg-cover default-padding bottom-less" style={{ backgroundImage: `url(/img/shape/banner-6.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Feature Causes</h5>
                                <h2 className="title">Everyone Deserves <br />The Opportunity To Learn</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServiceV3Data.map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV3 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;