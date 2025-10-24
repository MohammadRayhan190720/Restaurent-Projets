const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
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


    //jwt related api
    app.post('/jwt',(req,res) =>{
      const user = req.body;
      const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1h'
      });
      res.send({token});
    })

    //middlewares
    const verifyToken = (req,res,next) =>{
      // console.log(req.headers.authorization)
      if(!req.headers.authorization){
        return res.status(401).send({error: true, message: 'unauthorized access'});
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded) =>{
        if(err){
          return res.status(401).send({error: true, message: 'unauthorized access'});
        }
        req.decoded = decoded;
        next();
      })

    }

    const verifyAdmin = async (req,res,next) =>{
      const email = req.decoded.email;
      const query = {email: email};
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === 'admin';
      if(!isAdmin){
        return res.status(403).send({message: 'forbidden access'});
      }
      next();
    }

    //users collection api



    app.get('/users', verifyToken,verifyAdmin, async(req,res) =>{
      const result = await userCollection.find().toArray();
      res.send(result);
    })

    //check admin
    app.get('/users/admin/:email',verifyToken, async(req,res) =>{
      const email = req.params.email;
      if(email !== req.decoded.email){
        return res.status(403).send({message: 'forbidden access'});
      }
      const query = {email: email};
      const user = await userCollection.findOne(query);
      const result = {admin: user?.role === 'admin'};
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
    app.patch('/users/admin/:id',verifyToken, verifyAdmin, async(req,res) =>{
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

    app.delete("/users/:id",verifyToken, verifyAdmin, async(req,res) =>{
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
    app.get("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: (id) };
      const result = await menuCollection.findOne(query);
      res.send(result);
    });

    app.post('/menu',verifyToken,verifyAdmin, async (req,res)=>{
        const menuItem = req.body;
        const result = await menuCollection.insertOne(menuItem);
        res.send(result)
    })

        app.patch("/menu/:id", async (req, res) => {
          const item = req.body;
          const id = req.params.id;
          const query = { _id: (id) };
          // const options = { upsert: true };
          const updatedItem = {
            $set: {
              name: item.name,
              category: item.category,
              price: item.price,
              recipe: item.recipe,
              image: item.image,
            },
          };
          const result = await menuCollection.updateOne(query, updatedItem);
          res.send(result);
        });

           app.delete("/menu/:id", async (req, res) => {
             const id = req.params.id;
             console.log(id);
             const query = { _id: (id) };
             const result = await menuCollection.deleteOne(query);
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
