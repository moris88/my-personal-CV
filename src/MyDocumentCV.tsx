// MyDocumentCV.tsx
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

// Base styles (React-PDF does not support full CSS)
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 24,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  header: {
    borderBottom: "1pt solid #cccccc",
    marginBottom: 12,
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  role: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  section: {
    borderBottom: "1pt solid #cccccc",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#333",
  },
  item: {
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 11,
    color: "#666",
    marginBottom: 2,
  },
  text: {
    fontSize: 11,
    marginBottom: 2,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
  },
});

function MyDocumentCV() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>&lt;Maurizio Tolomeo/&gt;</Text>
          <Text style={styles.role}>
            Frontend Web Developer • React • TypeScript • UI/UX
          </Text>
          <Text>Email: maurizio.tolomeo@outlook.it</Text>
          <Text>Phone: +39 331 334 8821</Text>
          <Link src="https://www.linkedin.com/in/maurizio-tolomeo/">
            LinkedIn: maurizio-tolomeo
          </Link>
          <Link src="https://github.com/moris88">GitHub: moris88</Link>
          <Link src="https://www.mauriziotolomeo.it">Website: mauriziotolomeo.it</Link>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;About me</Text>
          <Text style={styles.text}>
            Passionate Frontend Developer with strong expertise in React, TypeScript,
            and modern UI/UX practices. Currently working at CRMPartners, where I design
            and implement scalable web applications and custom CRM integrations.
          </Text>
          <Text style={styles.text}>
            I thrive in dynamic environments, enjoy solving complex problems, and
            continuously seek opportunities to grow my skills and contribute to team success.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Experience</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Frontend Web Developer</Text>
            <Text style={styles.itemSubtitle}>
              CRMPartners S.R.L. · Rome · Dec 2021 — Present
            </Text>

            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Developed complex web applications with React, improving performance and scalability.
              </Text>
            </View>

            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Built custom widgets to optimize CRM platforms (Zoho, Freshworks, Zendesk),
                increasing workflow efficiency.
              </Text>
            </View>

            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Integrated APIs with Java, Node.js, and Python to synchronize CRM data,
                reducing manual tasks by 40%.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Junior Web Developer</Text>
            <Text style={styles.itemSubtitle}>
              CRMPartners S.R.L. · Rome · May 2021 — Dec 2021
            </Text>
            <Text style={styles.text}>
              Automated workflows by developing scripts in JavaScript and Deluge,
              enhancing CRM processes.
            </Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Education</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Bootcamp Epicode</Text>
            <Text style={styles.itemSubtitle}>
              Full Stack Developer Course · Online · Jan 2021 — Mar 2021 ·
              <Link src="https://www.epicode.com/it">epicode.com</Link>
            </Text>
            <Text style={styles.text}>
              Covered: HTML, CSS, JavaScript, Angular, PHP, Laravel, MySQL.
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>University of Bari</Text>
            <Text style={styles.itemSubtitle}>
              Faculty of Computer Science · Bari · Oct 2013 — Jul 2016
            </Text>
            <Text style={styles.text}>
              Main courses: C/C++, Java OOP, Data Structures, Algorithms, SQL, Mathematics.
            </Text>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Projects</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>
              Plugin Creditsafe Business Report for Zoho CRM
            </Text>
            <Text style={styles.itemSubtitle}>
              With Creditsafe and CRMpartners · Dec 2022 — Present
            </Text>
            <Text style={styles.text}>
              Developed an app for Zoho CRM providing real-time company scoring,
              qualification, and financial data from Creditsafe and Italian Chamber of Commerce.
            </Text>

            <Text style={styles.text}>
              Technologies: Next.js, TypeScript, Tailwind CSS, Zoho CRM API, Creditsafe API
            </Text>

            <Link src="https://marketplace.zoho.com/app/crm/creditsafe-for-zoho-crm">
              Marketplace Link
            </Link>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Personal Website</Text>
            <Text style={styles.itemSubtitle}>Apr 2023 — Present</Text>
            <Text style={styles.text}>
              Portfolio website built with Next.js and Tailwind CSS.
            </Text>
            <Link src="https://www.mauriziotolomeo.it">
              www.mauriziotolomeo.it
            </Link>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Package Git Commit Helper IT</Text>
            <Text style={styles.itemSubtitle}>Jun 2025 — Present</Text>
            <Text style={styles.text}>
              An open-source npm package to standardize and simplify Git commit messages in Italian or English, following Conventional Commits guidelines and semantic versioning, all powered by AI.
            </Text>
            <Link src="https://www.npmjs.com/package/git-commit-helper-it">
              git-commit-helper-it
            </Link>
          </View>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Technical Skills</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Frontend:</Text> React, TypeScript, Next.js, Tailwind, Vite.js
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Testing:</Text> Playwright, Vitest, Accessibility
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Backend:</Text> Java, Python, REST APIs
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Tools:</Text> Git/GitHub, CI/CD, Figma, Prompt Engineering
          </Text>
        </View>

        {/* Soft Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Soft Skills</Text>
          <Text style={styles.text}>
            Critical Thinking · Problem Solving · Teamwork · Stress Resilience · Dedication
          </Text>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>/&nbsp;Languages</Text>
          <Text style={styles.text}>
            Italian (Native), English (B2)
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocumentCV;
