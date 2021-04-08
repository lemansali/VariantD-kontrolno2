document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    window.addEventListener("batterystatus", onBatteryStatus, false); 
    
    function onBatteryStatus(status){
        $("#batteryStatus").text(status.level);
    }

    // onBatteryStatus();
} 

// function onBatteryStatus(status){
//     $("#batteryStatus").text(status.level);
// }
