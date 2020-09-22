import reducer from "./reducer";
import { fromJS, Map } from "immutable";

describe("post save reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        post: null,
        loading: false,
        savePostError: null,
        savePostSuccess: null,
        savePostFinished: null,
        error: ""
      })
    );
  });

  it("should handle SAVE_POST_START", () => {
    expect(
      reducer(undefined, {
        type: "SAVE_POST_START",
      })
    ).toEqual(
      fromJS({
        post: null,
        loading: true,
        savePostError: null,
        savePostSuccess: null,
        savePostFinished: null,
        error: "",
      })
    );
  });

  it("should handle SAVE_POST_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: "SAVE_POST_SUCCESS",
        payload: { status: 0, items: [{ message: "Lorem Ipsum" }] },
      })
    ).toEqual(
      fromJS({
        post: { message: "Lorem Ipsum" },
        loading: false,
        savePostError: false,
        savePostSuccess: true,
        savePostFinished: true,
        error: ""
      })
    );
  });

  it("should handle SAVE_POST_FAIL", () => {
    expect(
      reducer(undefined, {
        type: "SAVE_POST_FAIL",
      })
    ).toEqual(
      fromJS({
        post: null,
        loading: false,
        savePostError: true,
        savePostSuccess: false,
        savePostFinished: true,
        error: "connection_error",
      })
    );
  });
});
