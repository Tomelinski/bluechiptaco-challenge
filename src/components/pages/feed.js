import React from "react";
import Post from "../common/post";
import FEED from "../../data/data.json";

const Feed = () => {
  return (
    <div className="row">
      <div className="offset-md-3 col-md-6 col-sm-12 mt-3">
        {FEED.feed.map((feed) => (
          <Post
            key={feed.id}
            user={feed.user}
            media={feed.media}
            isBookmarked={feed.isBookmarked}
            isLiked={feed.isLiked}
            title={feed.title}
            caption={feed.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
