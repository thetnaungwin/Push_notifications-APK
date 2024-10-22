import { View, Text, Button } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

const index = () => {
  const PushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You got mail.",
        body: "You are the best for push notification.",
        data: { data: "goes here", url: "/(test)" },
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
      }}
    >
      <Text>First Screen of notification</Text>
      <Button title="Notification" onPress={PushNotification} />
    </View>
  );
};

export default index;
