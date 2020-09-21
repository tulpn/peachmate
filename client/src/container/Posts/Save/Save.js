import React from "react";
import PropTypes from "prop-types";

import "./Save.scss";

import { useSelector, useDispatch } from "react-redux";

import Level from "../../../components/Level/Level";
import Button from "../../../components/Button/Button";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SavePostForm from "../../../components/Posts/SavePostForm/SavePostForm";

import * as postSaveActions from "./store/actions"
import Post from "../../../models/Posts/post";

export default function Save(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    let nP = new Post(values.get("title"), values.get("message"), values.get("when"), values.get("network"))

    dispatch(postSaveActions.savePost(nP.toServerJSON()))

  };
  return (
    <div className="postCnt">
      <Level>
        <div>
          <h1 className="title is-1">Saving Post</h1>
          <p className="subtitle is-5">
            Use this form to create, edit or make other adjustemts to a post.
          </p>
        </div>
      </Level>

      <BreadCrumbs crumbs={props.crumbs} />

      <SavePostForm onSubmit={handleSubmit} />
    </div>
  );
}

Save.propTypes = {};
