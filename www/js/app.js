// Ionic Starter App

angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }

      console.log("AAAAAA::::")

      const push = PushNotification.init({
        android: {
        },
          browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
          },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      });
      
      push.on('registration', (data) => {
        // data.registrationId
        console.log('registrationId:: ', data);
      });
      
      push.on('notification', (data) => {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
        console.log('DATA:: ', data);
      });
      
      push.on('error', (e) => {
        // e.message
        console.log('Error:: ', e);

      });
    });
  })
