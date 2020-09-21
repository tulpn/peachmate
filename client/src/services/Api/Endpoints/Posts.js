import ApiBase from "../ApiBase"

class PostStore extends ApiBase {
    module = "posts"

    fetchAll = () => {
        const url = `${this.module}/`
        return this.get(url)
    }

    /**
     * Either send POST to create new post
     * or send PUT to update existing post (by id)
     * @param {object} postData 
     */
    save = (postData) => {
        if ( postData === undefined || postData === null ){
            throw new Error("No data to send")
        }
        let url = `${this.module}/post`
        let res = null
        if (postData._id !== null && postData._id !== undefined){
            url += `/${postData._id}`
            res = this.put(url, postData)
        } else {
            res = this.post(url, postData)
        }
        return res
    }
    
    /**
     * Deletes post by updating status to deleted
     * @param {object} postData 
     */
    delete = (postData) => {
        if ( postData === undefined || postData === null ){
            throw new Error("No data to send")
        }

        let url = `${this.module}/post/${postData.id}`
        return this.delete(url, postData)
    }
}


export default PostStore