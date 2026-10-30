import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

// Accent palette (React-PDF supports a subset of CSS)
const accent = "#4f46e5";
const accentSoft = "#eef2ff";
const ink = "#1f2937";
const muted = "#6b7280";

const styles = StyleSheet.create({
	header: {
		backgroundColor: accentSoft,
		borderLeft: `4pt solid ${accent}`,
		borderRadius: 4,
		padding: 12,
		marginBottom: 14,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: ink,
		letterSpacing: 0.5,
	},
	role: {
		fontSize: 12,
		color: accent,
		fontWeight: "bold",
		marginTop: 2,
		marginBottom: 6,
	},
	contacts: {
		flexDirection: "row",
		flexWrap: "wrap",
		columnGap: 10,
		rowGap: 2,
	},
	contact: {
		fontSize: 9.5,
		color: ink,
	},
	contactLink: {
		fontSize: 9.5,
		color: accent,
		textDecoration: "none",
	},
	section: {
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
		letterSpacing: 1.2,
		textTransform: "uppercase",
		color: accent,
		borderBottom: `1.5pt solid ${accent}`,
		paddingBottom: 3,
		marginBottom: 7,
	},
	item: {
		marginBottom: 8,
	},
	itemTitle: {
		fontSize: 11.5,
		fontWeight: "bold",
		color: ink,
	},
	itemSubtitle: {
		fontSize: 9.5,
		color: muted,
		marginBottom: 3,
	},
	text: {
		fontSize: 10.5,
		color: ink,
		lineHeight: 1.4,
		marginBottom: 2,
	},
	skillLabel: {
		fontWeight: "bold",
		color: accent,
	},
	link: {
		fontSize: 9.5,
		color: accent,
		textDecoration: "none",
	},
	privacyNotice: {
		fontSize: 7.5,
		color: muted,
		marginTop: 8,
	},
	bulletItem: {
		flexDirection: "row",
		marginBottom: 3,
	},
	bullet: {
		width: 10,
		fontSize: 10.5,
		color: accent,
	},
	bulletText: {
		flex: 1,
		fontSize: 10.5,
		color: ink,
		lineHeight: 1.4,
	},
});

function Bullet({ children }: { children: React.ReactNode }) {
	return (
		<View style={styles.bulletItem}>
			<Text style={styles.bullet}>•</Text>
			<Text style={styles.bulletText}>{children}</Text>
		</View>
	);
}

function Skill({ label, children }: { label: string; children: string }) {
	return (
		<Text style={styles.text}>
			<Text style={styles.skillLabel}>{label}:</Text> {children}
		</Text>
	);
}

