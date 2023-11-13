import UserController from "../controllers/UserController";
import { Router } from "express";

const UserRouter = Router();

UserRouter.get('/users', UserController.listUsers)

UserRouter.post('/user', UserController.createUser);

UserRouter.put('/user', UserController.updateUser);

UserRouter.delete('/user', UserController.deleteUser);

export default UserRouter;