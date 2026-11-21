
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff9e3",
          borderTopWidth: 1,
          borderTopColor: "rgba(0,0,0,0.08)",
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#081126",
        tabBarInactiveTintColor: "rgba(0,0,0,0.6)",
        tabBarLabelStyle: {
          fontSize: 13,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={typeof color === "string" ? color : "#081126"} />
          ),
        }}
      />
      <Tabs.Screen
        name="subscription"
        options={{
          title: "Subscriptions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={typeof color === "string" ? color : "#081126"} />
          ),
        }}
      />
      <Tabs.Screen
        name="insight"
        options={{
          title: "Insight",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={typeof color === "string" ? color : "#081126"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={typeof color === "string" ? color : "#081126"} />
          ),
        }}
      />
    </Tabs>
  );
}
