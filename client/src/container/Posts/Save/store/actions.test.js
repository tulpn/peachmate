import configureMockStore from "redux-mock-store";

import MockAdapter from "axios-mock-adapter"; //https://github.com/ctimmerm/axios-mock-adapter#readme
import axios from "../../../../services/Api/DataStore";

import thunk from "redux-thunk";

import * as actions from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import Post from "../../../../models/Posts/post";

var mock = new MockAdapter(axios);

describe("posts actions", () => {
  it("should create a new post ", () => {
    const payload = {
      status: 0,
      items: [
        {
          title: null,
          message: "Lorem Ipsum",
          network: "linkedin",
          when: "2020-09-24T10:22:29.972Z",
        },
      ],
    };

    const expectedAction = {
      type: "SAVE_POST_SUCCESS",
      payload: payload,
    };

    expect(actions._savePostSuccess(payload)).toEqual(expectedAction);
  });

  it("should create an action to start save a post", () => {
    const expectedAction = {
      type: "SAVE_POST_START",
    };

    expect(actions._savePostStart()).toEqual(expectedAction);
  });

  it("should create an action that failed to save a post because of network issues", () => {
    const expectedAction = {
      type: "SAVE_POST_FAIL",
    };

    expect(actions._savePostFail()).toEqual(expectedAction);
  });

  it("should create an action signals to reset the post", () => {
    const expectedAction = {
      type: "POST_RESET",
    };

    expect(actions._reset()).toEqual(expectedAction);
  });
});

describe("async post actions", () => {
  // we don't want to do this, as it will act as pass-through
  //   afterEach(() => {
  //     mock.restore();
  //   });

  it("after it CREATES a new post", () => {
    let mockPostData = {
      message: "Test Message",
      network: "linkedin",
      when: "2020-09-24T10:22:29.972Z",
    };

    let nP = new Post(mockPostData);

    mock.onPost("http://localhost:8888/posts/post").reply(function (config) {
      // `config` is the axios config and contains things like the url

      // return an array in the form of [status, data, headers]
      return [
        200,
        {
          status: 0,
          items: [{ ...mockPostData, _id: "abcedf" }],
        },
      ];
    });

    const expectedActions = [
      {
        type: "SAVE_POST_START",
      },
      {
        type: "SAVE_POST_SUCCESS",
        payload: { status: 0, items: [{ ...mockPostData, _id: "abcedf" }] },
      },
    ];

    const store = mockStore({ post: null });

    return store.dispatch(actions.savePost(nP.toServerJSON())).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates savePost after network error", () => {
    let mockPost = {
      title: null,
      message: "Test Message",
      network: "linkedin",
      when: "2020-09-24T10:22:29.972Z",
    };

    let nP = new Post(mockPost);

    mock.onPost("http://localhost:8888/posts/post").networkError();

    const expectedActions = [
      {
        type: "SAVE_POST_START",
      },
      {
        type: "SAVE_POST_FAIL",
      },
    ];

    const store = mockStore({ post: null });

    return store.dispatch(actions.savePost(nP.toServerJSON())).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates savePost after timeout", () => {
    let mockPost = {
      title: null,
      message: "Test Message",
      network: "linkedin",
      when: "2020-09-24T10:22:29.972Z",
    };

    let nP = new Post(mockPost);

    mock.onPost("http://localhost:8888/posts/post").timeout();

    const expectedActions = [
      {
        type: "SAVE_POST_START",
      },
      {
        type: "SAVE_POST_FAIL",
      },
    ];

    const store = mockStore({ post: null });

    return store.dispatch(actions.savePost(nP.toServerJSON())).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates a PUT request because we have an id", () => {
    let mockPost = {
      _id: "abcdef123",
      title: null,
      message: "Test Message",
      network: "linkedin",
      when: "2020-09-24T10:22:29.972Z",
    };

    let nP = new Post(mockPost);

    mock
      .onPut(`http://localhost:8888/posts/post/${mockPost._id}`)
      .reply(function (config) {
        // `config` is the axios config and contains things like the url

        // return an array in the form of [status, data, headers]
        return [
          200,
          {
            status: 0,
            items: [{ ...mockPost }],
          },
        ];
      });

    const expectedActions = [
      {
        type: "SAVE_POST_START",
      },
      {
        type: "SAVE_POST_SUCCESS",
        payload: { status: 0, items: [{ ...mockPost }] },
      },
    ];

    const store = mockStore({ post: null });

    return store.dispatch(actions.savePost(nP.toServerJSON())).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
