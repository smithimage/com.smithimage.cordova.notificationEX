
var NotificationEx = {

// iPhone only
loadingStart: function(options) {
    cordova.exec(null, null, "NotificationEx","loadingStart", [options]);
},
// iPhone only
loadingStop: function() {
    cordova.exec(null, null, "NotificationEx","loadingStop", []);
},

/**
 * Start spinning the activity indicator on the statusbar
 */
activityStart: function() {
    cordova.exec(null, null, "NotificationEx", "activityStart", []);
},

/**
 * Stop spinning the activity indicator on the statusbar, if it's currently spinning
 */
activityStop: function() {
    cordova.exec(null, null, "NotificationEx", "activityStop", []);
}};


module.exports = NotificationEx;
