exports.get404 = (req, res, next) => {
    const err = {
        error: "Not found"
    }
    res.status(404).end(JSON.stringify(err))
}