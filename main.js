Webcam.set({
  width:350,
  height:320,
  image_format:'png',
  png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='captured_img'/>"
  })
}
console.log("ml5 version = " , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/T9cJxy_Zc/model.json" , modalLoaded);
function modalLoaded(){
  console.log("modalLoaded")
}
function check(){
  img  = document.getElementById("captured_img");
  classifier.classify(img , gotResult)
}
function gotResult(error , result){
  if(error){
    console.log(error)
  }
  else {
    console.log(result)
     if(result[0].label == "amazing"){
      document.getElementById("result_label").innerHTML = "&#128076;";
      say = "This is amazing sign and it's meaning is this is looking amazing";
     }
     if(result[0].label == "victory" ){
      document.getElementById("result_label").innerHTML = "&#9996;";
      say = "This is victory  sign and it's meaning is that was a marvelous victory";
     }
     if(result[0].label == "best"){
      document.getElementById("result_label").innerHTML = "&#128077;";
      say = "This is best sign and it's meaning is all the best";
     }
     speak();
  }
}
function speak(){
  var synth = window.speechSynthesis;
  utter_this = new SpeechSynthesisUtterance(say);
  synth.speak(utter_this)
}
