import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../helpers/enviroment";
import '../styles/CreateGaming.css'

const GameCreate = props => {
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`${APIURL}games/review/`, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                platform: platform,
                rating: rating,
                review: review
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTitle("");
            setPlatform("");
            setRating(0);
            setReview("");
        })
        .then(data => {
            props.fetchGames();
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="mainDiv">
            <h2>Create Thy Review!</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title:</Label>
                    <Input onChange={e => setTitle(e.target.value)} type="text" id="title" value={title} placeholder="Game Title?" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="platform">Platform:</Label>
                    <Input onChange={e => setPlatform(e.target.value)} type="text" id="platform" value={platform} placeholder="Game Platform?" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">Rating:</Label>
                    <Input onChange={e => setRating(e.target.value)} type="number" id="rating" value={rating} placeholder="Rating: Out of 10" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="review">Review:</Label>
                    <Input onChange={e => setReview(e.target.value)} type="text" id="review" value={review} placeholder="Your honest, true to yourself, review" />
                </FormGroup>
                <Button type="submit">Submit Review </Button>
            </Form>
        </div>
    );
};

export default GameCreate;