process.env.NODE_ENV = 'test';

const app = require("../../app")

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const faker = require("faker")


let Post = require("../../models/post")


chai.use(chaiHttp);


describe('Posts', () => {
    beforeEach((done) => { //Before each test we empty the database
        Post.deleteMany({}, (err) => { 
           done();           
        });        
    });

    describe('GET /', function() {
        it('Receives an empty array of posts', function(done) {
            chai.request(app)
            .get('/')
            .end((err, res) => {
                    res.should.have.status(200)
                    res.should.have.header("content-type", 'application/json; charset=utf-8')

                    res.body.should.be.a("object")
                    res.body.should.have.property('status').eql(0);

                    res.body.should.have.property("items")
                    res.body.items.should.be.a("array")

                done()
            })
        });
    });

    describe('GET /:2', function() {

        it('should show the 26th item', function(done) {
            // create 26 fakers
        let posts = []
        
        for (let i=0; i<=25; i++){
            let nP = Post()
            nP.title = ""
            nP.when = null
            nP.network = "linkedin"
            nP.status = "scheduled"
            nP.message = faker.fake("{{lorem.sentence}}")
            nP.save()
            posts.push(nP)
        }


            chai.request(app)
            .get('/2')
            .end((err, res) => {
                    res.should.have.status(200)
                    res.should.have.header("content-type", 'application/json; charset=utf-8')

                    res.body.should.be.a("object")
                    res.body.should.have.property('status').eql(0);

                    res.body.should.have.property("items")
                    res.body.items.should.be.a("array")

                    res.body.items.should.have.lengthOf(1)

                    res.body.items[0].should.be.a("object")
                    res.body.items[0].title.should.be.a("String")
                    res.body.items[0].title.should.equal(posts[25].title)
                    

                done()
            })
        });
    });

    describe('GET /post/:id', function() {
        it('should receive a single post', function(done) {

            // Create a new Item 
            let nP = Post()
            nP.title = ""
            nP.when = null
            nP.network = "linkedin"
            nP.status = "scheduled"
            nP.message = faker.fake("{{lorem.sentence}}")
            nP.save()


            chai.request(app)
            .get(`/post/${nP._id}`)
            .end((err, res) => {
                    res.should.have.status(200)

                    res.should.have.header("content-type", 'application/json; charset=utf-8')

                    res.body.should.be.a("object")
                    res.body.should.have.property('status').eql(0);

                    
                    res.body.should.have.property("items")
                    res.body.items.should.be.a("array")

                    res.body.items.should.have.lengthOf(1)

                    res.body.items[0].should.be.a("object")

                    res.body.items[0].title.should.be.a("String")
                    res.body.items[0].title.should.equal( nP.title)
                    
                    res.body.items[0].network.should.be.a("String")
                    res.body.items[0].network.should.equal( nP.network)
                    
                    res.body.items[0].message.should.be.a("String")
                    res.body.items[0].message.should.equal( nP.message)
                done()
            })
        });
    });

    describe('POST /post', function() {
        it('should insert a post and return the item', function(done) {
            const testTitle = "Test Message Body"

            chai.request(app)
            .post('/post')
            .send({"title": testTitle})
            .end((err, res) => {
                    res.should.have.status(200)
                    
                    res.should.have.header("content-type", 'application/json; charset=utf-8')

                    res.body.should.be.a("object")
                    res.body.should.have.property('status').eql(0);

                    
                    res.body.should.have.property("items")
                    res.body.items.should.be.a("array")

                    res.body.items.should.have.lengthOf(1)

                    res.body.items[0].should.be.a("object")
                    res.body.items[0].title.should.be.a("String")
                    res.body.items[0].title.should.equal(testTitle)
                done()
            })
        });
    });

    describe('PUT /post/:id', function() {
        it('should update an existing post', function(done) {
            const testTitle = "Test Message Title"
            const testBodyMessage = "Test Message Body"

            // Create a new Item 
            let nP = Post()
            nP.title = testTitle
            nP.when = null
            nP.network = "linkedin"
            nP.status = "scheduled"
            nP.message = faker.fake("{{lorem.sentence}}")
            nP.save()

            chai.request(app)
            .put(`/post/${nP._id}`)
            .send({"message": testBodyMessage})
            .end((err, res) => {
                res.should.have.status(200)
            
                res.should.have.header("content-type", 'application/json; charset=utf-8')

                res.body.should.be.a("object")
                res.body.should.have.property('status').eql(0);

                
                res.body.should.have.property("items")
                res.body.items.should.be.a("array")

                res.body.items.should.have.lengthOf(1)

                res.body.items[0].should.be.a("object")

                res.body.items[0]._id.should.be.a("String")
                res.body.items[0]._id.should.equal(nP._id.toString())

                res.body.items[0].message.should.be.a("String")
                res.body.items[0].message.should.equal(testBodyMessage)
                done()
            })

           
        });
    });
});