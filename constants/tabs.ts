import { Ionicons } from "@expo/vector-icons";
export const tabs: {
  name: string;
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}[] = [
  {
    name: "index",
    title: "Home",
    icon: "home",
  },
  {
    name: "chat",
    title: "Chat",
    icon: "chatbox",
  },
  {
    name: "scan",
    title: "Scan",
    icon: "scan",
  },
  {
    name: "map",
    title: "Map",
    icon: "map",
  },
  {
    name: "dashboard",
    title: "Health",
    icon: "heart",
  },
];
