var Blob;
  window.onload = function() {
    var wholeAudioDuration=document.getElementById('originalAudioSrc').duration;
  document.getElementById("startLabelStart").innerText="0:00";
  document.getElementById("startLabelEnd").innerText=`${Math.floor(wholeAudioDuration/60)}:${Math.floor(wholeAudioDuration%60)-1}`;
  document.getElementById("endLabelStart").innerText="0:01";
  document.getElementById("endLabelEnd").innerText=`${Math.floor(wholeAudioDuration/60)}:${Math.floor(wholeAudioDuration%60)}`;
  document.getElementById("startInputElement").setAttribute("min",0);
  document.getElementById("startInputElement").setAttribute("max",Math.floor(wholeAudioDuration-1));
  document.getElementById("endInputElement").setAttribute("min",1);
  document.getElementById("endInputElement").setAttribute("max",Math.floor(wholeAudioDuration));
  document.getElementById("currentStartTime").innerHTML="0:00";
  document.getElementById("currentEndTime").innerHTML="0:01"

  };

  $("#startInputElement").on("input change", function() {
  document.getElementById("currentStartTime").innerText= `${Math.floor(document.getElementById("startInputElement").value/60)}:${Math.floor(document.getElementById("startInputElement").value%60)}`});
  $("#endInputElement").on("input change", function() {
    document.getElementById("currentEndTime").innerText= `${Math.floor(document.getElementById("endInputElement").value/60)}:${Math.floor(document.getElementById("endInputElement").value%60)}`});




  fetch("music/BlindingLights.mp3").then(function(response) {
      if(response.ok) {
        console.log("fetch");
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    }).then(function(blob) {
        Blob = blob;
       
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error);
    });






    document.getElementById('submit').addEventListener('click',function(e){
        var startValue=document.getElementById("startInputElement").value;
        var endValue=document.getElementById("endInputElement").value;
        startValue=parseInt(startValue);
        endValue=parseInt(endValue);
        console.log(startValue,endValue);
        if(startValue>endValue){
          window.alert("Start value must be less than end value");
        }
        else{
        var wholeDuration=document.querySelector('audio').duration;
        wholeDuration=Math.floor(wholeDuration);
        var finalAudio = Blob.slice((startValue/wholeDuration)*(Blob.size),(endValue/wholeDuration)*Blob.size,Blob.type);
        window.audio = new Audio();
        window.audio.src = window.URL.createObjectURL(finalAudio );
        window.audio.controls = true;
        document.body.append(document.createElement('br'));
        document.body.append(document.createElement('br'));
        document.body.append(document.createElement('label').value="new audio");
        document.body.append(document.createElement('br'));
        document.body.append(document.createElement('br'));
        document.body.append(window.audio);
        }
        
        
})
   



 
// document.getElementById('submit').addEventListener('click',function(e){
  


//   console.log(Blob.size);
    
//     var start=document.getElementById('startTime').value;
//     if(start===''){
//       window.alert("enter starting value");
//     }
//     var startArray=start.split(":");
//     var end=document.getElementById('endTime').value;
//     if(end===''){
//       window.alert("enter ending value");
//     }
//     var endArray=end.split(":");
//     if(start && end){
//     var startTimeCalculation=parseInt((startArray[0]*60))+parseInt((startArray[1]?startArray[1]:0));
//     var endTimeCalculation=parseInt((endArray[0]*60))+parseInt((endArray[1]?endArray[1]:0));
//     if(startArray[1]>60 && startArray[1]<0){
//       window.alert("start seconds must be inbetween 0 to 60");
//     }
//     else if(endArray[1]>60 && endArray[1]<0){
//       window.alert("end seconds must be inbetween 0 to 60");
//     }
//     else{
//     var wholeDuration=document.querySelector('audio').duration;
//     wholeDuration=Math.floor(wholeDuration);
//     console.log(startTimeCalculation,endTimeCalculation,wholeDuration);
//     if(startTimeCalculation<0 && startTimeCalculation>=wholeDuration){
//       window.alert("enter start time correctly");
//     }
//     else if(endTimeCalculation>wholeDuration){
//       window.alert("enter end time correctly");
//     }
//     else if(endTimeCalculation-startTimeCalculation<0){
//       window.alert("start time must be less than end time");
//     }
//     else if(startTimeCalculation===endTimeCalculation){
//       window.alert("both time must not be same");
//     }

//     else {
//     var finalAudio = Blob.slice((startTimeCalculation/wholeDuration)*(Blob.size),(endTimeCalculation/wholeDuration)*Blob.size,Blob.type);
//     window.audio = new Audio();
//     window.audio.src = window.URL.createObjectURL(finalAudio );
//     window.audio.controls = true;
//     document.body.append(document.createElement('br'));
//     document.body.append(document.createElement('br'));
//     document.body.append(document.createElement('label').value="new audio");
//     document.body.append(document.createElement('br'));
//     document.body.append(document.createElement('br'));
//     document.body.append(window.audio);
    
//     }
//   }
//   }
    
//})




document.getElementById('Download').addEventListener("click",function(){
  if($(":last")[0].currentSrc){
    const a=Object.assign(document.createElement('a'),{href:$(":last")[0].currentSrc,download:"newAudio.mp3"});
    document.body.appendChild(a);
    a.click();
    a.remove();
   
  }
 
})















	
		
		
	














// window.onload = function (){
//     'use strict';
  
//      var xhr = new XMLHttpRequest();
//       xhr.open("GET",'music', true);
//       xhr.responseType = "arraybuffer";
  
//       xhr.onload = function (e) {
//           var blob    = new Blob([xhr.response], {type: "audio/mp3"});
//           var newBlob = new Blob([blob.slice(0,1010)],    {type:"audio/mp3"});
  
//           var reader = new FileReader();
//               reader.onload = function(){
  
//               var dataURL = reader.result;
//               var output = document.getElementById('audio');
//               output.src = dataURL;
//               output.autoplay = true;
//          };
  
//           reader.readAsDataURL(newBlob);
  
//       }
  
//       xhr.send(null);
//   }































// var source = audioCtx.createBufferSource();
// var dest = audioCtx.createMediaStreamDestination();
// var mediaRecorder = new MediaRecorder(dest.stream);

// var request = new XMLHttpRequest();
// request.open('GET', 'music/mixkit-stadium-crowd-light-applause-362.wav', true);
// request.responseType = 'arraybuffer';

// request.onload = function() {
//   var audioData = request.response;
//   audioCtx.decodeAudioData(
//     audioData,
//     function(buffer) {
//       source.buffer = buffer;
//       source.connect(dest);
//       mediaRecorder.start();
//       source.start(audioCtx.currentTime, 3);
//       // etc...
//       document.body.appendChild(dest);
//     },
//     function(e){ 
//       console.log("Error with decoding audio data" + e.err);
//     }
//   );

// }



// request.send();

// function sliceFile(file, chunksAmount) {
//     var byteIndex = 0;
//     var chunks = [];
      
//     for (var i = 0; i < chunksAmount; i += 1) {
//       var byteEnd = Math.ceil((file.size / chunksAmount) * (i + 1));
//       chunks.push(file.slice(byteIndex, byteEnd));
//       byteIndex += (byteEnd - byteIndex);
//     }
  
//     return chunks;
//   }