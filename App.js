import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import wallpaper from "./assets/images/wallpaper.webp";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import NotificationsList from "./src/component/NotificationList";

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      {/* notification list */}
      <NotificationsList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Ionicons name="ios-lock-closed" color="white" size={20} />
            <Text style={styles.date}>Friday, 30 September</Text>
            <Text style={styles.time}>15:26</Text>
            <StatusBar style="auto" />
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    heigh: 250,
  },
  date: {
    color: "#C3FFFE",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: "blod",
    color: "#C3FFFE",
  },
  footer: {
    flexDirection: "row",
    marginTop: "auto",
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 75,
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#00000050",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
