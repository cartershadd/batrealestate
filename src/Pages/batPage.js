import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class BatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bats: [
                {
                    id: 1,
                    name: "Little Brown Bat",
                    img: [
                        process.env.PUBLIC_URL + '/img/littlebrownbat-img.JPG',
                        process.env.PUBLIC_URL + '/img/distribution-littlebrownbat.png'
                    ],
                    distribution: "Distribution in North America",
                    about: "Little brown bat info"
                },
                {
                    id: 2,
                    name: "Big Brown Bat",
                    img: [
                        process.env.PUBLIC_URL + '/img/bigbrownbat-img.jpg',
                        process.env.PUBLIC_URL + '/img/distribution-bigbrownbat.png'
                    ],
                    distribution: "Distribution in North America",
                    about: "Big brown bat info"
                }
            ]
        }
    }

    render() {
        return (
            <div className="bat-container">
                {this.state.bats.map((bat, index) =>
                    <Card key={index} className="bat-card">
                        <Card.Title>{bat.name}</Card.Title>
                        <Card.Body>
                            <Card.Img className="bat-profile-pic" alt="img" variant="top" src={bat.img[0]}/>
                            <Card.Subtitle>{bat.distribution}</Card.Subtitle>
                            <Card.Img className="bat-map" alt="img" src={bat.img[1]}/>
                            <Card.Text>
                                {bat.about}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default BatPage;