
import Post from "./post"


beforeEach(() => {
})

describe("Post Converting", () => {
    test("it parses from server correctly", () => {
        let serverObject = {
            "networks": ["linkedin"],
            "status": "scheduled",
            "_id": "5f5d48b6cc88fe4b8cc79754",
            "when": null,
            "posted": false,
            "message": "Test Message Body",
            "__v": 0
        }
    
        const p = new Post()
        p.fromServerJSON(serverObject)
        expect(p.networks).toEqual(serverObject.networks)
        expect(p.status).toEqual(serverObject.status)
        expect(p.id).toEqual(serverObject._id)
        expect(p.when).toEqual(serverObject.when)
        expect(p.message).toEqual(serverObject.message)

        expect(p).toBeInstanceOf(Post)
    })

    test("it creates a server object for the api", () => {
        let expectedServerObject = {
            "networks": ["linkedin"],
            "_id": "5f5d48b6cc88fe4b8cc79754",
            "message": "Test Message Body",
            "status": "cancelled",
            "when": null
        }
    
        const p = new Post()
        p.message = "Test Message Body";
        p.when = null;
        p.networks = ["linkedin"];
        p.id = "5f5d48b6cc88fe4b8cc79754";
        p.status = "cancelled"

        let createdJSONData = p.toServerJSON()

        expect(createdJSONData.networks).toEqual(expectedServerObject.networks)
        expect(createdJSONData._id).toEqual(expectedServerObject._id)
        expect(createdJSONData.when).toEqual(expectedServerObject.when)
        expect(createdJSONData.message).toEqual(expectedServerObject.message)
        expect(createdJSONData.status).toEqual(expectedServerObject.status)


        expect(createdJSONData).toHaveProperty('_id')
        expect(createdJSONData).toHaveProperty('message')
        expect(createdJSONData).toHaveProperty('when')
        expect(createdJSONData).toHaveProperty('networks')
        expect(createdJSONData).toHaveProperty('status')

    })
   
});