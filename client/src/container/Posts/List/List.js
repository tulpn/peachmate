import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./List.scss";

import { useSelector, useDispatch } from "react-redux";

import Level from "../../../components/Level/Level";
import Button from "../../../components/Button/Button";
import PostTable from "../../../components/Posts/PostTable/PostTable";
import Post from "../../../models/Posts/post";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import * as postListActions from "./store/actions";

export default function List(props) {
  const dispatch = useDispatch();

  const [initialised, setInitalised] = useState(false);
  const loading = useSelector((state) =>
    state.get("posts").get("list").get("loading")
  );
  const items = useSelector((state) =>
    state.get("posts").get("list").get("posts")
  );

  const init = () => {
    dispatch(postListActions.fetchPosts());
    setInitalised(true);
  };

  useEffect(() => {
    if (!initialised) {
      init();
    }
  });

  return (
    <div className="postCnt">
      <Level
        actions={
          <Button
            isPrimary
            onClick={() => {
              props.history.push("/posts/save");
            }}
          >
            Create Post
          </Button>
        }
      >
        <div>
          <h1 className="title is-1">Posts Overview</h1>
          <p className="subtitle is-5">
            Browse, schedule, review and analyse your posts.
          </p>
        </div>
      </Level>

      <BreadCrumbs crumbs={props.crumbs} />

      <PostTable
        items={items.toJS().map((i) => {
          let nP = new Post();
          nP.fromServerJSON(i);
          return nP;
        })}
        loading={loading}
      />
    </div>
  );
}

List.propTypes = {};
