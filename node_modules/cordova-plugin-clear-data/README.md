cordova-plugin-clear-data [![Latest Stable Version](https://img.shields.io/npm/v/cordova-plugin-clear-data.svg)](https://www.npmjs.com/package/cordova-plugin-clear-data) [![Total Downloads](https://img.shields.io/npm/dt/cordova-plugin-clear-data.svg)](https://npm-stat.com/charts.html?package=cordova-plugin-clear-data)
=========================

Cordova plugin to clear locally persistent user data on Android and iOS.
 
# Installation

    $ cordova plugin add cordova-plugin-clear-data

# Usage

The plugin is exposed via the `ClearData` global namespace.

## cache()

Platforms: Android and iOS

Clears the web resources cache of the application (in-memory and on-disk).

    ClearData.cache(success, error);

### Parameters

- {function} success - (optional) function to execute on successfully clearing app cache.
- {function} error - (optional) function to execute on failure to clear app cache. Will be passed a single argument which is the error message string.

### Simple usage

    ClearData.cache();
    
### Advanced usage

    ClearData.cache(function() {
        console.info('Successfully cleared app cache');
    }, function(err) {
        console.error('Error clearing app cache', err);
    });
