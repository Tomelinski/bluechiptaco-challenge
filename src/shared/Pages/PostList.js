import React from "react";

import Post from "./Components/Post";

import FEED from "../../data/data.json";

const home = () => {
  //const { id, title, caption, media, user, isBookmarked, isLiked } = FEED();
  return (
    <div className="row">
      <div className="offset-md-3 col-md-6 col-sm-12 mt-3">
        {FEED.feed.map((feed) => (
          <Post
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

export default home;
