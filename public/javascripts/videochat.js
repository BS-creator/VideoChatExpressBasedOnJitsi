const domain = 'resource.bemycall.com';
console.log(document.getElementById("roomName").innerHTML)
let roomName = document.getElementById("roomName").innerHTML;
let call_type = roomName.charAt(roomName.length - 1);

const options = {
  roomName: roomName,
  width: "100%",
  height: "100%",
  interfaceConfigOverwrite: {
    // MOBILE_APP_PROMO: false,
    DEFAULT_REMOTE_DISPLAY_NAME: 'Hello',
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    SHOW_BRAND_WATERMARK: false,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
    DISPLAY_WELCOME_PAGE_CONTENT: false,
    APP_NAME: 'Video Chat',
    NATIVE_APP_NAME: 'Video Chat',
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
    // SETTINGS_SECTIONS: [],
    PROVIDER_NAME: 'BS',
    TOOLBAR_BUTTONS: [
      'microphone',
      'camera',
      'closedcaptions',
      'desktop', //sharescreen
      'hangup',
      'tileview',
      'chat',
      'etherpad',
      'profile',
      // 'recording',
      // 'fullscreen',
      // 'fodeviceselection',
      // 'info',
      // 'livestreaming',
      // 'sharedvideo',
      // 'settings',
      // 'raisehand',
      // 'videoquality',
      // 'filmstrip',
      // 'invite',
      // 'feedback',
      // 'stats',
      // 'shortcuts',
      // 'videobackgroundblur',
      // 'download',
      // 'help',
      // 'mute-everyone',
      // 'e2ee'
    ],
  },
  configOverwrite: {
    enableWelcomePage: false,
    enableClosePage: false,
    disableDeepLinking: true,
    disableSimulcast: false,
    // enableNoisyMicDetection: false,
    // enableNoAudioDetection: false,
    // startWithAudioMuted: true,

  },
  parentNode: document.querySelector('#meet'),
  onload: onload_fn,
};

if (call_type == 'a') {
  options.configOverwrite.startAudioOnly = true;
} else if (call_type == 'm') {
  options.configOverwrite.startWithAudioMuted = true;
  options.configOverwrite.startWithVideoMuted = true;
}

console.log(options.configOverwrite)

const api = new MeetExternalAPI(domain, options);

api.addEventListener("readyToClose", function () {
  console.log('readyToCloseEvent');
  // window.location.href = "/left_meet"
  window.location.href = "/"
});


api.addEventListener("videoConferenceJoined", function (data) {
  console.log('videoconferencejoined', data);
  if (call_type == 'm') {
    api.executeCommand('toggleChat');
  }
})

api.getAvailableDevices().then(devices => {
  console.log(devices)
});

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}

function onload_fn() {
  // if (call_type == 'm') {
  //   wait(2000).then(function () {
  //     api.executeCommand('toggleChat');
  //   })
  // }
}