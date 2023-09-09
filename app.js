import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://admin:wVH1et8nQo1Bl9Gc@cluster0.dcsdx5g.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(() => console.log("success connected to monngodb"))
.catch((err) => console.log(err));