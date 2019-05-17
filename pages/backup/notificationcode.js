// this code is removed from authscreen, it was palced immediatlet after the jsx render; it is placed here for convenienxe
// once done with the screens, place this where it was.

//   
// remove 
// the
// semicolons
// immidiately 
// after this line
// 


async; checkPermission(); {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      await firebase.messaging().getToken();
    } else {
      this.requestPermission();
    }
  }

//   
// remove 
// the
// semicolons
// immidiately 
// after this line
// 

  async; createNotificationListeners(); {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications().onNotification(notification => {
        const { title, body } = notification;
        console.log("onNotification:");
        console.warn("onNotification:");
        // this.showAlert(title, body);
        // alert('message');

        const localNotification = new firebase.notifications.Notification({
          sound: "sampleaudio",
          show_in_foreground: true
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          // .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          // .setData(notification.data)
          .android.setChannelId("fcm_default_channel") // e.g. the id you chose above
          .android.setSmallIcon("@drawable/ic_launcher") // create this icon in Android Studio
          .android.setColor("#000000") // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
      });

    const channel = new firebase.notifications.Android.Channel(
      "fcm_default_channel",
      "SPIRITPEDIA",
      firebase.notifications.Android.Importance.High
    )
      .setDescription("The Xceed App")
      .setSound("sampleaudio.mp3");
    firebase.notifications().android.createChannel(channel);

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        console.warn("onNotificationOpened:");
        // this.showAlert(tistle, body);
      });
    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.warn("getInitialNotification:");
      // this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.warn(JSON.stringify(message));
    });
  }