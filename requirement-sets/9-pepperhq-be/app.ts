import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import menuRouter from "./routes/menu";

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

app.use("/menu", menuRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    data: {
      resource: "Not found",
    },
  });
});

export default app;
