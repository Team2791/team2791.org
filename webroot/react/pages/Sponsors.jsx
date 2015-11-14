import React from "react";

import {Well} from "react-bootstrap";
import {ButtonLink} from "react-router-bootstrap";

class Sponsors extends React.Component {

    componentDidMount() {
        $('.btn-vertical-slider').on('click', function () {
        
            if ($(this).attr('data-slide') == 'next') {
                $('#myCarousel').carousel('next');
            }
            if ($(this).attr('data-slide') == 'prev') {
                $('#myCarousel').carousel('prev')
            }

        });
    }

    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Sponsors</h2>
                </div>
                <h1 className="text-center gold">Gold Sponsors</h1>
                <div className="carouselContainer">
                    <div id="carousel">
                        <figure><img src="/img/sponsors/abrams_llewellyn_family.jpg" /></figure>
                        <figure><img src="/img/sponsors/cap_com_fcu.jpg" /></figure>
                        <figure><img src="/img/sponsors/kot.jpg" /></figure>
                        <figure><img src="/img/sponsors/picone_family.jpg" /></figure>
                        <figure><img src="/img/sponsors/pva.jpg" /></figure>
                    </div>
                </div>
                <br /><br /><br /><br />
                <h1 className="text-center silver">Silver Sponsors</h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2"><div className="row" id="silverSponsors">
                        <div className="col-md-4 col-sm-4 col-xs-4"><img src="/img/sponsors/MH_Engineering.jpg" /></div>
                        <div className="col-md-4 col-sm-4 col-xs-4"><img src="/img/sponsors/golub_foundation.jpg" /></div>
                        <div className="col-md-4 col-sm-4 col-xs-4"><img src="/img/sponsors/stewarts.jpg" /></div>
                    </div></div>
                </div>
                <br /><br />
                <h1 className="text-center bronze">Bronze Sponsors</h1>
                <div className="row" id="bronzeSponsors">
                    <p className="text-center"><a href="http://www.ewcp.org/">East West Collaboration Project</a></p>
                    <p className="text-center"><a href="http://www.douglasind.com/zen/">Douglas Industrial</a></p>
                    <p className="text-center">The Bush Family</p>
                    <p className="text-center">Mary Howard</p>
                    <p className="text-center">Nancy Casler</p>
                </div>
                <br /><br />
                <p className="text-center">Interested in sponsoring?&nbsp;&nbsp;<ButtonLink to="/involved#sponsor">Find out more here.</ButtonLink></p>
            </div>
        );
    }
}

export default Sponsors;
