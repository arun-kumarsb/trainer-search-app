import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#3ea6ff", // neon blue
        tabBarInactiveTintColor: "#d0d0d0",
        tabBarStyle: {
          backgroundColor: "#05060a",        // dark base
          borderTopColor: "rgba(0, 162, 255, 0.2)",
          borderTopWidth: 1,
          height: 62,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="project"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="user" color={color} />
          ),
        }}
      />

      {/* Contacts */}
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="phone" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
