import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [
                {
                    id: 1,
                    name: "Large Bat House",
                    img: [process.env.PUBLIC_URL + '/img/large-collage.jpg'],
                    linkText: "Large Bat House Blueprint",
                    link: "/drawings/largeBatAssembly.PDF",
                    about: "A large bat house which will most likely attract the bigger creatures of the night."
                },
                {
                    id: 2,
                    name: "Small Bat House",
                    img: [process.env.PUBLIC_URL + '/img/small-collage.jpg'],
                    linkText: "Small Bat House Blueprint",
                    link: "/drawings/smallBH.PDF",
                    about: "A smaller model for the littler bats seeking homes."
                },
            ]
        }
    }

    render() {
        return (
            <div className="house-container">
                {this.state.houses.map((house, index) =>
                    <Card key={index} className="house-card" style={{width: '18rem'}}>
                        <Card.Img className="batImg" alt="img" variant="top" src={house.img}/>
                        <Card.Body>
                            <Card.Title>{house.name}</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">
                                <a href={house.link} className="pdf-link">{house.linkText}</a>
                            </Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default Home;