import { View, Text } from "react-native";
import React from "react";

const text = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red" }}>
        Test screen for expo push notification
      </Text>
    </View>
  );
};

export default text;
