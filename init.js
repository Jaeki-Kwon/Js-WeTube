// application을 호출 하기 위하여 사용

import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
