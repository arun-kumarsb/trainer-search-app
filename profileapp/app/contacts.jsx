import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";

export default function Contacts() {
  const theme = {
    bg: "#0d1117",
    card: "#161b22",
    border: "#30363d",
    text: "#f0f6fc",
    textSecondary: "#8b949e",
    accent: "#2f81f7",
  };

  const open = (url) => Linking.openURL(url);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>

      {/* HEADER */}
      <Text style={[styles.header, { color: theme.text }]}>Contact Me</Text>

      {/* PROFILE CARD */}
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=4" }}
          style={[styles.avatar, { borderColor: theme.accent }]}
        />

        <Text style={[styles.name, { color: theme.text }]}>Arun Kumar</Text>
        <Text style={[styles.role, { color: theme.textSecondary }]}>Full Stack Developer</Text>

        <View style={styles.divider} />
        
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Reach out anytime through the links below.
        </Text>
      </View>

      {/* SOCIAL / CONTACT BUTTONS */}
      <View style={styles.linksWrapper}>

        {/* EMAIL */}
        <TouchableOpacity
          style={[styles.linkButton, { borderColor: theme.accent }]}
          onPress={() => open("mailto:arun@example.com")}
        >
          <Text style={[styles.linkText, { color: theme.accent }]}>📧 Email</Text>
        </TouchableOpacity>

        {/* TWITTER / X */}
        <TouchableOpacity
          style={[styles.linkButton, { borderColor: theme.accent }]}
          onPress={() => open("https://twitter.com")}
        >
          <Text style={[styles.linkText, { color: theme.accent }]}>𝕏 Twitter</Text>
        </TouchableOpacity>

        {/* GITHUB */}
        <TouchableOpacity
          style={[styles.linkButton, { borderColor: theme.accent }]}
          onPress={() => open("https://github.com/arun-kumarsb/")}
        >
          <Text style={[styles.linkText, { color: theme.accent }]}>🐙 GitHub</Text>
        </TouchableOpacity>

        {/* GLASSDOOR */}
        <TouchableOpacity
          style={[styles.linkButton, { borderColor: theme.accent }]}
          onPress={() => open("https://www.glassdoor.com")}
        >
          <Text style={[styles.linkText, { color: theme.accent }]}>💼 Glassdoor</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    width: "90%",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    marginBottom: 12,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#30363d",
    marginVertical: 10,
  },

  subtitle: {
    fontSize: 13,
    textAlign: "center",
  },

  linksWrapper: {
    width: "90%",
    gap: 14,
  },

  linkButton: {
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },

  linkText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
