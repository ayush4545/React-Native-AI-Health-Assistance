import "@/global.css";
import { LinearGradient } from "expo-linear-gradient";

import { Stack } from "expo-router";
import { styled } from "nativewind";

const Gradient = styled(LinearGradient);
export default function RootLayout() {
  return (
    <Gradient
      className="flex-1"
      colors={["rgb(28,16,48)", "rgb(10,8,24)", "rgb(2,2,16)"]}
      start={{ x: 0.85, y: 0 }}
      end={{ x: 0.15, y: 1 }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </Gradient>
  );
}
