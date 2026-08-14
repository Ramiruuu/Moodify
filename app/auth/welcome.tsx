import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Gradient Background with Decorative Circles */}
      <View style={styles.backgroundGradient}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Logo Area */}
        <View style={styles.logoArea}>
          <View style={styles.logoCircle}>
            <FontAwesome name="music" size={48} color="#ffffff" />
          </View>
        </View>

        {/* Heading */}
        <View style={styles.headingSection}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Your music, your mood, anytime, anywhere
          </Text>
        </View>

        {/* Feature Highlights */}
        <View style={styles.featuresSection}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <FontAwesome name="headphones" size={24} color="#5B7FE8" />
            </View>
            <Text style={styles.featureText}>Discover new music</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <FontAwesome name="heart" size={24} color="#5B7FE8" />
            </View>
            <Text style={styles.featureText}>Save favorites</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <FontAwesome name="share-alt" size={24} color="#5B7FE8" />
            </View>
            <Text style={styles.featureText}>Share playlists</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("/auth/login")}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push("/auth/register")}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{" "}
          <Text style={styles.termsLink}>Terms of Service</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B7FE8",
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#5B7FE8",
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.12,
  },
  circle1: {
    width: 200,
    height: 200,
    top: -100,
    right: -100,
    backgroundColor: "#ffffff",
  },
  circle2: {
    width: 150,
    height: 150,
    bottom: -50,
    left: -50,
    backgroundColor: "#1E3A8A",
  },
  circle3: {
    width: 180,
    height: 180,
    top: "50%",
    right: -90,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoArea: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  headingSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#E0E7FF",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
  },
  featuresSection: {
    width: "100%",
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
    flex: 1,
  },
  buttonSection: {
    width: "100%",
    gap: 12,
  },
  signInButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5B7FE8",
    letterSpacing: 0.3,
  },
  signUpButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 0.3,
  },
  termsText: {
    fontSize: 12,
    color: "#E0E7FF",
    textAlign: "center",
    lineHeight: 18,
    marginTop: 12,
  },
  termsLink: {
    color: "#ffffff",
    fontWeight: "700",
  },
});
