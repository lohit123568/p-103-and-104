Webcam.set({
    width:900,
    height:650,
    image_format : 'png',
    png_quality:100       
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );0

function take_snapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier =ml5.imageClassifier('',modelLoaded);