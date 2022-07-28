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