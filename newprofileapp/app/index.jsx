import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      
      {/* Header Banner */}
      <LinearGradient colors={["#012238", "#001426"]} style={styles.banner} />

      {/* Welcome Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Explore your developer dashboard</Text>
      </View>

      {/* Profile Shortcut */}
      <Link href="/project" asChild>
        <TouchableOpacity style={styles.profileBtn}>
          <Ionicons name="person-circle" size={26} color="#dff3ff" />
          <Text style={styles.profileBtnText}>Go to Profile</Text>
        </TouchableOpacity>
      </Link>

      {/* Quick Actions Grid */}
      <View style={styles.grid}>
        <Link href="/project" asChild>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="folder-open" size={28} color="#cfe9ff" />
            <Text style={styles.cardText}>Projects</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/skills" asChild>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="flash" size={28} color="#cfe9ff" />
            <Text style={styles.cardText}>Skills</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/education" asChild>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="school" size={28} color="#cfe9ff" />
            <Text style={styles.cardText}>Education</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Built with ❤️ using React Native + Expo</Text>
      </View>
    </ScrollView>
  );
}

/* Styles */
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#05060a" },

  banner: {
    height: 160,
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginBottom: 20,
  },

  header: { paddingHorizontal: 20, marginBottom: 20 },
  title: { color: "#eaf6ff", fontSize: 24, fontWeight: "700" },
  subtitle: { color: "#9fb2c9", marginTop: 4, fontSize: 14 },

  profileBtn: {
    backgroundColor: "#012238",
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 25,
  },
  profileBtnText: {
    color: "#dff3ff",
    fontSize: 15,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#071220",
    width: 100,
    height: 110,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },

  cardText: {
    color: "#dff3ff",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 8,
  },

  footer: { alignItems: "center", paddingBottom: 30 },
  footerText: { color: "#7f98ac", fontSize: 12, marginTop: 10 },
});
