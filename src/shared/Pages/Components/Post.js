import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faHeart,
  faComment,
  faBookmark,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Posts = (props) => {
  //const { id, title, caption, media, user, isBookmarked, isLiked } = ;
  return (
    <Card className="mt-4">
      <Card.Header>
        <div className="d-inline">
          <Image
            style={{ width: 30, height: 30 }}
            src={props.user.profilePhoto}
            roundedCircle
            className="mr-2"
          />
          {props.user.name}
        </div>
        <div className="d-inline float-right">
          <FontAwesomeIcon
            className="align-middle"
            icon={faEllipsisH}
            fixedWidth
          />
        </div>
      </Card.Header>
      <Card.Img variant="top" src={props.media.uuid} />

      <Card.Body>
        <div>
          <div className="d-inline mr-3">
            <FontAwesomeIcon
              icon={faHeart}
              color={props.isLiked ? "red" : ""}
              fixedWidth
            />
          </div>
          <div className="d-inline mr-3">
            <FontAwesomeIcon icon={faComment} fixedWidth />
          </div>
          <div className="d-inline">
            <FontAwesomeIcon icon={faPaperPlane} fixedWidth />
          </div>
          <div className="d-inline float-right">
            <FontAwesomeIcon
              icon={faBookmark}
              color={props.isBookmarked ? "brown" : ""}
              fixedWidth
            />
          </div>
        </div>
        <Card.Text className="mt-2">
          {props.user.name} {props.caption} *Post caption here*
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Posts;
