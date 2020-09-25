var parseISO = require("date-fns/parseISO");
var formatISO = require("date-fns/formatISO");

const Post = require("../../models/post");

/**
 * Gets a list of post documents
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getList = (req, res, next) => {
  const perPage = 25;
  const pageNo = Math.max(1, req.params.page || 0);

  let returnData = {
    status: 0,
  };

  // we want page 1 to be the same as 0, so we only start skipping at page 2 (the first 25)
  let skippedItems = 0;
  if (pageNo != 1) {
    skippedItems = perPage * (pageNo - 1);
  }

  Post.find()
    .limit(perPage)
    .skip(skippedItems)
    .then((posts) => {
      returnData = {
        ...returnData,
        items: posts.map((p) => {
          return p.toApiJSON();
        }),
      };
      res.json(returnData);
    })
    .catch((err) => {
      console.warn(err);
      returnData = {
        ...returnData,
        status: 1,
        error: {
          status: "error",
        },
      };

      res.status(500).json(returnData);
    });
};

/**
 * Gets a post document by ID
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getPost = (req, res, next) => {
  let returnData = {
    status: 0,
  };

  Post.findById(req.params.id)
    .then((post) => {
      returnData = {
        ...returnData,
        items: [post],
      };
      res.json(returnData);
    })
    .catch(console.warn);
};

/**
 * Creates a new post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.postPost = (req, res, next) => {
  let returnData = {
    status: 0,
  };

  let newPost = Post();
  newPost.message = req.body.message || "";

  // parse with ISO 8601
  if (req.body.when !== "" && req.body.when !== null && req.body.when !== undefined) {
    newPost.when = parseISO(req.body.when);
  } else {
    newPost.when = null;
  }

  newPost.networks = req.body.networks || [];
  newPost.postedOn = null;

  newPost.checkStatus();
  newPost.save();

  returnData = {
    ...returnData,
    items: [newPost],
  };

  res.json(returnData);
};

/**
 * Updates a post document
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.putPost = (req, res, next) => {
  let returnData = {
    status: 0,
  };

  const postId = req.params.id;
  let data = { ...req.body, when: parseISO(req.body.when) };
  Post.findOneAndUpdate({ _id: postId }, { $set: data }, { upsert: true })
    .then((post) => {
      returnData = {
        ...returnData,
        items: [post],
      };
      res.json(returnData);
    })
    .catch((err) => {
      res.status(500).json({
        status: 1,
        error: {
          status: "error",
        },
      });
    });
};

/**
 * Deletes a post by ID
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deletePost = (req, res, next) => {
  let returnData = {
    status: 0,
  };

  const postId = req.params.id;

  Post.findOne({ _id: postId })
    .then((post) => {
      if (post.canDelete()) {
        post.deleteOne().then((result) => {
          returnData = {
            ...returnData,
          };
          res.json(returnData);
        });
      } else {
        returnData = {
          ...returnData,
          status: 1,
          error: {
            status: "error",
          },
        };
        res.status(500).json(returnData);
      }
    })
    .catch((err) => {
        console.warn(err)
      res.status(500).json({
        status: 1,
        error: {
          status: "error",
        },
      });
    });
};
