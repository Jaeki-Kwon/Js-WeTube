// application을 호출 하기 위하여 사용

import app from "./app";

const PORT = 4000;

const handleListening = () => 
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);