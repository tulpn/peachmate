import React from 'react'
import PropTypes from 'prop-types'

import "./Save.scss"

import Level from "../../../components/Level/Level";
import Button from "../../../components/Button/Button";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs"

export default function Save(props) {
  return (
    <div className="postCnt">
        <Level >
          <div>
            <h1 className="title is-1">Saving Post</h1>
            <p className="subtitle is-5">Use this form to create, edit or make other adjustemts to a post.</p>
          </div>
        </Level>

        <BreadCrumbs crumbs={props.crumbs}/>
  
      </div>
  );
}

Save.propTypes = {

}
