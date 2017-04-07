





function reOrder (){
	
window.photos[0] = window.photos[numPhotos];
captions[0] = captions[numPhotos];

//now iterate backwards through array from numPhotos to 1 and replace with previous

   for (var i=window.numPhotos;i>0;i--){
   
   
   window.photos[i]  = window.photos[i-1];
   captions[i] = captions[i-1];
   
   }
   
   console.log ("array reordered");
   
//Array now reordered so top and bottom are switched

//now reorder Zs

 for (var j=1; j<window.numPhotos+1;j++){
  
  
  //now set z position of photos in array by starting at 10
 
  if ( window.photos[j] != null ){
window.photos[j].parentNode.style.zIndex = 9+j;
  }
}




}


function swipeDone(){
console.log ("swipe done");
//reset caption text
document.getElementById("caption").innerHTML = captions[numPhotos];
window.swiping = false;

}