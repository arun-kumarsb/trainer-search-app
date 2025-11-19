import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2f81f7",        // Accent (bright blue)
        tabBarInactiveTintColor: "#8b949e",     // Subtle gray
        tabBarStyle: {
          backgroundColor: "#0d1117",           // Dark background
          borderTopColor: "#30363d",            // Soft border
          height: 62,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: "#0d1117",
        },
        headerTitleStyle: {
          color: "#f0f6fc",
          fontSize: 18,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="project"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="folder-open" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
