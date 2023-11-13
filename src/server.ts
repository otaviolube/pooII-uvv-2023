import express from 'express';
import MainRouter from './routes/MainRoutes';
import UserRouter from './routes/UserRoutes';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UserRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})