const Post = require("../../models/post")


exports.getList = (req, res, next) => {
    const perPage = 25
    const pageNo = Math.max(1, (req.params.page || 0 ))

    let returnData = {
        status: 0
    }

    // we want page 1 to be the same as 0, so we only start skipping at page 2 (the first 25)
    let skippedItems = 0
    if (pageNo != 1){
        skippedItems = perPage * (pageNo - 1)
    } 

    Post.find().limit(perPage).skip(skippedItems).then(posts => {
        returnData = {
            ...returnData,
            items: posts
        }
        res.json(returnData)
    }).catch(err => {
        returnData = {
            ...returnData,
            status: 1,
            error: err
        }
        
        res.status(500).json(returnData)
    })
}

exports.getPost = (req, res, next) => {
    let returnData = {
        status: 0
    }

    Post.findById(req.params.id).then(post => {
        returnData = {
            ...returnData,
            items: [post]
        }
        res.json(returnData)
    }).catch(console.warn)

        
}

exports.postPost = (req, res, next) => {
    let returnData = {
        status: 0
    }

    let newPost = Post()
    newPost.title = req.body.title || ""
    newPost.message = req.body.message || ""
    newPost.when = req.body.when || null
    newPost.network = req.body.network || "linkedin"
    newPost.posted = false
    newPost.save()

    returnData = {
        ...returnData,
        items: [newPost]
    }

        res.json(returnData)
}

exports.putPost = (req, res, next) => {
    let returnData = {
        status: 0
    }

    const postId = req.params.id 

    Post.findOneAndUpdate({_id:postId}, {$set: req.body}, { upsert: true, new: true }).then(post => {
       
        returnData = {
            ...returnData,
            items: [
                post
            ]
        }
        res.json(returnData)
    }).catch(err => {
        console.warn(err)
    })

        
}