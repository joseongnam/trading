import axios from "axios";
import express from "express";

const app = express();

app.use(express.json());

app.listen(5173, () => {
  console.log("Server is running on port 5173");
});

async function startServer() {
  app.get("/nasdaq", async () => {
    const reponse = await axios.get(
      "https://query1.finance.yahoo.com/v8/finance/chart/^IXIC"
    );
    console.log(response.data);
  });
}
