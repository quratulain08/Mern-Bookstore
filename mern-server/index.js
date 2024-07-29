const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')


//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World')
})



//connection string

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Bookstore-mern:0ekzZ6ZeloED9Y0J@cluster0.phhmzyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   //create a collection of documents
   const bookCollections= client.db("BookInventory").collection("books");

   //Insert a  Book to the database. Post method
   app.post("/upload-book",async(req,res)=>{
    const data =  req.body;
    const result = await bookCollections.insertOne(data);
    res.send(result);
   })


 //get all books
 //app.get("/all-books",async(req, res)=>{
   // const books = bookCollections.find();
    //const result = await books.toArray();
    //res.send(result);

 //})

 //update the books : patch or update method
 app.patch("/book/:id", async(req,res)=>{
    const id = req.params.id;
   // console.log(id);
   const updateBookData =  req.body;
   const filter = {_id: new ObjectId(id)};
   const options = {upsert: true};

   const updateDoc = {
    $set:{
        ...updateBookData
    }
   }
   //update
   const result = await bookCollections.updateOne(filter,updateDoc,options);
   res.send(result);
 })

 //delete method for deleting a book
app.delete("/book/:id",async(req,res)=>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await bookCollections.deleteOne(filter);
    res.send(result);

})

//findbycategory

app.get("/all-books", async (req, res) => {
    try {
      let query = {};
  
      // Check if 'category' query parameter is provided
      if (req.query?.category) {
        query = { category: req.query.category }
      }
  
      // Fetch the books based on the query
      const result = await bookCollections.find(query).toArray();
  
      // Send the result back to the client
      res.send(result);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send({ error: 'Failed to fetch books' });
    }
  });
  

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`Example app port listening on port ${port}`)})