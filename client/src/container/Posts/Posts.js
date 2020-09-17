import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Posts.scss";
import Level from "../../components/Level/Level";
import Button from "../../components/Button/Button";
import PostTable from "../../components/Posts/PostTable/PostTable";
import Post from "../../models/Posts/post";

export default function PostContainer() {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const init = async () => {
    const res = await fetch("http://localhost:8888/");
    const body = await res.json();

    if (res.status !== 200) {
      setItems([]);
    } else {
      setItems(body.items.map(i => {
        const PostItem = new Post()
        PostItem.fromServerJSON(i)
        return PostItem;
      }))
    }
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      init();
    }
  });

  return (
    <div className="postCnt">
      <Level actions={<Button isPrimary>Create Post</Button>}>
        <div>
          <h1 className="title is-1">Posts Overview</h1>
          <p className="subtitle is-5">Browse, schedule, review and analyse your posts.</p>
        </div>
      </Level>

      <PostTable items={items} loading={!loaded}/>
    </div>
  );
}

PostContainer.propTypes = {};
