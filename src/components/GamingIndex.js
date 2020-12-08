import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "reactstrap";
import GameCreate from "./CreateGaming";
import DisplayReview from "./DisplayReview";
import APIURL from "../helpers/enviroment"; 
import GameUpdate from "./UpdateGaming";
import '../styles/GamingIndex.css'

const GamingIndex = props => {
    const [ games, setGames ] = useState([]);
    const [ updateReady, setUpdateReady ] = useState(false);
    const [ gamesToUpdate, setGamesToUpdate ] = useState({});

    const gameCard = () => {

        const deleteGame = gameInfo => {
            fetch(`${APIURL}games/${gameInfo.id}`, {
                method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: props.token
                })
            }).then(() => fetchGames());
        };
        const returnedArray = Array.from(games);
        return returnedArray.map((gameInfo, index) => {
            return (
                <Card key={index} className="reviewCard">
                    <DisplayReview gamingReview={gameInfo} fetchGames={fetchGames} editUpdateGame={editUpdateGame} updateOn={updateOn} token={props.token} />

                    <Button onClick={() => {
                        editUpdateGame(gameInfo);
                        updateOn(); 
                    }} >Update</Button>
                    <br />

                    <Button onClick={() => deleteGame(gameInfo)} >Delete</Button>
                    {updateReady ? (
                        <GameUpdate gamesToUpdate={gamesToUpdate} updateOff={updateOff} token={props.token} fetchGames={fetchGames} />
            ) : (
                <></>
            )}
                </Card>
            );
        });
    };

    const fetchGames = () => {
        fetch(`${APIURL}games/myreviews`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token
            })
        })
        .then(res => res.json())
        .then(data => setGames(data));
    };

    const editUpdateGame = games => {
        setGamesToUpdate(games);
        console.log(games);
    };
    
    const updateOn = () => {
        setUpdateReady(true);
    };

    const updateOff = () => {
        setUpdateReady(false);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className="mainContainer">
        <Container id="returnContainer">
            <Row id="spacing">
                <Col md="5">
                    <GameCreate fetchGames={fetchGames} token={props.token} />
                </Col>
                <Col md="10">
                    <div> {gameCard()} </div>
                    <br />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default GamingIndex;
