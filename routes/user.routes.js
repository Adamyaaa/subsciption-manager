import { Router } from 'express';

const userRouter = Router();

userRouter.get('/',(req,res)=>res.send({title:'get all the users'}));

userRouter.get('/:id',(req,res)=>res.send({title:'get user detail'}));

userRouter.post('/',(req,res)=>res.send({title:'create new user'}));

userRouter.put('/:id',(req,res)=>res.send({title:'update user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'delete a user'}));


export default userRouter;