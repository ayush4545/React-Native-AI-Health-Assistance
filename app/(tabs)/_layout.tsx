import { tabs } from "@/constants/tabs";
import { colors, components } from "@/constants/theme";
import "@/global.css";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { styled } from "nativewind";
import {
  SafeAreaView as RNSafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const tabBar = components.tabBar;

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          // tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            bottom: Math.max(insets.bottom, tabBar.horizontalInset),
            // height: tabBar.height,
            marginHorizontal: tabBar.horizontalInset,
            borderRadius: tabBar.radius,
            backgroundColor:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(217, 70, 239, 0.6))",
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarItemStyle: {
            paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
          },
          tabBarIconStyle: {
            width: tabBar.iconFrame,
            height: tabBar.iconFrame,
            alignItems: "center",
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.mutedForeground,
          sceneStyle: { backgroundColor: "transparent" },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.icon} size={size} color={color} />
              ),
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}
