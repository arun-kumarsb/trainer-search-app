import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function App() {
  const theme = {
    bg: "#0d1117",
    card: "#161b22",
    border: "#30363d",
    text: "#f0f6fc",
    textSecondary: "#8b949e",
    accent: "#2f81f7",
    soft: "#1c2128",
  };

  const openLink = (url) => Linking.openURL(url);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* PROFILE HEADER */}
        <View style={[styles.profileCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200?img=4" }}
            style={[styles.avatar, { borderColor: theme.accent }]}
          />

          <Text style={[styles.name, { color: theme.text }]}>Arun Kumar</Text>

          <Text style={[styles.role, { color: theme.accent }]}>
            Full Stack Developer • AI Analyst
          </Text>

          <Text style={[styles.subText, { color: theme.textSecondary }]}>
            India • Software Engineering
          </Text>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.primaryBtn, { backgroundColor: theme.accent }]}
              onPress={() => openLink("https://linkedin.com")}
            >
              <Text style={styles.primaryBtnText}>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.secondaryBtn, { borderColor: theme.accent }]}
              onPress={() => openLink("mailto:arun@example.com")}
            >
              <Text style={[styles.secondaryBtnText, { color: theme.accent }]}>Email</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.metricsRow, { borderTopColor: theme.border }]}>
            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: theme.text }]}>847</Text>
              <Text style={[styles.metricLabel, { color: theme.textSecondary }]}>Connections</Text>
            </View>

            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: theme.text }]}>23.5k</Text>
              <Text style={[styles.metricLabel, { color: theme.textSecondary }]}>Profile Views</Text>
            </View>

            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: theme.text }]}>156</Text>
              <Text style={[styles.metricLabel, { color: theme.textSecondary }]}>Followers</Text>
            </View>
          </View>
        </View>

        {/* ABOUT */}
        <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>About</Text>
          <Text style={[styles.sectionText, { color: theme.textSecondary }]}>
            Developer focused on scalable systems, cloud-backed applications, and intelligent
            interfaces. Passionate about integrating ML models with production-ready full-stack
            pipelines and building clean user experiences with React and Node.js.
          </Text>
        </View>

        {/* EXPERIENCE */}
        <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Experience</Text>

          {/* Experience Item */}
          <View style={[styles.expItem, { borderColor: theme.border }]}>
            <Text style={[styles.expRole, { color: theme.text }]}>Senior Frontend Developer</Text>
            <Text style={[styles.expCompany, { color: theme.accent }]}>Tech Solutions Inc</Text>

            <Text style={[styles.expPeriod, { color: theme.textSecondary }]}>2022 - Present • Remote</Text>
            <Text style={[styles.expDesc, { color: theme.textSecondary }]}>
              Leading React engineering, architected modular UI systems and improved product
              performance by 40%. Delivered high-impact features across multi-million user systems.
            </Text>
          </View>

          <View style={[styles.expItem, { borderColor: "transparent" }]}>
            <Text style={[styles.expRole, { color: theme.text }]}>Full Stack Engineer</Text>
            <Text style={[styles.expCompany, { color: theme.accent }]}>Digital Innovations</Text>

            <Text style={[styles.expPeriod, { color: theme.textSecondary }]}>2020 - 2022 • India</Text>
            <Text style={[styles.expDesc, { color: theme.textSecondary }]}>
              Delivered 15+ full-stack apps using MERN. Focused on reliability, clean
              architecture, and deployment automation.
            </Text>
          </View>
        </View>

        {/* SKILLS */}
        <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Skills</Text>

          {["React", "JavaScript", "Node.js", "AI/ML", "MongoDB", "UI/UX"].map((skill, idx) => (
            <View key={idx} style={[styles.skillRow, { borderColor: theme.border }]}>
              <Text style={[styles.skillText, { color: theme.text }]}>{skill}</Text>
            </View>
          ))}
        </View>

        {/* EDUCATION */}
        <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Education</Text>

          <Text style={[styles.eduDegree, { color: theme.text }]}>
            B.E. Information Science & Engineering
          </Text>
          <Text style={[styles.eduSchool, { color: theme.accent }]}>
            The National Institute of Engineering
          </Text>
          <Text style={[styles.eduLbl, { color: theme.textSecondary }]}>
            2024 – 2028 • Grade: 9.25/10
          </Text>
        </View>

        {/* FOOTER */}
        <View style={[styles.footer, { backgroundColor: theme.soft, borderColor: theme.border }]}>
          <View style={styles.socialRow}>
            <TouchableOpacity onPress={() => openLink("https://github.com/arun-kumarsb/")}>
              <Text style={styles.socialIcon}>🐙</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://www.linkedin.com")}>
              <Text style={styles.socialIcon}>💼</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://twitter.com")}>
              <Text style={styles.socialIcon}>𝕏</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.footerText, { color: theme.textSecondary }]}>
            © 2024 Arun Kumar
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  profileCard: {
    marginHorizontal: 14,
    marginTop: 18,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    marginBottom: 16,
  },

  name: { fontSize: 26, fontWeight: "700" },

  role: { fontSize: 15, fontWeight: "600", marginBottom: 2 },

  subText: { fontSize: 13, marginBottom: 20 },

  actionRow: { flexDirection: "row", gap: 10, width: "100%", marginBottom: 20 },

  primaryBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  primaryBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  secondaryBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
  },

  secondaryBtnText: {
    fontSize: 15,
    fontWeight: "600",
  },

  metricsRow: {
    borderTopWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
    marginTop: 8,
  },

  metricItem: { alignItems: "center", flex: 1 },

  metricValue: { fontSize: 17, fontWeight: "700" },

  metricLabel: { fontSize: 12 },

  section: {
    marginHorizontal: 14,
    marginTop: 16,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
  },

  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },

  sectionText: { fontSize: 14, lineHeight: 20 },

  /* EXPERIENCE */
  expItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },

  expRole: { fontSize: 15, fontWeight: "600" },

  expCompany: { fontSize: 14, marginBottom: 4 },

  expPeriod: { fontSize: 12, marginBottom: 6 },

  expDesc: { fontSize: 13, lineHeight: 18 },

  /* SKILLS */
  skillRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  skillText: { fontSize: 14 },

  /* EDUCATION */
  eduDegree: { fontSize: 15, fontWeight: "600" },

  eduSchool: { fontSize: 14, marginTop: 4, marginBottom: 3 },

  eduLbl: { fontSize: 12 },

  /* FOOTER */
  footer: {
    marginTop: 20,
    marginHorizontal: 14,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderTopWidth: 1,
    alignItems: "center",
  },

  socialRow: { flexDirection: "row", gap: 24, marginBottom: 12 },

  socialIcon: { fontSize: 28 },

  footerText: { fontSize: 12 },
});
