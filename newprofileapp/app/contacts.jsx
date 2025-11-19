import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Contacts() {
  const contactItems = [
    {
      label: "LinkedIn",
      icon: <Ionicons name="logo-linkedin" size={26} color="#cfe9ff" />,
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      label: "GitHub",
      icon: <Ionicons name="logo-github" size={26} color="#cfe9ff" />,
      url: "https://github.com/yourusername",
    },
    {
      label: "Glassdoor",
      icon: <MaterialCommunityIcons name="glassdoor" size={26} color="#cfe9ff" />,
      url: "https://glassdoor.com",
    },
    {
      label: "Email",
      icon: <Ionicons name="mail" size={26} color="#cfe9ff" />,
      url: "mailto:arunkumar@gmail.com",
    },
    {
      label: "Mobile",
      icon: <Ionicons name="call" size={26} color="#cfe9ff" />,
      url: "tel:+911234567890",
    },
    {
      label: "WhatsApp",
      icon: <Ionicons name="logo-whatsapp" size={26} color="#25D366" />,
      url: "https://wa.me/911234567890",
    },
    {
      label: "Instagram",
      icon: <Ionicons name="logo-instagram" size={26} color="#cfe9ff" />,
      url: "https://instagram.com/yourprofile",
    },
    {
      label: "Portfolio Website",
      icon: <Ionicons name="globe" size={26} color="#cfe9ff" />,
      url: "https://yourportfolio.com",
    },
    {
      label: "Download Resume",
      icon: <Ionicons name="document-text" size={26} color="#cfe9ff" />,
      url: "https://yourdomain.com/resume.pdf",
    },
  ];

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      
      {/* Header Banner */}
      <LinearGradient colors={["#012238", "#001426"]} style={styles.banner} />

      {/* Header Section (same style as Index) */}
      <View style={styles.header}>
        <Text style={styles.title}>Contact & Socials 📬</Text>
        <Text style={styles.subtitle}>Connect with me across all platforms</Text>
      </View>

      {/* Contacts List */}
      <View style={styles.listWrap}>
        {contactItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => Linking.openURL(item.url)}
            activeOpacity={0.7}
          >
            <View style={styles.iconWrap}>{item.icon}</View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Built with ❤️ by Arun Kumar</Text>
        <Text style={styles.footerSub}>React Native • Expo • 2025</Text>
      </View>

    </ScrollView>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#05060a",
  },

  /* Banner same as your Index.jsx */
  banner: {
    height: 160,
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginBottom: 20,
  },

  /* Header (matches Index.jsx perfectly) */
  header: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    color: "#eaf6ff",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#9fb2c9",
    marginTop: 4,
    fontSize: 14,
  },

  /* Contact List */
  listWrap: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  iconWrap: {
    width: 40,
    height: 40,
    backgroundColor: "#071220",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  label: {
    color: "#dff3ff",
    fontSize: 16,
    fontWeight: "600",
  },

  /* Footer same style across your app */
  footer: {
    marginTop: 30,
    paddingVertical: 30,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
  },
  footerText: {
    color: "#eaf6ff",
    fontSize: 14,
    fontWeight: "700",
  },
  footerSub: {
    color: "#7f98ac",
    marginTop: 6,
    fontSize: 12,
  },
});
