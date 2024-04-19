import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./route/route";
const PORT: number = 2200;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello MySQL",
  });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
