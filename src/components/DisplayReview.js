import React from "react";
import { CardTitle, CardBody, CardText, CardSubtitle, Button } from "reactstrap";

const DisplayReview = props => {
    console.log(props);
    return (
        <CardBody>
            <CardText>
                <b>User: </b> {props.gamingReview.owner_id}
            </CardText>
            <CardTitle>
                <b> Title: </b> {props.gamingReview.title}
            </CardTitle>
            <CardText>
                <b>Platform: </b> {props.gamingReview.platform}
            </CardText>
            <CardText>
                <b>Rating: </b> {props.gamingReview.rating}
            </CardText>
            <CardText>
                <b>Review: </b> {props.gamingReview.review}
            </CardText>
        </CardBody>

    );
};

export default DisplayReview;