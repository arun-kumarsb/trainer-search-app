import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

/**
 * LinkedIn-like Profile Screen
 * Fully clickable actions
 * Dark Neon Theme
 */

export default function ProfileScreen() {
  /** SKILLS */
  const skills = [
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "TensorFlow",
    "Docker",
    "Postgres",
  ];

  /** EDUCATION (clickable rows) */
  const education = [
    {
      school: "The National Institute of Engineering, Mysuru",
      degree: "Bachelor of Engineering — Information Science",
      range: "Sep 2024 - Nov 2028",
      url: "https://nie.ac.in",
    },
    {
      school: "Kendriya Vidyalaya (KV)",
      degree: "High School & Intermediate — PCM",
      range: "Mar 2012 - Jul 2024",
      url: "https://kvsangathan.nic.in",
    },
  ];

  /** PROJECTS (clickable rows) */
  const projects = [
    {
      title: "Smart Fitness Tracker",
      desc: "On-device pose estimation + workout analytics.",
      link: "https://github.com/yourusername/fitness-tracker",
    },
    {
      title: "GitHub Repo Analyzer",
      desc: "CLI tool to compute repo health & contributor metrics.",
      link: "https://github.com/yourusername/repo-analyzer",
    },
  ];

  /** LANGUAGES */
  const languages = [
    { lang: "English", level: "Fluent" },
    { lang: "Hindi", level: "Native" },
    { lang: "Kannada", level: "Conversational" },
  ];

  /** ACTION FUNCTIONS */
  const sendEmail = () => {
    Linking.openURL("mailto:arunkumar@gmail.com");
  };

  const openResume = () => {
    Linking.openURL("https://your-resume-link.com/resume.pdf");
  };

  const shareProfile = () => {
    Share.share({
      message: "Check out Arun Kumar’s professional profile!",
      url: "https://github.com/arunkumar",
    });
  };

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      {/* Banner */}
      <View style={styles.bannerWrap}>
        <LinearGradient colors={["#012238", "#001426"]} style={styles.banner} />
        <View style={[styles.glow, styles.glowLeft]} />
        <View style={[styles.glow, styles.glowRight]} />
      </View>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/583231?v=4" }}
          style={styles.avatar}
        />

        <View style={styles.headerRight}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>Arun Kumar</Text>
            <View style={styles.verifiedBadge}>
              <Ionicons name="shield-checkmark" size={14} color="#bcd8ff" />
            </View>
          </View>

          <Text style={styles.pronoun}>He/Him</Text>

          <Text style={styles.headline}>
            Software Developer • AI/ML Practitioner • Open Source
          </Text>

          <Text style={styles.stats}>479 connections • India</Text>
        </View>
      </View>

      {/* ACTION BAR (LinkedIn Style) */}
      <View style={styles.actionSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.actionScroll}
        >
          <TouchableOpacity style={styles.btnUniform}>
            <Text style={styles.btnText}>Connect</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnUniform} onPress={sendEmail}>
            <Text style={styles.btnText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnUniform}>
            <Text style={styles.btnText}>Follow</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnUniform} onPress={openResume}>
            <Text style={styles.btnText}>Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnUniform} onPress={shareProfile}>
            <Ionicons name="share-social" size={18} color="#ffffff" />
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Section title="About">
          <Text style={styles.bodyText}>
            Absolute learner and curious freshman focused on practical software
            engineering and applied machine learning. I build production-quality
            apps and data-driven systems with clean architecture.
          </Text>
        </Section>

        {/* Quick Stats */}
        <View style={styles.quickRow}>
          <View style={styles.quickCard}>
            <Text style={styles.quickNum}>1.2k</Text>
            <Text style={styles.quickLabel}>Followers</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickNum}>18</Text>
            <Text style={styles.quickLabel}>Projects</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickNum}>15</Text>
            <Text style={styles.quickLabel}>Repos</Text>
          </View>
        </View>

        {/* Skills */}
        <Section title="Skills & Tech Stack">
          <View style={styles.skillWrap}>
            {skills.map((s) => (
              <View key={s} style={styles.skillTag}>
                <Text style={styles.skillText}>{s}</Text>
              </View>
            ))}
          </View>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Card>
            <Text style={styles.cardTitle}>Software Developer Intern</Text>
            <Text style={styles.cardSub}>TCS • 2023 - Present</Text>
            <Text style={styles.bodyText}>
              Worked on backend services, modular UI, and reliability
              improvements for large-scale systems.
            </Text>
          </Card>

          <Card>
            <Text style={styles.cardTitle}>AI/ML Research Contributor</Text>
            <Text style={styles.cardSub}>Open Source • 2022 - 2023</Text>
            <Text style={styles.bodyText}>
              Built training pipelines, applied models & production inference
              tooling.
            </Text>
          </Card>
        </Section>

        {/* Education (Clickable) */}
        <Section title="Education">
          {education.map((edu, i) => (
            <TouchableOpacity
              key={i}
              style={styles.row}
              onPress={() => Linking.openURL(edu.url)}
              activeOpacity={0.7}
            >
              <View style={styles.rowLogo}>
                <Text style={styles.rowLogoText}>NIE</Text>
              </View>

              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{edu.school}</Text>
                <Text style={styles.rowSub}>{edu.degree}</Text>
                <Text style={styles.rowMuted}>{edu.range}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.showMoreRow}>
            <Text style={styles.showMoreText}>Show all educations →</Text>
          </TouchableOpacity>
        </Section>

        {/* Projects (Clickable) */}
        <Section title="Featured Projects">
          {projects.map((p, i) => (
            <TouchableOpacity
              key={i}
              style={styles.row}
              onPress={() => Linking.openURL(p.link)}
              activeOpacity={0.7}
            >
              <View style={styles.rowLogo}>
                <Ionicons name="folder-open" size={26} color="#cfe9ff" />
              </View>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{p.title}</Text>
                <Text style={styles.rowSub}>{p.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Section>

        {/* Languages */}
        <Section title="Languages">
          {languages.map((l, i) => (
            <View key={i} style={styles.row}>
              <View style={styles.rowLogo}>
                <Ionicons name="language" size={22} color="#cfe9ff" />
              </View>
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{l.lang}</Text>
                <Text style={styles.rowSub}>{l.level}</Text>
              </View>
            </View>
          ))}
        </Section>

        {/* Resume CTA */}
        <Section>
          <TouchableOpacity style={styles.resumeCta} onPress={openResume}>
            <Text style={styles.resumeCtaText}>Download Resume</Text>
          </TouchableOpacity>
        </Section>
      </View>
    </ScrollView>
  );
}

/* Section Wrapper */
const Section = ({ title, children }) => (
  <View style={styles.section}>
    {title ? <Text style={styles.sectionTitle}>{title}</Text> : null}
    {children}
  </View>
);

/* Card */
const Card = ({ children }) => <View style={styles.card}>{children}</View>;

/* STYLES */
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#05060a" },

  /* Banner */
  bannerWrap: { position: "relative" },
  banner: {
    height: 170,
    width: "100%",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 200,
    opacity: 0.15,
  },
  glowLeft: { backgroundColor: "#2ea7ff", top: 10, left: 40 },
  glowRight: { backgroundColor: "#00a0ff", top: -40, right: 40 },

  /* Header */
  header: {
    flexDirection: "row",
    marginTop: -70,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#071426",
    backgroundColor: "#0b0c0f",
  },
  headerRight: { flex: 1, marginLeft: 28 },
  titleRow: { flexDirection: "row", alignItems: "center" },
  name: { color: "#e8f5ff", fontSize: 22, fontWeight: "700" },
  verifiedBadge: { marginLeft: 8, padding: 4 },
  pronoun: { color: "#9aa8b8", marginTop: 2, fontSize: 12 },
  headline: { color: "#b9cfe6", marginTop: 8, fontSize: 13 },
  stats: { color: "#9fb2c9", fontSize: 12, marginTop: 8 },

  /* Action Section */
  actionSection: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  actionScroll: { paddingRight: 20, alignItems: "center" },

  /* Action Buttons */
  btnUniform: {
    width: 95,
    height: 36,
    backgroundColor: "#012238",
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 13 },

  /* Content */
  content: { paddingHorizontal: 18, paddingTop: 10, paddingBottom: 36 },

  /* Sections */
  section: { marginBottom: 10 },
  sectionTitle: { color: "#cfe9ff", fontSize: 16, fontWeight: "700", marginBottom: 6 },
  bodyText: { color: "#c5dff3", fontSize: 14, lineHeight: 20 },

  /* Quick Stats */
  quickRow: { flexDirection: "row", marginVertical: 12 },
  quickCard: {
    backgroundColor: "#071220",
    flex: 1,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
  },
  quickNum: { color: "#fff", fontSize: 18, fontWeight: "700" },
  quickLabel: { color: "#9fb2c9", marginTop: 6 },

  /* Skills */
  skillWrap: { flexDirection: "row", flexWrap: "wrap" },
  skillTag: {
    backgroundColor: "#071220",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  skillText: { color: "#d3eafc", fontSize: 13 },

  /* Cards */
  card: {
    backgroundColor: "#080a0f",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
  },
  cardTitle: { color: "#eaf6ff", fontSize: 15, fontWeight: "700" },
  cardSub: { color: "#97b0c8", fontSize: 12, marginBottom: 8 },

  /* Reusable Rows */
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  rowLogo: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#071220",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  rowLogoText: { color: "#cfe9ff", fontWeight: "700" },
  rowBody: { flex: 1 },
  rowTitle: { color: "#eaf6ff", fontWeight: "700" },
  rowSub: { color: "#9fb2c9", marginTop: 4 },
  rowMuted: { color: "#7f98ac", marginTop: 4 },

  showMoreRow: { marginTop: 8, alignItems: "center" },
  showMoreText: { color: "#9fb2c9", fontWeight: "600" },

  /* Resume CTA */
  resumeCta: {
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#003b66",
    alignItems: "center",
  },
  resumeCtaText: { color: "#d7f0ff", fontWeight: "700" },
});
