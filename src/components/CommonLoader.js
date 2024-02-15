/* eslint-disable no-unused-vars */
import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";

const CommonLoader = ({ loading }) => {
  return (
    <Modal visible={loading} transparent={true} animationType={"none"}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color={"#0081bb"}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CommonLoader;
