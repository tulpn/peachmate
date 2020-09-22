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

  const loading = useSelector((state) =>
    state.get("posts").get("save").get("loading")
  );

  const savePostError = useSelector((state) =>
    state.get("posts").get("save").get("savePostError")
  );
  
  const savePostSuccess = useSelector((state) =>
    state.get("posts").get("save").get("savePostSuccess")
  );
  
  const savePostFinished = useSelector((state) =>
    state.get("posts").get("save").get("savePostFinished")
  );
  
  const error = useSelector((state) =>
    state.get("posts").get("save").get("error")
  );


  const handleSubmit = (values) => {
    let postData = {
      title: values.get("title"),
      message: values.get("message"),
      when: values.get("when"),
      network: values.get("network"),
    }
    let nP = new Post(postData)

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

      <SavePostForm onSubmit={handleSubmit} loading={loading} savePostError={savePostError} savePostSuccess={savePostSuccess} savePostFinished={savePostFinished} error={error} />
    </div>
  );
}

Save.propTypes = {};
