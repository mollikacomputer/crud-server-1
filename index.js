const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;
const {MongoClient, ServerApiVersion, ClientSession} = require('mongodb');

app.use(cors());
app.use(express());

const uri = "mongodb+srv://mollikacomputer3:xuuHWRYiahfvbPnx@cluster0.q5xegkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db('News-test').collection("user")

    // app.get('/users', async(req, res)=>{
    //     const query = {};
    //     const cursor = userCollection.find(query);
    //     const user = await cursor.toArray();
    //     res.send(user);
    // });

    // app.get('/users', async(req, res)=>{
    //     const query = {};
    //     const cursor = userCollection.find(query);
    //     const users = await cursor.toArray();
    //     res.send(users)
    // });

    app.get('/users', async(req, res)=>{
        const query = {};
        const cursor = userCollection.find(query);
        const users = await cursor.toArray();
        res.send(users);
    });
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    console.log("working is good");
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send("Simple crud app server is running")
})

app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
})


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const ObjectId = require('mongodb').ObjectId;
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send('Crud Server 1 server app running')
// });

// app.listen(port, ()=>{
//     console.log(`Server is running on PORT: ${port}`);
// })