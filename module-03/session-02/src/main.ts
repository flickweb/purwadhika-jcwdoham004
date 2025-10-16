import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import router from "./routers";

const PORT = 8080;

const app = express();
// req.body cuman bisa di post, put, patch(?). ga bisa di pake di get method yang past.
// harus ada app.use(express.json()); -- ini namanya middle ware.
app.use(express.json());
app.use(cors());

//   global middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("application level middleware ran");
  console.log(`${req.method} - ${req.url} - ${new Date()}`);
  next(); //wajib ada next supaya bisa lanjut ke function/handler berikutnya
});

// Routing ke resource users dimana akan mengambil semua data user.
// Notice namanya "users" bukan user, itu standarization penamaan. Harus collective baru singleton. (users baru user)
// ini namanya handler, seperti buat function tapi ada request and response parameter, makanya namanya handler
// function cuman bisa ambil request, gabisa ngirim response

//req.body cuman bisa di post, put, patch(?). ga bisa di pake di get method yang past.
//harus ada app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
  console.log("2");
  const { title, type, category } = req.query;
  res.json({
    message: "OK",
    data: "Semua data user",
    // req.query biasa akan digunakan untuk dilter, sort, pagination
    query: req.query,
  });
});

// Routing ke resource users dimana akan mengambil 1 data user saja.
// GET http://localhost:8080/api/users/1
// :id -> req query params
// apapun habis /users/xxx id bakal jadi argumen, nextnya jadi response
app.get("api/users/:id", (req: Request, res: Response) => {
  const { id } = req.params; //kalo di api/users/:id itu namanya "id", const nya harus "id" juga.
  res.json({
    message: "OK",
    data: "Satu data user dengan id" + id,
  });
});


app.post(
  "/api/users",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("route level middleware");
    next();
  },
  (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.json({
      message: "OK",
      data: {
        email,
        password,
      },
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
