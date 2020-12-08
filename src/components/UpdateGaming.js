import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from "reactstrap";
import APIURL from "../helpers/enviroment";

const GameUpdate = props => {
    const [editTitle, setEditTitle] = useState(props.gamesToUpdate.title);
    const [editPlatform, setEditPlatform] = useState(props.gamesToUpdate.platform);
    const [editRating, setEditRating] = useState(props.gamesToUpdate.rating);
    const [editReview, setEditReview] = useState(props.gamesToUpdate.review);

    const gameEdit = e => {
        fetch(`${APIURL}games/${props.gamesToUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify({
                title: editTitle,
                platform: editPlatform,
                rating: editRating,
                review: editReview
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token
            })
        }).then(res => {
            props.fetchGames();
            props.updateOff();
        });
    };

    return (
        <Modal isOpen={true}>
      <ModalHeader>Update Review!</ModalHeader>
      <ModalBody>
        <Form onSubmit={gameEdit}>
          <FormGroup>
            <Label htmlFor="title">Edit Title:</Label>
            <Input
              type="text"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="platform">Edit Platform:</Label>
            <Input
              type="text"
              value={editPlatform}
              onChange={e => setEditPlatform(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rating">Edit Rating:</Label>
            <Input
              type="number"
              value={editRating}
              onChange={e => setEditRating(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="review">Edit Review:</Label>
            <Input
              type="text"
              value={editReview}
              onChange={e => setEditReview(e.target.value)}
            />
          </FormGroup>
          <Button
            type="submit"
          >
            Update
          </Button>
          <Button type="button" onClick={e => props.updateOff()}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
    );
};

export default GameUpdate;