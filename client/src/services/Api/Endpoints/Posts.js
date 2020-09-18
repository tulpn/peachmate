import ApiBase from "../ApiBase"

class PostStore extends ApiBase {
    module = "posts"

    fetchAll = () => {
        const url = `${this.module}/`
        return this.get(url)
    }
}


export default PostStore