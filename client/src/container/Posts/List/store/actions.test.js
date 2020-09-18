import configureMockStore from "redux-mock-store";

import MockAdapter from "axios-mock-adapter"; //https://github.com/ctimmerm/axios-mock-adapter#readme
import axios from "../../../../services/Api/DataStore";

import thunk from "redux-thunk";

import * as actions from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

var mock = new MockAdapter(axios);

describe("posts actions", () => {
  it("should create an action to fetch all posts", () => {
    const payload = {
      status: 0,
      items: [],
    };

    const expectedAction = {
      type: "FETCH_ALL_SUCCESS",
      payload: payload,
    };

    expect(actions._fetchAllSuccess(payload)).toEqual(expectedAction);
  });

  it("should create an action to start fetch all posts", () => {
    const expectedAction = {
      type: "FETCH_ALL_START",
    };

    expect(actions._fetchAllStart()).toEqual(expectedAction);
  });

  it("should create an action that failed to fetch all posts because of connection issues", () => {
    const expectedAction = {
      type: "FETCH_ALL_FAIL",
    };

    expect(actions._fetchAllFail()).toEqual(expectedAction);
  });

  it("should create an action signals to reset the posts", () => {
    const expectedAction = {
      type: "POSTS_RESET",
    };

    expect(actions._reset()).toEqual(expectedAction);
  });
});

describe("async post actions", () => {
    // we don't want to do this, as it will act as pass-through
//   afterEach(() => {
//     mock.restore();
//   });

  it("creates _fetchAllSuccess all posts after it received them", () => {
    mock.onGet("http://localhost:8888/posts/").reply(function (config) {
        // `config` is the axios config and contains things like the url
      
        // return an array in the form of [status, data, headers]
        return [
          200,
          {
            status: 0,
            items: [{ message: "Test Message" }],
          },
        ];
      })

    const expectedActions = [
      {
        type: "FETCH_ALL_START",
      },
      {
        type: "FETCH_ALL_SUCCESS",
        payload: { status: 0, items: [{ message: "Test Message" }] },
      },
    ];

    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates _fetchAllFail after network error", () => {
    mock.onGet("http://localhost:8888/posts/").networkError()

    const expectedActions = [
      {
        type: "FETCH_ALL_START",
      },
      {
        type: "FETCH_ALL_FAIL",
      },
    ];

    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates _fetchAllFail after timeout", () => {
    mock.onGet("http://localhost:8888/posts/").timeout()

    const expectedActions = [
      {
        type: "FETCH_ALL_START",
      },
      {
        type: "FETCH_ALL_FAIL",
      },
    ];

    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
