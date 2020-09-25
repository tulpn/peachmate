import reducer from "./reducer";
import { fromJS, Map } from "immutable";
import { CONNECTION_ERROR } from "../../../../services/Api/Errors";

describe("posts fetch reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        posts: [],
        loading: false,
        error: null
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
        error: null
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
        error: null
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
        error: {
          status: CONNECTION_ERROR
        }
      })
    );
  });
});
