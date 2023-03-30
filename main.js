Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    Camera=document.getElementById("Camera");
    Webcam.attach("#Camera");
    
    function takesnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captured_image'>"
        });
    }
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bNYiFADp9/model.json",modelloaded);
    function modelloaded(){
        console.log("Model is loaded");
    }
    function check(){
        img= document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
        
    }
    
    }