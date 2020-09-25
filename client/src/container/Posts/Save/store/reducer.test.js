import reducer from "./reducer";
import { fromJS, Map } from "immutable";
import { CONNECTION_ERROR } from "../../../../services/Api/Errors";

describe("post save reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        post: null,
        loading: false,
        error: null
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
        error: null
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
        error: null
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
        error: {
          status: CONNECTION_ERROR
        }
      })
    );
  });
});
