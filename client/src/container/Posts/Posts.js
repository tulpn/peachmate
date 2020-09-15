import React from 'react'
import PropTypes from 'prop-types'

import "./Posts.scss"
import Level from '../../components/Level/Level';
import Button from "../../components/Button/Button"

export default function PostContainer() {
  return (
    <div className="postCnt">
      <Level actions={<Button>Create Post</Button>}>
          <h1>Posts</h1>
        </Level>
      
    </div>
  );
}

PostContainer.propTypes = {

}
