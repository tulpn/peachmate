import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./Save.scss";

import { useSelector, useDispatch } from "react-redux";

import Level from "../../../components/Level/Level";
import Button from "../../../components/Button/Button";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SavePostForm from "../../../components/Posts/SavePostForm/SavePostForm";
import NotificationMessage from "../../../components/NotificationMessage/NotificationMessage"

import * as postSaveActions from "./store/actions"
import Post from "../../../models/Posts/post";

export default function Save(props) {
  const dispatch = useDispatch();
  
  const [notifcationMessage, setNotifcationMessage] = useState(null)

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

  const notifcationDeleteHandler = () => {
    setNotifcationMessage(null)
  }

  const initNotificationMessage = () => {
    let newNotifcationMessage = null
    if (loading === false &&  savePostError === false && savePostFinished === true && savePostSuccess === true){
      newNotifcationMessage = <NotificationMessage isSuccess onDelete={notifcationDeleteHandler}>
        <p>
          Post successfully saved.
        </p>
      </NotificationMessage>
    } else if (loading === false &&  savePostError === true && savePostFinished === true && savePostSuccess === false ) {
      newNotifcationMessage = <NotificationMessage isDanger onDelete={notifcationDeleteHandler}>
        <p>
          Post could not be saved. Please check for additional messages.
        </p>
      </NotificationMessage>
    }
    setNotifcationMessage(newNotifcationMessage)
  }

  useEffect(() => {
    initNotificationMessage()
  }, [savePostError, savePostFinished, savePostSuccess])


 
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
      {notifcationMessage}
      <SavePostForm onSubmit={handleSubmit} loading={loading} savePostError={savePostError} savePostSuccess={savePostSuccess} savePostFinished={savePostFinished} error={error} />
    </div>
  );
}

Save.propTypes = {};
