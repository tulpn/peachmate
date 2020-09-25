import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./Save.scss";

import { useSelector, useDispatch } from "react-redux";


import formatISO from 'date-fns/formatISO'

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

  const currentPost = useSelector((state) =>
    state.get("posts").get("save").get("post")
  );

  const loading = useSelector((state) =>
    state.get("posts").get("save").get("loading")
  );
  
  const error = useSelector((state) =>
    state.get("posts").get("save").get("error")
  );


  const handleSubmit = (values) => {
    
    const chosenWhen = values.get("when") || null

    let networks = [
      values.get("networkLinkedIn") && "linkedIn",
      values.get("networkTwitter")  && "twitter"
    ].filter(i => (i !== undefined && i !== null))

    console.log("Networks", networks)
    let postData = {
      message: values.get("message"),
      when: chosenWhen,
      networks: networks,
    }
    console.log("postData", postData)
    let nP = new Post(postData)

    console.log(nP)
    dispatch(postSaveActions.savePost(nP.toServerJSON()))
  };

  const notifcationDeleteHandler = () => {
    setNotifcationMessage(null)
  }

  const initNotificationMessage = () => {
    let newNotifcationMessage = null
    if (loading === false &&  ( error === undefined || error === null ) && currentPost !== null){
      newNotifcationMessage = <NotificationMessage isSuccess onDelete={notifcationDeleteHandler}>
        <p>
          Post successfully saved.
        </p>
      </NotificationMessage>
    } else if (loading === false &&  error !== null && error !== undefined ) {
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
  }, [error])


 
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
      <SavePostForm onSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
}

Save.propTypes = {};
