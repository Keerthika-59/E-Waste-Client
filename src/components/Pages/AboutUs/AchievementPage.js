import {React,useEffect} from 'react';
import { Card } from 'react-bootstrap'
import '../AboutUs/AboutUs.css'
export default function Achievements() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Card className="aboutcards">
                <Card.Img className="cardimg" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/achievements.png`} />
                <Card.Body>
                    <Card.Title className="achieves" >Our Achievements</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor molestie elementum. Cras id orci lacus. Nam at nisi bibendum, blandit mauris feugiat, eleifend tortor. Suspendisse scelerisque hendrerit orci non congue. Nullam vulputate turpis enim, sodales vehicula elit eleifend non. Mauris id congue dolor. Quisque luctus lorem a enim fringilla vehicula. Maecenas molestie quis erat vitae pharetra. Vivamus arcu augue, porta et sem quis, consectetur auctor felis. Aenean posuere est libero, ut lacinia velit commodo quis. Praesent urna augue, mollis in tincidunt a, consequat tempor purus.

                        Vestibulum facilisis purus ut tellus bibendum pharetra. Nunc consectetur mauris sed lacus iaculis, vitae accumsan massa ornare. Suspendisse sit amet faucibus ligula, in hendrerit enim. Morbi porta, mi sit amet egestas ornare, nisi mauris tempus arcu, at iaculis nunc erat vel ex. Proin a sem lacus. Donec ultricies blandit arcu, id fringilla libero feugiat a. In et elit ut nibh fringilla venenatis a et turpis.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
