var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  image: 'https://fscl01.fonpit.de/userfiles/4155894/image/photo-sphere-w628.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);


var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  drawingRoom.addHotspot('spot1', {
    pitch: 0,
    yaw: 90,
    radius: 0.50,
    distance: 6
  });

  drawingRoom.addHotspot('spot2', {
    pitch: 0,
    yaw: 180,
    radius: 0.50,
    distance: 9
  });

  drawingRoom.addHotspot('spot3', {
    pitch: 0,
    yaw: 270,
    radius: 0.50,
    distance: 6
  });
  
  drawingRoom.addHotspot('spot4', {
    pitch: 0,
    yaw: 360,
    radius: 0.50,
    distance: 9
  });
};

var setOnClickEvents = function(event) {
  if (event.id == 'spot1') {
    alert("Spot1")
  }

  if (event.id == 'spot2') {
    alert('Spot2');
  }

  if (event.id == 'spot3') {
    alert('Spot3');
  }
  
   if (event.id == 'spot4') {
    alert('Spot4 ');
  }
  
};

// when the page is ready, do these events
drawingRoom.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
drawingRoom.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
drawingRoom.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});
