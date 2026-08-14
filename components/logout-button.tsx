import { useAuth } from "@/context/auth-context";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "Logout",
        onPress: async () => {
          try {
            await logout();
            router.replace("/auth/login");
          } catch (error) {
            Alert.alert("Error", "Failed to logout");
          }
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <ThemedText style={styles.text}>Logout</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingRight: 16,
  },
  text: {
    color: "#007AFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
