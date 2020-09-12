var Queue = require('bull');

var postQueue = new Queue('schedule posts', 'redis://127.0.0.1:6379');


let messages = [
    {title: "This is a random title", post: "This is my body content!"}
]


postQueue.process((done) => {

    console.log(messages[0])
    job.progress(1)

    done()
})


postQueue.add({repeat: {cron: '* * * * *'}})