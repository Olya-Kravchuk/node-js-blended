import express from "express";
import morgan from "morgan";
import cors from "cors";
const PORT = 3000;
const app = express();

// app.use((req, res, next) => {
//   console.log(req.method);
//   next();
// });
app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.get("/p1", (_, res, next) => {
  try {
    throw {};
    res.send("hi").status(234);
  } catch (error) {
    next(error);
  }
});

app.get("/p2", (_, res, next) => {
  try {
    throw {};
    res.send("hi").status(234);
  } catch (error) {
    next(error);
  }
});

app.use((_, res) => {
  res.status(404).json({ message: "This rout not found" });
});

app.use((error, req, res, next) => {
  const { message = "Server internall error 344!", status = 500 } = error;
  res.status(status).json(message);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server crushed. error: ", error);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
