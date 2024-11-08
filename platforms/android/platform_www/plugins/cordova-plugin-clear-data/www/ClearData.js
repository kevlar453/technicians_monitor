cordova.define("cordova-plugin-clear-data.ClearData", function(require, exports, module) {

var ClearData = {
    cache : function( success, error ) {
        cordova.exec(success, error, "ClearData", "cache", [])
    }
};

module.exports = ClearData;

});
