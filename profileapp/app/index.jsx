import { View, StyleSheet, Text, Image } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.headerText}>Showcase</Text>

      {/* IMAGE PREVIEW */}
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      {/* PROFILE SHOWCASE CARD */}
      <View style={styles.showcaseCard}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=5" }}
          style={styles.avatar}
        />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>Arun Kumar</Text>
          <Text style={styles.role}>Full Stack Developer</Text>
        </View>
      </View>

      {/* FOOTER BUTTONS */}
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
    alignItems: "center",
    paddingTop: 30,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f0f6fc",
    marginBottom: 10,
  },

  imageContainer: {
    width: "90%",
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#30363d",
    backgroundColor: "#161b22",
    marginBottom: 18,
  },

  showcaseCard: {
    width: "90%",
    backgroundColor: "#161b22",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#30363d",
    padding: 16,
    alignItems: "center",
    marginBottom: 22,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#2f81f7",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f0f6fc",
  },

  role: {
    fontSize: 13,
    color: "#8b949e",
    marginTop: 2,
  },

  footerContainer: {
    width: "90%",
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },
});
