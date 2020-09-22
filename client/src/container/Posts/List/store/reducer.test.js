import reducer from "./reducer";
import { fromJS, Map } from "immutable";

describe("posts fetch reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        posts: [],
        loading: false,
        fetchAllError: null,
        fetchAllSuccess: null,
        fetchAllFinished: null,
        error: "",
      })
    );
  });

  it("should handle FETCH_ALL_START", () => {
    expect(
      reducer(undefined, {
        type: "FETCH_ALL_START",
      })
    ).toEqual(
      fromJS({
        posts: [],
        loading: true,
        fetchAllError: null,
        fetchAllSuccess: null,
        fetchAllFinished: null,
        error: "",
      })
    );
  });

  it("should handle FETCH_ALL_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: "FETCH_ALL_SUCCESS",
        payload: { status: 0, items: [{ message: "Lorem Ipsum" }] },
      })
    ).toEqual(
      fromJS({
        posts: [{ message: "Lorem Ipsum" }],
        loading: false,
        fetchAllError: false,
        fetchAllSuccess: true,
        fetchAllFinished: true,
        error: "",
      })
    );
  });

  it("should handle FETCH_ALL_FAIL", () => {
    expect(
      reducer(undefined, {
        type: "FETCH_ALL_FAIL",
      })
    ).toEqual(
      fromJS({
        posts: [],
        loading: false,
        fetchAllError: true,
        fetchAllSuccess: false,
        fetchAllFinished: true,
        error: "connection_error",
      })
    );
  });
});
