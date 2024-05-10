import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors(
  {
    origin: ["https://blockchain-course-api.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  }
));

// Connect to MongoDB Atlas
const mongoURI = process.env.MONGODB_URL; // Use environment variable
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

const client = new MongoClient(mongoURI);

app.get("/", function(req, res) {
  res.json({hello: "hello"})
})

app.get("/modules/:email", async (req, res) => {
  const urlemail = req.params.email; // Get email from URL parameter

  if (!urlemail) {
    return res.status(400).json({ message: "Missing email parameter" });
  }

  try {
    await client.connect();
    const db = client.db("users");
    const col = db.collection("module");
    const document = await col.findOne({ email: urlemail });

    res.json(document);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/insertmodule/:email", async (req, res) => {
  const urlemail = req.params.email; // Get email from URL parameter

  if (!urlemail) {
    return res.status(400).json({ message: "Missing email parameter" });
  }

  try {  
    console.log("working 1")
    console.log("working 2")
    await client.connect();
    const db = client.db("users");
    const col = db.collection("module");
    console.log("working 3")

    // Insert data into MongoDB

    const result = await col.insertOne({
      
    });
    const resul = await col.findOne({email: urlemail})
    res.json(resul);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// t the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
