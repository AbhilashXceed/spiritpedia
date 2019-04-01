import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import firebase from "react-native-firebase";


export default class PushService extends React.Component {
  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  // CHECK PERMISSIONs HERE
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      await firebase.messaging().getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
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
        this.showAlert(title, body);
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
      this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.warn(JSON.stringify(message));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.superfont}>THIS IS PUSH NOTIFICATION PAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "slateblue",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  superfont: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  }
});
