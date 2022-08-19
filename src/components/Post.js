import React from "react";
import { Card, Button } from "react-daisyui";
import { PhotographIcon } from "@heroicons/react/outline";

export default function Post(props) {
  return (
    <Card
      bordered={false}
      compact={true}
      className="bg-base-light-100 shadow-md"
    >
      {props.post.image && (
        <Card.Image
          src={props.post.image}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      )}
      {!props.post.image && props.imagePreview && (
        <div className="group flex w-full h-48 justify-center items-center bg-base-light-200">
          <PhotographIcon className="h-8 w-8 group-hover:h-12 group-hover:w-12 ease-in-out duration-300" />
        </div>
      )}
      <Card.Body>
        <Card.Title tag="h2">{props.post.title}</Card.Title>
        <p>{props.post.body}</p>

        <Card.Actions className="justify-end mt-2">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
