// application을 호출 하기 위하여 사용

import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);