cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.cordova.plugins.cookiemaster.cookieMaster",
      "file": "plugins/com.cordova.plugins.cookiemaster/www/cookieMaster.js",
      "pluginId": "com.cordova.plugins.cookiemaster",
      "clobbers": [
        "cookieMaster"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidEntry",
      "file": "plugins/cordova-plugin-file/www/android/Entry.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-file-opener2.FileOpener2",
      "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
      "pluginId": "cordova-plugin-file-opener2",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    },
    {
      "id": "cordova-plugin-filepath.FilePath",
      "file": "plugins/cordova-plugin-filepath/www/FilePath.js",
      "pluginId": "cordova-plugin-filepath",
      "clobbers": [
        "window.FilePath"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-sntp.sntp",
      "file": "plugins/cordova-plugin-sntp/www/cordova-plugin-sntp.js",
      "pluginId": "cordova-plugin-sntp",
      "clobbers": [
        "cordova.plugins.sntp"
      ]
    },
    {
      "id": "cordova-pdf-generator.pdf",
      "file": "plugins/cordova-pdf-generator/www/pdf.js",
      "pluginId": "cordova-pdf-generator",
      "clobbers": [
        "cordova.plugins.pdf",
        "pugin.pdf",
        "pdf"
      ]
    },
    {
      "id": "cordova-plugin-x-toast.Toast",
      "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
      "pluginId": "cordova-plugin-x-toast",
      "clobbers": [
        "window.plugins.toast"
      ]
    },
    {
      "id": "br.com.msfilho.spinnerdialog.SpinnerDialog",
      "file": "plugins/br.com.msfilho.spinnerdialog/www/SpinnerDialog.js",
      "pluginId": "br.com.msfilho.spinnerdialog",
      "clobbers": [
        "SpinnerDialog"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
      "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
      "pluginId": "cordova-plugin-nativegeocoder",
      "clobbers": [
        "nativegeocoder"
      ]
    },
    {
      "id": "cordova-background-geolocation-plugin.BackgroundGeolocation",
      "file": "plugins/cordova-background-geolocation-plugin/www/BackgroundGeolocation.js",
      "pluginId": "cordova-background-geolocation-plugin",
      "clobbers": [
        "BackgroundGeolocation"
      ]
    },
    {
      "id": "cordova-background-geolocation-plugin.radio",
      "file": "plugins/cordova-background-geolocation-plugin/www/radio.js",
      "pluginId": "cordova-background-geolocation-plugin"
    },
    {
      "id": "cordova-plugin-android-permissions.Permissions",
      "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
      "pluginId": "cordova-plugin-android-permissions",
      "clobbers": [
        "cordova.plugins.permissions"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "WebViewer.webview",
      "file": "plugins/WebViewer/www/webview.js",
      "pluginId": "WebViewer",
      "clobbers": [
        "webview"
      ]
    },
    {
      "id": "cordova-plugin-clear-data.ClearData",
      "file": "plugins/cordova-plugin-clear-data/www/ClearData.js",
      "pluginId": "cordova-plugin-clear-data",
      "clobbers": [
        "ClearData"
      ]
    },
    {
      "id": "cordova-plugin-cache-clear.CacheClear",
      "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
      "pluginId": "cordova-plugin-cache-clear",
      "clobbers": [
        "CacheClear"
      ]
    }
  ];
  module.exports.metadata = {
    "com.cordova.plugins.cookiemaster": "1.0.0",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-file": "8.1.0",
    "cordova-plugin-advanced-http": "3.3.1",
    "cordova-plugin-app-version": "0.1.14",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-device": "3.0.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-file-opener2": "4.0.0",
    "cordova-plugin-filepath": "1.6.0",
    "cordova-plugin-network-information": "3.0.0",
    "cordova-plugin-splashscreen": "7.0.0-dev",
    "cordova-plugin-websql": "0.0.10",
    "cordova-plugin-sntp": "0.0.1",
    "cordova-pdf-generator": "2.1.1",
    "cordova-plugin-x-toast": "2.7.3",
    "br.com.msfilho.spinnerdialog": "1.0.8",
    "cordova-sqlite-storage": "6.1.0",
    "cordova-plugin-camera": "7.0.0",
    "cordova-plugin-geolocation": "5.0.0",
    "cordova-plugin-nativegeocoder": "3.5.1",
    "cordova-background-geolocation-plugin": "2.3.1",
    "cordova-plugin-android-permissions": "1.1.5",
    "cordova-plugin-badge": "0.8.9",
    "cordova-plugin-local-notification": "1.0.0",
    "cordova-plugin-background-mode": "0.7.3",
    "WebViewer": "0.0.1",
    "cordova-plugin-clear-data": "1.0.0",
    "cordova-plugin-cache-clear": "1.3.7"
  };
});