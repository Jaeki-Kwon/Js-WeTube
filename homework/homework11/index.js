const recorderContainer = document.querySelector(".recordContainer");
const recordBtn = document.querySelector(".recordBtn");
const recordTime = document.querySelector(".recordTime");

let voiceRecorder;

// const startRecording = (stream) => {
//   //   console.log(streamObject);
//   const voiceRecorder = new MediaRecorder(stream);
//   console.log(voiceRecorder);
//   //   voiceRecorder.start();
//   // recordBtn.addEventListener("click", stopRecording);
// };

const stopRecording = () => {
  voiceRecorder.stop();
  recordBtn.removeAttribute("click", stopRecording);
  recordBtn.addEventListener("click", getRecord);
  recordBtn.innerHTML = "Start Recording";
};

const getRecord = () => {
  recordBtn.innerHTML = "Stop Recording";
  recordTime.innerHTML = `Recording for : asdf `;
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      voiceRecorder = new MediaRecorder(stream);
      voiceRecorder.start();
      recordBtn.addEventListener("click", stopRecording);
    })
    .catch((err) => {
      console.log(err);
      console.log("에러에러");
    });
};

function init() {
  recordBtn.addEventListener("click", getRecord);
}

if (recorderContainer) {
  init();
}
