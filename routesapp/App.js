import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Linking,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Galaxy Dark Theme
  const theme = {
    bg: darkMode ? '#0a0e27' : '#ffffff',
    bgSecondary: darkMode ? '#161b33' : '#f3f2ef',
    text: darkMode ? '#ffffff' : '#000000',
    textSecondary: darkMode ? '#b0b9c1' : '#666666',
    accent: darkMode ? '#0a66c2' : '#0a66c2',
    accentGlow: darkMode ? '#0a66c240' : '#0a66c220',
    border: darkMode ? '#283646' : '#d5d9de',
    cardBg: darkMode ? '#132240' : '#ffffff',
    highlight: darkMode ? '#1e5f9f' : '#dde7f0',
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* HEADER BANNER */}
        <View style={[styles.banner, { backgroundColor: theme.accentGlow }]}>
          <View style={styles.bannerContent}>
            <View style={styles.bannerTop}>
              <View style={styles.themeToggleHeader}>
                <Text style={[styles.themeIconSmall, { opacity: darkMode ? 1 : 0.5 }]}>
                  ☀️
                </Text>
                <Switch
                  value={darkMode}
                  onValueChange={() => setDarkMode(!darkMode)}
                  trackColor={{ false: '#d0d0d0', true: '#0a66c2' }}
                  thumbColor={darkMode ? '#ffffff' : '#0a66c2'}
                />
                <Text style={[styles.themeIconSmall, { opacity: !darkMode ? 1 : 0.5 }]}>
                  🌙
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* PROFILE CARD */}
        <View style={[styles.profileCard, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.profileContent}>
            {/* Avatar */}
            <View style={styles.avatarWrapper}>
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/250?img=3',
                }}
                style={[styles.avatar, { borderColor: theme.accent }]}
              />
              <View style={[styles.statusBadge, { backgroundColor: '#31a24c' }]}>
                <Text style={styles.statusDot}>●</Text>
              </View>
            </View>

            {/* Profile Info */}
            <Text style={[styles.profileName, { color: theme.text }]}>Arun Kumar</Text>
            <Text style={[styles.profileTitle, { color: theme.accent }]}>
              Full Stack Developer & AI Analyst
            </Text>
            <Text style={[styles.profileLocation, { color: theme.textSecondary }]}>
              India • Tech Enthusiast
            </Text>

            {/* Action Buttons */}
            <View style={styles.actionButtonsGroup}>
              <TouchableOpacity
                style={[styles.primaryActionBtn, { backgroundColor: theme.accent }]}
                onPress={() => openLink('https://linkedin.com')}
              >
                <Text style={styles.actionBtnText}>Connect</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.secondaryActionBtn, { borderColor: theme.accent, borderWidth: 1.5 }]}
                onPress={() => openLink('mailto:arun@example.com')}
              >
                <Text style={[styles.secondaryActionBtnText, { color: theme.accent }]}>Message</Text>
              </TouchableOpacity>
            </View>

            {/* Analytics */}
            <View style={[styles.analyticsRow, { borderTopColor: theme.border, borderTopWidth: 1 }]}>
              <View style={styles.analyticsItem}>
                <Text style={[styles.analyticsNumber, { color: theme.text }]}>847</Text>
                <Text style={[styles.analyticsLabel, { color: theme.textSecondary }]}>Connections</Text>
              </View>
              <View style={styles.analyticsDivider} />
              <View style={styles.analyticsItem}>
                <Text style={[styles.analyticsNumber, { color: theme.text }]}>23.5K</Text>
                <Text style={[styles.analyticsLabel, { color: theme.textSecondary }]}>Profile Views</Text>
              </View>
              <View style={styles.analyticsDivider} />
              <View style={styles.analyticsItem}>
                <Text style={[styles.analyticsNumber, { color: theme.text }]}>156</Text>
                <Text style={[styles.analyticsLabel, { color: theme.textSecondary }]}>Followers</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ABOUT SECTION */}
        <View style={[styles.section, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>About</Text>
          </View>
          <Text style={[styles.aboutText, { color: theme.textSecondary }]}>
            Passionate developer with 5+ years of experience building scalable web applications. Specialized in React, JavaScript, and modern frontend development. Also skilled in AI analysis, data visualization, and HTML/CSS. Always eager to learn and collaborate on innovative projects that solve real-world problems.
          </Text>
        </View>

        {/* EXPERIENCE SECTION */}
        <View style={[styles.section, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Experience</Text>
          </View>
          <View>
              <View style={[styles.experienceItem, { borderBottomColor: theme.border }]}>
                <View style={styles.expHeader}>
                  <Text style={[styles.expTitle, { color: theme.text }]}>Senior Frontend Developer</Text>
                  <Text style={[styles.expDuration, { color: theme.textSecondary }]}>2 years</Text>
                </View>
                <Text style={[styles.expCompany, { color: theme.accent }]}>Tech Solutions Inc</Text>
                <Text style={[styles.expLocation, { color: theme.textSecondary }]}>Remote</Text>
                <Text style={[styles.expDesc, { color: theme.textSecondary }]}>
                  Leading React development, building scalable web applications for 100k+ users. Improved performance by 40%.
                </Text>
              </View>

              <View style={styles.experienceItem}>
                <View style={styles.expHeader}>
                  <Text style={[styles.expTitle, { color: theme.text }]}>Full Stack Developer</Text>
                  <Text style={[styles.expDuration, { color: theme.textSecondary }]}>2 years</Text>
                </View>
                <Text style={[styles.expCompany, { color: theme.accent }]}>Digital Innovations</Text>
                <Text style={[styles.expLocation, { color: theme.textSecondary }]}>India</Text>
                <Text style={[styles.expDesc, { color: theme.textSecondary }]}>
                  Full-stack development with React, Node.js, MongoDB. Delivered 15+ projects with 100% client satisfaction.
                </Text>
              </View>
            </View>
        </View>

        {/* SKILLS SECTION */}
        <View style={[styles.section, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Skills & Endorsements</Text>
          </View>
          <View style={styles.skillsList}>
              {[
                { name: 'React', endorsements: 234, icon: '⚛️' },
                { name: 'JavaScript', endorsements: 189, icon: '📱' },
                { name: 'HTML & CSS', endorsements: 156, icon: '🎨' },
                { name: 'AI & Analytics', endorsements: 145, icon: '🤖' },
                { name: 'Node.js', endorsements: 123, icon: '🔧' },
                { name: 'UI/UX Design', endorsements: 98, icon: '✨' },
              ].map((skill, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.skillItem,
                    {
                      backgroundColor: theme.bgSecondary,
                      borderBottomColor: theme.border,
                      borderBottomWidth: idx < 5 ? 1 : 0,
                    },
                  ]}
                >
                  <View style={styles.skillLeft}>
                    <Text style={styles.skillIcon}>{skill.icon}</Text>
                    <View style={styles.skillInfo}>
                      <Text style={[styles.skillName, { color: theme.text }]}>{skill.name}</Text>
                      <Text style={[styles.endorsementText, { color: theme.textSecondary }]}>
                        {skill.endorsements} endorsements
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.endorsementBadge, { color: theme.accent }]}>↑</Text>
                </View>
              ))}
            </View>
        </View>

        {/* EDUCATION SECTION */}
        <View style={[styles.section, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Education</Text>
          </View>
          <View style={styles.eduItem}>
              <Text style={[styles.eduDegree, { color: theme.text }]}>B.Tech in Computer Science</Text>
              <Text style={[styles.eduSchool, { color: theme.accent }]}>Indian Institute of Technology</Text>
              <Text style={[styles.eduGrade, { color: theme.textSecondary }]}>2016 - 2020 • Grade: 8.2/10</Text>
            </View>
        </View>

        {/* CERTIFICATIONS SECTION */}
        <View style={[styles.section, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Licenses & Certifications</Text>
          </View>
          <View>
            {['React Advanced Patterns', 'AI & Machine Learning Fundamentals', 'Full Stack Web Development'].map(
              (cert, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.certItem,
                    {
                      backgroundColor: theme.bgSecondary,
                      borderBottomColor: theme.border,
                      borderBottomWidth: idx < 2 ? 1 : 0,
                    },
                  ]}
                >
                  <Text style={[styles.certName, { color: theme.text }]}>📜 {cert}</Text>
                  <Text style={[styles.certIssuer, { color: theme.textSecondary }]}>
                    Issued by Top Tech Academy • 2024
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* FOOTER */}
        <View style={[styles.footerSection, { backgroundColor: theme.bgSecondary, borderTopColor: theme.border }]}>
          <View style={styles.socialIconsRow}>
            <TouchableOpacity onPress={() => openLink('https://github.com')}>
              <Text style={styles.socialIconLarge}>🐙</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://linkedin.com')}>
              <Text style={styles.socialIconLarge}>💼</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://twitter.com')}>
              <Text style={styles.socialIconLarge}>𝕏</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('mailto:arun@example.com')}>
              <Text style={styles.socialIconLarge}>✉️</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.copyrightText, { color: theme.textSecondary }]}>
            © 2024 Arun Kumar
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // BANNER
  banner: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(10, 102, 194, 0.2)',
  },

  bannerContent: {
    alignItems: 'center',
  },

  bannerTop: {
    width: '100%',
    alignItems: 'center',
  },

  themeToggleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  themeIconSmall: {
    fontSize: 16,
  },

  // PROFILE CARD
  profileCard: {
    marginHorizontal: 10,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },

  profileContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    alignItems: 'center',
  },

  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
  },

  statusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },

  statusDot: {
    fontSize: 16,
    color: '#ffffff',
  },

  profileName: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },

  profileTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },

  profileLocation: {
    fontSize: 13,
    marginBottom: 16,
  },

  // ACTION BUTTONS
  actionButtonsGroup: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginBottom: 16,
  },

  primaryActionBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  secondaryActionBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  actionBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  secondaryActionBtnText: {
    fontSize: 15,
    fontWeight: '600',
  },

  // ANALYTICS
  analyticsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 12,
    marginTop: 12,
  },

  analyticsItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },

  analyticsDivider: {
    width: 1,
    height: 40,
  },

  analyticsNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },

  analyticsLabel: {
    fontSize: 11,
  },

  // SECTIONS
  section: {
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },

  expandIcon: {
    fontSize: 24,
    fontWeight: '600',
  },

  // ABOUT
  aboutText: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 13,
    lineHeight: 20,
  },

  // EXPERIENCE
  experienceItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },

  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  expTitle: {
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },

  expDuration: {
    fontSize: 13,
  },

  expCompany: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },

  expLocation: {
    fontSize: 12,
    marginBottom: 8,
  },

  expDesc: {
    fontSize: 13,
    lineHeight: 18,
  },

  // SKILLS
  skillsList: {
    paddingHorizontal: 0,
  },

  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },

  skillLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },

  skillIcon: {
    fontSize: 24,
  },

  skillInfo: {
    flex: 1,
  },

  skillName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },

  endorsementText: {
    fontSize: 12,
  },

  endorsementBadge: {
    fontSize: 16,
    fontWeight: '700',
  },

  // EDUCATION
  eduItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  eduDegree: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },

  eduSchool: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },

  eduGrade: {
    fontSize: 12,
  },

  // CERTIFICATIONS
  certItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },

  certName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },

  certIssuer: {
    fontSize: 12,
  },

  // FOOTER
  footerSection: {
    marginHorizontal: 10,
    marginTop: 8,
    marginBottom: 20,
    borderRadius: 12,
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  socialIconsRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },

  socialIconLarge: {
    fontSize: 28,
  },

  copyrightText: {
    fontSize: 12,
  },
});
