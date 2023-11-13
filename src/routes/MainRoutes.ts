import path from 'path';
import { Router, Request, Response } from "express";

const MainRouter = Router();

MainRouter.get('/', function(req: Request, res: Response){
    res.sendFile(path.join(__dirname) + '../views/index.html');
});

export default MainRouter;