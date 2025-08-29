import { Text, View } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function Index() {
  const { currentTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
