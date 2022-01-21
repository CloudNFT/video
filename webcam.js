/* get user's permission to muck around with video devices */
const tempStream = await navigator.mediaDevices.getUserMedia({video:true});
const devices = navigator.mediaDevices.enumerateDevices();
let frontDeviceId;
let backDeviceId;

if (devices.length > 0) {
  /* defaults so all this will work on a desktop */
  frontDeviceId = devices[0].deviceId;
  backDeviceId = devices[0].deviceId;
}

/* look for front and back devices */
devices.forEach (device => {
  if( device.kind === 'videoinput' ) {
    if( device.label && device.label.length > 0 ) {
      if( device.label.toLowerCase().indexOf( 'back' ) >= 0 ) 
        backDeviceId = device.deviceId
      else if( device.label.toLowerCase().indexOf( 'front' ) >= 0 )
        frontDeviceId = device.deviceId
    }
  }
});

/* close the temp stream */
const tracks = tempStream.getTracks()
if( tracks ) 
  for( let t = 0; t < tracks.length; t++ ) tracks[t].stop()
/* open the device you want */
const constraints = {
  video: true,
  deviceId: {exact: backDeviceId }
}


function start(){
  const player = document.getElementById('myVideo');
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
     player.srcObject = stream;
    });
  
}

async function cap(){
  const player = document.getElementById('player');

  const constraints = {
    video: true,
  };

 

  // Attach the video stream to the video element and autoplay.
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
}

cap()
