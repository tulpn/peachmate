import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Posts.scss";
import Level from "../../components/Level/Level";
import Button from "../../components/Button/Button";
import PostTable from "../../components/Posts/PostTable/PostTable";

export default function PostContainer() {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const init = async () => {
    setLoaded(true);
    const res = await fetch("http://localhost:8888/");
    const body = await res.json();

    if (res.status !== 200) {
      setItems([]);
    } else {
      setItems(body.items);
    }
  };

  useEffect(() => {
    if (!loaded) {
      init();
    }
  });

  const renderedItems = items.map((i) => {
    return (
      <tr key={i._id}>
        <td>{i.network === "linkedin" ? <span className="icon ">
                <i class="fab fa-linkedin-in"></i>
              </span> : <span>U</span>}</td>
        <td>
          <p>{i.message}</p>
        </td>
        <td>date</td>
        <td>{i.posted === true ? <span class="tag is-success">Posted</span> : <span class="tag is-info">Scheduled</span> }</td>
        <td>
          <p className="buttons ">
            <Button isDanger title="Cancel Post">
              <span className="icon is-small">
                <i className="fas fa-window-close"></i>
              </span>
            </Button>
            <Button isInfo title="Edit Post">
              <span className="icon is-small">
                <i className="fas fa-edit"></i>
              </span>
            </Button>
            <Button isSuccess title="Manually Share now">
              <span className="icon is-small">
                <i className="fas fa-share"></i>
              </span>
            </Button>
          </p>
        </td>
      </tr>
    );
  });

  return (
    <div className="postCnt">
      <Level actions={<Button isPrimary>Create Post</Button>}>
        <div>
          <h1 className="title is-1">Posts Overview</h1>
          <p className="subtitle is-5">Browse, schedule, review and analyse your posts.</p>
        </div>
      </Level>

      <PostTable items={items}/>
    </div>
  );
}

PostContainer.propTypes = {};
