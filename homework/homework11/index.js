import "./styles.css";

const button = document.querySelector("button"),
  body = document.querySelector("body"),
  counter = document.querySelector(".counter");
let isRecording = false;
let stream = null;
let mediaRecorder = null;
let chunks = [];
let count = 0;
let countInterval = null;

navigator.mediaDevices
  .getUserMedia({
    audio: true,
  })
  .then((streamObj) => (stream = streamObj))
  .catch((err) => console.log(err));

const startCounting = () => {
  counter.innerHTML = `Recording for ${count}`;
  count++;
};

const handleStreamData = (e) => {
  const { data } = e;
  chunks.push(data);
};

const handleStreamStop = () => {
  const audio = new Blob(chunks, { type: "audio/webm;codecs=opus" });
  const url = URL.createObjectURL(audio);
  const link = document.createElement("a");
  button.innerHTML = "Start Recording";
  clearInterval(countInterval);
  count = 0;
  counter.innerHTML = "";
  body.appendChild(link);
  link.href = url;
  link.download = "Audio";
  link.click();
};

const startRecording = () => {
  if (stream) {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    mediaRecorder.addEventListener("dataavailable", handleStreamData);
    mediaRecorder.addEventListener("stop", handleStreamStop);
    startCounting();
    countInterval = setInterval(startCounting, 1000);
  }
};

const toggleState = () => {
  if (isRecording) {
    button.innerHTML = "Start Recording";
    mediaRecorder.stop();
  } else {
    button.innerHTML = "Stop Recording";
    startRecording();
  }
  isRecording = !isRecording;
};

button.addEventListener("click", toggleState);

/* 
내 정답

const recordBtn = document.querySelector(".recordBtn");

var clicked = false;
var chunks = [];
var cnt = 0;

function timer() {
  cnt += 1;
  document.getElementById("timer").innerText = `Recording for: ${cnt}`;
}

var timerId = null;
function startClock() {
  timer();
  timerId = setInterval(timer, 1000);
}

function stopClock() {
  if (timerId != null) {
    document.getElementById("timer").innerText = "";
    clearInterval(timerId);
  }
}

const handleVideoData = (event) => {
  const { data: voiceFile } = event;
  // console.log("voiceFile > ", voiceFile);
  event.voiceFile = new Blob(chunks, { type: "audio/webm;codecs=opus" });
  console.log(event.voiceFile);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(voiceFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const handleSuccess = (stream) => {
  const mediaRecorder = new MediaRecorder(stream);
  recordBtn.addEventListener("click", function (element) {
    if (!clicked) {
      mediaRecorder.start();
      startClock();
      recordBtn.innerHTML = "Stop recording";
      clicked = true;
    } else {
      mediaRecorder.stop();
      stopClock();
      mediaRecorder.addEventListener("dataavailable", handleVideoData);
      recordBtn.innerHTML = "Start recording";
      element.target.disabled = true;
    }
  });
};

const error = (error) => {
  console.log(error);
};

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(handleSuccess)
  .catch(error);

*/
