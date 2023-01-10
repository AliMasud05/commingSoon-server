const express = require('express');
const cors = require('cors');
const port =process.env.PORT || 5000 ;

const app =express();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://counting:Hhs33G4kelXbbEpU@cluster0.memgfjc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function running(){
    try{
        const emailCollection = client.db('commingSoon').collection('users');
        app.post("/users", async (req, res) => {
            const user = req.body;
            const result = await emailCollection.insertOne(user);
            res.send(result);
        });
    }
    finally{

    }
}
running().catch(console.log())
app.get('/', async(req, res)=>{
    res.send(' server is running');
})

app.listen(port, ()=>console.log(`comingSoon server running on ${port}`))