import express, { Request, Response, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from './route/route'


const app = express();
const PORT = 5000;


app.use(cors()); 
app.use(router);
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
