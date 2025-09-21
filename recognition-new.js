var listenBtn = document.getElementById("listenBtn");
var output = document.getElementById("output");

var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRec();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = false;

function handleResult(event) {
  var transcript = event.results[0][0].transcript.trim().toLowerCase();

  if (transcript.indexOf("hello") !== -1) {
    output.textContent += " hello";
  }

  if (transcript.indexOf("net") !== -1) {
    output.textContent += " ynet";
    window.open("https://ynet.co.il", "_blank");
  }
}

// פונקציה רגילה להפעלה מחדש
function restartRecognition() {
  recognition.start();
}

recognition.onresult = handleResult;
recognition.onend = restartRecognition;

function startListening() {
  recognition.start();
}

listenBtn.onclick = startListening;
