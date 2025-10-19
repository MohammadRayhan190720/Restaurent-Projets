const express = require("express");
const cors = require("cors");
require("dotenv").config({ debug: true });
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASS:", process.env.DB_PASS);

//mondb compass

const uri = "mongodb://localhost:27017/";

// const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ybate.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const menuCollection = client.db("Bristro_Boss").collection("menu");
    const reviewCollection = client.db("Bristro_Boss").collection("reviews");
    const cartCollection = client.db("Bristro_Boss").collection("carts");
    const userCollection = client.db("Bristro_Boss").collection("users");


    //users collection api

    app.get('/users',async(req,res) =>{
      const result = await userCollection.find().toArray();
      res.send(result);
    })

    app.post("/users",async(req,res)=>{
      const user = req.body;
      //insert email if user not exists for google login
      const query = {email: user.email};
      const existingUser = await userCollection.findOne(query);
      if(existingUser){
        return res.send({message: "user already exists"})
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    // set admin role'
    app.patch('/users/admin/:id',async(req,res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updatedDoc = {
        $set:{
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(filter,updatedDoc);
      res.send(result);
    })

    app.delete("/users/:id",async(req,res) =>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })


   //menu related apis

    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      // console.log(result);
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //cart collection api
    app.get("/carts",async(req,res)=>{
      const email = req.query.email;
      const query = {email: email};
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })

    app.post("/carts",async(req,res)=>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result)
    })

    //delete a cart
    app.delete("/carts/:id",async(req,res) =>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log("data base not connected", error.message);
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});


// nameing convention

//get all users => app.get('/users')
//get single user => app.get('/users/:id')
//post user => app.post('/users')
// 👉 যখন তুমি কোনো ডকুমেন্টের পুরো ডেটা রিপ্লেস করতে চাও, তখন PUT ব্যবহার করা হয়। //update user => app.put('/users/:id')
//update user => app.patch('/users/:id')
//delete user => app.delete('/users/:id')
