
var argscheck = require('cordova/argscheck'),
utils = require('cordova/utils'),
exec = require('cordova/exec');

var NotificationEx = function() {
};

// iPhone only
NotificationEx.prototype.loadingStart = function(options) {
    cordovaRef.exec(null, null, "NotificationEx","loadingStart", [options]);
};
// iPhone only
NotificationEx.prototype.loadingStop = function() {
    cordovaRef.exec(null, null, "NotificationEx","loadingStop", []);
};

/**
 * Start spinning the activity indicator on the statusbar
 */
NotificationEx.prototype.activityStart = function() {
    cordovaRef.exec(null, null, "NotificationEx", "activityStart", []);
};

/**
 * Stop spinning the activity indicator on the statusbar, if it's currently spinning
 */
NotificationEx.prototype.activityStop = function() {
    cordovaRef.exec(null, null, "NotificationEx", "activityStop", []);
};

