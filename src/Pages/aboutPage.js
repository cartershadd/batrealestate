import React, {Component} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page">
                <p>
                    Many of you may have noticed a rise in the mosquito population this summer. <br/>
                    Bats are amazing creatures, and they also eat a lot of mosquitoes.<br/>
                    Making houses for bats is an excellent way to keep the insect population low. <br/>
                    <br/>
                    <br/>
                    Our mission is to integrate a love of wildlife with the modern home. <br/>
                    Our bat houses come equipped with camera technology to update you on changes to the occupation of your bat house. <br/>
                    The risk of contracting rabies from bats is extremely low, even if the bat house is located on your
                    house. <br/>
                    Although we cannot guarantee results, bat houses at a minimum will help keep bats from potentially
                    occupying a space in your attic.
                </p>
                <img src={process.env.PUBLIC_URL + '/img/three-bats.png'} alt="img" className="three-bats"/>
            </div>
        );
    }
}

export default AboutPage;