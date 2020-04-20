const domain = 'videochat-jts-aws.s-t-r-i-v-e.com';
console.log(document.getElementById("roomName").innerHTML)
let roomName = document.getElementById("roomName").innerHTML;
const options = {
  roomName: roomName,
  width: "100%",
  height: "100%",
  interfaceConfigOverwrite: {
    // MOBILE_APP_PROMO: false,
    DEFAULT_REMOTE_DISPLAY_NAME: 'New One',
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
      'profile',
      'chat',
      'etherpad',
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
      // 'tileview',
      // 'videobackgroundblur',
      // 'download',
      // 'help',
      // 'mute-everyone',
      // 'e2ee'
    ],
  },
  configOverwrite: {
    enableWelcomePage: false,
    enableClosePage: true,
    disableDeepLinking: true,
    disableSimulcast: false,
    enableNoisyMicDetection: false,
    enableNoAudioDetection: false,
    startWithAudioMuted: true,

  },
  parentNode: document.querySelector('#meet'),
  onload: onloadVideoChat,
};

const api = new JitsiMeetExternalAPI(domain, options);

function onloadVideoChat(e) {
  const iframe = api.getIFrame();
  console.log(iframe)
  console.log('onloadvideocaht', e)
  // var iframe = document.getElementById("jitsiConferenceFrame0");
  var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
  // elmnt.style.display = "none";
  console.log(elmnt)
}
api.addEventListener("readyToClose", readyToCloseEvent);
function readyToCloseEvent() {
  console.log('readyToCloseEvent');
  window.location.href = "/"
}

api.getAvailableDevices().then(devices => {
  console.log(devices)
});
