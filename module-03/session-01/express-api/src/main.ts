import express, {Request, Response} from "express";
import cors from "cors";
//memberi akses buat siapa aja yang boleh hit server kita.

const PORT = 8080;

const app = express();
//memberi akses buat siapa aja yang boleh hit server kita.
app.use(cors());

//GET http://localhost:8080/api
app.get("/api",(req: Request, res:Response) =>{
    res.json({message: "Hello from express API, this is express!!"});
});

//GET http://localhost:8080/api/data
app.get("/api/data",(req: Request, res:Response) =>{
    res.json({data: [1,2,3,4,5,6]});
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});