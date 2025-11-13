import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import dostkChartRouter from "./src/api/dostk/routes.js";
import oauthRouter from "./src/api/oauth/routes.js";
import stockRouter from "./src/api/stock/routes.js";
dotenv.config();

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "mySecretKey", // 랜덤 문자열
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // HTTPS면 true로
      maxAge: 1000 * 60 * 60, // 1시간
    },
  })
);

app.use(express.json());

app.use("/api/oauth", oauthRouter);
app.use("/api/stock", stockRouter);
app.use("/api/dostk", dostkChartRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
