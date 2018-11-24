// BASIC required IMPORTS for NodeJS
const express = require("express");
// const bodyParser = require("body-parser"); // No longer need this -- bodyParser is included in express
const cors = require("cors");
const multer = require("multer");
// from multer docs
const upload = multer({ dest: "uploads/" });

// Creates an INSTANCE OF EXPRESS server and assigns to `server` variable
// const server = (module.exports = express()); // What is this?
const server = express();

// MIDDLEWARE that server will "use" 
// This: server.use(bodyParser.json()); // -- is replaced with:
server.use(express.json());
server.use(cors());

// Detect index.html -- BOOT-LEG WAY (only works for single files!)
// server.get("/", (req, res) => {res.sendFile(__dirname + "/index.html");
// });
// Better way than doing above, create a public folder, move index.html, then:
server.use(express.static(__dirname + "/public"));
// Check to see its working here: http://127.0.0.1:5000/ -- can use this OR
// http://localhost:5000/

// ROUTES
server.get('/', (req, res)=>{
  res.json({api: "file_meta_micro server up and running"})
})

server.post("/upload", upload.single("file"), (req, res, next) => {
  return res.json(req.file);
});

server.listen(5000, () => {
  console.log("file_meta_micro server up and running");
});
