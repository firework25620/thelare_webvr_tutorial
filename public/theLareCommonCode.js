var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://raw.githubusercontent.com/lare-student/thelare_webvr_tutorial/master/public/assets/underwater-vr.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);

var roomDrawing = vRViewPlayer('#second-vr-example', {
  image: 'http://25dkd82t2owl3yew6h49ewsh.wpengine.netdna-cdn.com/wp-content/uploads/2014/08/JIC-photo-623x200.jpg',
  is_stereo: false,
});


window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  image: 'https://raw.githubusercontent.com/lare-student/thelare_webvr_tutorial/master/public/assets/example-rectangular-room.png',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
