import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRoute from './routes/product.js'
const app = express();

// app.use((req, res, next) => {
//   console.log(req.method);
//   next();
// });
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoute)
// app.get("/p1", wrapper((_, res, next) => {
//     throw {};
//     res.send("hi").status(234);
// }));

// app.get("/p2", wrapper((_, res, next) => {
//     throw {};
//     res.send("hi").status(234);
// }));

app.use((_, res) => {
  res.status(404).json({ message: "This rout not found" });
});

app.use((error, req, res, next) => {
  const { message = "Server internal error!", status = 500 } = error;
  res.status(status).json(message);
});

export default app;