import React from "react";
import PropTypes from "prop-types";

import "./Save.scss";

import Level from "../../../components/Level/Level";
import Button from "../../../components/Button/Button";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SavePostForm from "../../../components/Posts/SavePostForm/SavePostForm";

export default function Save(props) {
  const handleSubmit = (values) => {
    console.log("saving new post", values);
    const finalData = {
      title: values.get("title") || null,
      message: values.get("message")  || null,
      when: values.get("when")  || null,
      network: values.get("network") || null,
    };
    console.log("saving new post", finalData);
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
