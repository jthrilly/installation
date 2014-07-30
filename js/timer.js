/* exported Experience, timedStages */
/* global experience, video, snapshot,localMediaStream:true,hdConstraints,ctx, canvas */
/* jshint devel:true,unused:false */


var seconds = experience.getSlideTime();
var current = experience.getCurrentStage();
console.log("Current stage: "+current);
console.log('Number of seconds for this slide: '+seconds);
var slideTimer = setInterval(function () {
  experience.nextStage();
}, seconds);
