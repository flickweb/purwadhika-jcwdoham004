//buat route khusus buat user

//data object sementara
const users = [
  {
    id: 1,
    name: "Budi",
    email: "budi@gmail.com",
    password: "budi123",
  },
  {
    id: 2,
    name: "Siti",
    email: "siti@gmail.com",
    password: "siti123",
  },
];

import { Router, Request, Response, NextFunction } from "express";

const userRouter = Router();

userRouter.get("/users", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
        message:"ok",
        data: users,
    });
  } catch (err) {
    next(err);
  }
});

//GET localhost:8080/api/users/:id
userRouter.get("/users/:id",(req: Request, res: Response, next: NextFunction) =>{
    try{
        const {id} = req.params;
        const user = users.filter((user) => user.id === Number(id))[0];
        res.json({
        message:"ok",
        data: users,
    });
    }catch(err){
        next(err);
    }
})

export default userRouter;