function CV() {
	return (
		<>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.name}>Maurizio Tolomeo</Text>
				<Text style={styles.role}>
					Frontend Developer · React · TypeScript · Next.js · AI-Assisted
					Development
				</Text>
				<View style={styles.contacts}>
					<Text style={styles.contact}>maurizio.tolomeo@outlook.it</Text>
					<Text style={styles.contact}>+39 331 334 8821</Text>
					<Link
						style={styles.contactLink}
						src="https://www.linkedin.com/in/maurizio-tolomeo/"
					>
						linkedin.com/in/maurizio-tolomeo
					</Link>
					<Link style={styles.contactLink} src="https://github.com/moris88">
						github.com/moris88
					</Link>
					<Link style={styles.contactLink} src="https://www.mauriziotolomeo.it">
						mauriziotolomeo.it
					</Link>
				</View>
			</View>

			{/* Summary */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Professional Summary</Text>
				<Text style={styles.text}>
					Frontend Developer with 5+ years of experience building scalable web
					applications with React, TypeScript and Next.js. At CRMPartners I
					design and ship CRM integrations and marketplace apps for Zoho,
					Freshworks and Zendesk, connecting frontends to REST APIs built with
					Node.js, Java and Python.
				</Text>
				<Text style={styles.text}>
					I use AI tools such as Claude and Claude Code every day to speed up
					development, code review and testing. I care about performance,
					accessibility and clean UI/UX, and I enjoy solving complex problems in
					collaborative teams.
				</Text>
			</View>

			{/* Technical Skills */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Technical Skills</Text>
				<Skill label="Languages">
					TypeScript, JavaScript (ES6+), HTML5, CSS3, Java, Python, SQL
				</Skill>
				<Skill label="Frontend">
					React, Next.js, Tailwind CSS, Vite, Responsive Design, Web
					Accessibility (WCAG), UI/UX Design
				</Skill>
				<Skill label="Backend & Integrations">
					Node.js, PHP, Drupal, REST APIs, Zoho CRM API, Freshworks, Zendesk,
					Deluge
				</Skill>
				<Skill label="Testing & Quality">
					Playwright, Vitest, End-to-End Testing, Unit Testing, Biome
				</Skill>
				<Skill label="AI & Productivity">
					Claude (Anthropic CCAF certified), Claude Code, AI-Assisted
					Development, Prompt Engineering
				</Skill>
				<Skill label="Tools">Git, GitHub, CI/CD, Figma</Skill>
			</View>

			{/* Experience */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Work Experience</Text>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>Frontend Web Developer</Text>
					<Text style={styles.itemSubtitle}>
						CRMPartners S.R.L. · Rome, Italy · Dec 2021 – Present
					</Text>
					<Bullet>
						Develop complex web applications in React and TypeScript, improving
						performance and scalability.
					</Bullet>
					<Bullet>
						Build custom widgets and marketplace apps for CRM platforms (Zoho
						CRM, Freshworks, Zendesk) that streamline client workflows.
					</Bullet>
					<Bullet>
						Integrate REST APIs with Node.js, Java and Python to sync CRM data,
						reducing manual tasks by 40%.
					</Bullet>
					<Bullet>
						Develop the Creditsafe Business Report app for Zoho CRM, published
						on the Zoho Marketplace.
					</Bullet>
					<Bullet>
						Use Claude and Claude Code for AI-assisted coding, refactoring, code
						review and test writing.
					</Bullet>
				</View>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>Junior Web Developer</Text>
					<Text style={styles.itemSubtitle}>
						CRMPartners S.R.L. · Rome, Italy · May 2021 – Dec 2021
					</Text>
					<Bullet>
						Automated CRM workflows with JavaScript and Deluge (Zoho) scripts,
						reducing repetitive manual operations.
					</Bullet>
				</View>
			</View>

			{/* Projects */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Projects</Text>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>
						Creditsafe Business Report for Zoho CRM
					</Text>
					<Text style={styles.itemSubtitle}>
						Creditsafe × CRMPartners · Dec 2022 – Present
					</Text>
					<Text style={styles.text}>
						Zoho CRM app providing real-time company scoring, qualification and
						financial data from Creditsafe and the Italian Chamber of Commerce.
					</Text>
					<Text style={styles.text}>
						Tech stack: Next.js, TypeScript, Tailwind CSS, Zoho CRM API,
						Creditsafe API
					</Text>
					<Link
						style={styles.link}
						src="https://marketplace.zoho.com/app/crm/creditsafe-for-zoho-crm"
					>
						marketplace.zoho.com/app/crm/creditsafe-for-zoho-crm
					</Link>
				</View>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>Personal Portfolio Website</Text>
					<Text style={styles.itemSubtitle}>Apr 2023 – Present</Text>
					<Text style={styles.text}>
						Responsive portfolio built with Next.js and Tailwind CSS.
					</Text>
					<Link style={styles.link} src="https://www.mauriziotolomeo.it">
						mauriziotolomeo.it
					</Link>
				</View>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>Frontend Side Projects</Text>
					<Text style={styles.itemSubtitle}>Jun 2026 – Present</Text>
					<Text style={styles.text}>
						Collection of small frontend projects to explore new libraries, UI
						patterns and AI-assisted workflows.
					</Text>
					<Link style={styles.link} src="https://mauriziotolomeo.it/projects">
						mauriziotolomeo.it/projects
					</Link>
				</View>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>
						Alumni Portal – University of Trento
					</Text>
					<Text style={styles.itemSubtitle}>Web Portal</Text>
					<Text style={styles.text}>
						Online platform for University of Trento alumni to connect, share
						experiences and access exclusive resources, news, events and
						networking opportunities. Frontend built with HTML, CSS and
						JavaScript on a PHP/Drupal backend for smooth UX and efficient
						content management.
					</Text>
					<Text style={styles.text}>
						Tech stack: PHP, Drupal, HTML, CSS, JavaScript
					</Text>
					<Link style={styles.link} src="https://alumni.unitn.it/">
						alumni.unitn.it
					</Link>
				</View>
			</View>

			{/* Certifications */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Certifications</Text>
				<View style={styles.item}>
					<Text style={styles.itemTitle}>
						Claude Certified Architect – Foundations (CCAF)
					</Text>
					<Text style={styles.itemSubtitle}>
						Anthropic · Oct 29, 2026 · Score: 868/1000
					</Text>
					<Link
						style={styles.link}
						src="https://www.credly.com/badges/83b5e306-6420-4375-9554-fda2637d786b/public_url"
					>
						View credential
					</Link>
				</View>
				<View style={styles.item}>
					<Text style={styles.itemTitle}>
						Freshworks Certified App Developer – Foundations
					</Text>
					<Text style={styles.itemSubtitle}>Freshworks · Nov 2023</Text>
					<Link
						style={styles.link}
						src="https://www.credly.com/badges/fb0d7ace-08ba-43f7-94a3-6bf89be944cc/public_url"
					>
						View credential
					</Link>
				</View>
			</View>

			{/* Education */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Education</Text>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>
						Full Stack Web Developer Bootcamp
					</Text>
					<Text style={styles.itemSubtitle}>
						Epicode · Online · Jan 2021 – Mar 2021
					</Text>
					<Text style={styles.text}>
						HTML, CSS, JavaScript, Angular, PHP, Laravel, MySQL.
					</Text>
				</View>

				<View style={styles.item}>
					<Text style={styles.itemTitle}>Computer Science Studies</Text>
					<Text style={styles.itemSubtitle}>
						University of Bari · Bari, Italy · Oct 2013 – Jul 2016
					</Text>
					<Text style={styles.text}>
						C/C++, Object-Oriented Programming in Java, Data Structures,
						Algorithms, SQL, Mathematics.
					</Text>
				</View>
			</View>

			{/* Soft Skills */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Soft Skills</Text>
				<Text style={styles.text}>
					Problem Solving · Critical Thinking · Teamwork · Stress Resilience ·
					Dedication
				</Text>
			</View>

			{/* Languages */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Languages</Text>
				<Text style={styles.text}>Italian (Native) · English (B2)</Text>
			</View>

			<Text style={styles.privacyNotice}>
				I authorize the processing of my personal data contained in this CV for
				recruitment purposes, in accordance with Regulation (EU) 2016/679 (GDPR)
				and Legislative Decree No. 196/2003, as amended.
			</Text>
			<Text style={styles.privacyNotice}>Last updated: October 30, 2026</Text>
		</>
	);
}

export default CV;
