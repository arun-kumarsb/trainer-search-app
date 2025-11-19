import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Banner */}
      <LinearGradient
  colors={["#003566", "#001D3D", "#000814"]}
  style={styles.banner}
/>




      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/583231?v=4",
          }}
          style={styles.avatar}
        />

        <View style={styles.headerRight}>
          <Text style={styles.name}>Arun Kumar</Text>
          <Text style={styles.headline}>
            Software Developer • AI/ML Practitioner
          </Text>

          <View style={styles.statsRow}>
            <Text style={styles.stats}>1.2k Followers</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.stats}>350 Connections</Text>
          </View>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About */}
      <Section title="About">
        <Text style={styles.text}>
          Passion-driven engineer focused on scalable software, mobile
          interfaces, and applied machine learning. Strong emphasis on clean,
          maintainable architecture and long-term product thinking.
        </Text>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <View style={styles.skillWrap}>
          {[
            "React Native",
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Node.js",
            "Docker",
            "MongoDB",
            "TypeScript",
          ].map((s, i) => (
            <View key={i} style={styles.skillTag}>
              <Text style={styles.skillText}>{s}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {[
          {
            role: "Software Developer Intern",
            company: "TCS",
            duration: "2023 - Present",
            desc: "Contributed to high-availability backend systems, modular UI components, and application scaling strategies.",
          },
          {
            role: "AI & ML Research Contributor",
            company: "Open Source",
            duration: "2022 - 2023",
            desc: "Built deep learning models and deployed data-driven inference systems in collaborative environments.",
          },
        ].map((exp, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{exp.role}</Text>
            <Text style={styles.cardSubtitle}>{exp.company}</Text>
            <Text style={styles.cardDuration}>{exp.duration}</Text>
            <Text style={styles.text}>{exp.desc}</Text>
          </View>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        <View style={styles.card}>
          <Text style={styles.cardTitle}>B.Tech in Computer Science</Text>
          <Text style={styles.cardSubtitle}>RV College of Engineering</Text>
          <Text style={styles.cardDuration}>2021 - 2025</Text>
        </View>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        {[
          "Machine Learning — Coursera",
          "Deep Learning Specialization",
          "React Native Advanced",
          "Cloud Essentials",
        ].map((c, i) => (
          <View key={i} style={styles.rowItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="#909090" />
            <Text style={styles.text}>{c}</Text>
          </View>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {[
          {
            name: "Fitness Tracker App",
            desc: "Pose estimation & motion analytics using mobile ML models.",
          },
          {
            name: "GitHub Repo Analyzer",
            desc: "CLI tool to inspect commit patterns and repository health.",
          },
          {
            name: "ML Weather Predictor",
            desc: "Regression models for climate forecasting.",
          },
        ].map((p, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{p.name}</Text>
            <Text style={styles.text}>{p.desc}</Text>
          </View>
        ))}
      </Section>

      {/* Languages */}
      <Section title="Languages">
        {[
          { lang: "English", level: "Fluent" },
          { lang: "Hindi", level: "Native" },
          { lang: "Kannada", level: "Conversational" },
        ].map((l, i) => (
          <View key={i} style={styles.langRow}>
            <Text style={styles.langText}>{l.lang}</Text>
            <Text style={styles.langLevel}>{l.level}</Text>
          </View>
        ))}
      </Section>

      {/* Resume */}
      <Section title="Resume">
        <TouchableOpacity style={styles.resumeBtn}>
          <Text style={styles.resumeText}>Download Resume</Text>
        </TouchableOpacity>
      </Section>

    </ScrollView>
  );
}

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0c0c",
    flex: 1,
  },

  banner: {
    height: 150,
    width: "100%",
  },

  header: {
    flexDirection: "row",
    marginTop: -50,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#2e2e2e",
    backgroundColor: "#1a1a1a",
  },

  headerRight: {
    flex: 1,
    marginLeft: 16,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f2f2f2",
  },

  headline: {
    fontSize: 14,
    color: "#909090",
    marginTop: 4,
    lineHeight: 18,
  },

  statsRow: {
    flexDirection: "row",
    marginTop: 6,
  },

  stats: {
    color: "#b0b0b0",
    fontSize: 12,
  },

  dot: {
    color: "#b0b0b0",
    marginHorizontal: 6,
  },

  actionBtn: {
    borderWidth: 1,
    borderColor: "#3a3a3a",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },

  actionText: {
    color: "#dcdcdc",
    fontSize: 13,
  },

  section: {
    padding: 16,
    paddingBottom: 4,
  },

  sectionTitle: {
    color: "#e8e8e8",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  text: {
    color: "#c5c5c5",
    fontSize: 14,
    lineHeight: 20,
  },

  card: {
    backgroundColor: "#141414",
    padding: 14,
    borderRadius: 12,
    marginVertical: 8,
    borderColor: "#1f1f1f",
    borderWidth: 1,
  },

  cardTitle: {
    color: "#efefef",
    fontSize: 16,
    fontWeight: "600",
  },

  cardSubtitle: {
    color: "#9c9c9c",
    fontSize: 13,
    marginBottom: 2,
  },

  cardDuration: {
    color: "#6f6f6f",
    fontSize: 12,
    marginBottom: 8,
  },

  skillWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillTag: {
    backgroundColor: "#171717",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    borderColor: "#252525",
    borderWidth: 1,
  },

  skillText: {
    color: "#d0d0d0",
    fontSize: 13,
  },

  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },

  langRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#141414",
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    borderColor: "#1f1f1f",
    borderWidth: 1,
  },

  langText: {
    color: "#e2e2e2",
    fontSize: 15,
  },

  langLevel: {
    color: "#848484",
  },

  resumeBtn: {
    borderWidth: 1,
    borderColor: "#3a3a3a",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 8,
  },

  resumeText: {
    color: "#d6d6d6",
    fontSize: 15,
    fontWeight: "500",
  },
});
