# Piyush Upadhyay — Portfolio Website

A React + Redux portfolio website for **Piyush Upadhyay**, built with a data-driven architecture — all content is stored in XML files so non-technical users can update the website **without touching any code**.

---

## Table of Contents

- [How to Update Content (XML Files)](#how-to-update-content-xml-files)
  - [profile.xml — Personal Info & Summary](#profilexml--personal-info--summary)
  - [experience.xml — Work History](#experiencexml--work-history)
  - [skills.xml — Skills & Languages](#skillsxml--skills--languages)
  - [certifications.xml — Certifications](#certificationsxml--certifications)
  - [awards.xml — Honors & Awards](#awardsxml--honors--awards)
  - [education.xml — Education](#educationxml--education)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Git Branching Rules](#git-branching-rules)

---

## How to Update Content (XML Files)

All content files are located in the `public/data/` folder:

```
public/
  data/
    profile.xml
    experience.xml
    skills.xml
    certifications.xml
    awards.xml
    education.xml
```

> **Important rule:** Never delete the XML tags themselves — only change the **text between the tags**.  
> Special characters like `&`, `<`, `>` must be written as `&amp;`, `&lt;`, `&gt;` in XML.

---

### profile.xml — Personal Info & Summary

This file controls the **Hero section** (name, title, tagline) and the **About section** (summary, achievements, tech focus areas).

**Location:** `public/data/profile.xml`

#### To change name, title or location:
```xml
<name>Piyush Upadhyay</name>
<title>Principal Software Engineer</title>
<location>Noida, Uttar Pradesh, India</location>
<email>piyush21upadhyay@gmail.com</email>
<linkedin>https://www.linkedin.com/in/piyush-upadhyay-java</linkedin>
```

#### To update the summary paragraph:
```xml
<summary>Replace this entire text with your new summary.</summary>
```

#### To add a new achievement card:
Find the `<achievements>` block and add a new entry:
```xml
<achievement>
  <metric>60% Faster Deployments</metric>
  <description>Introduced automated CI/CD pipelines reducing release time by 60%.</description>
</achievement>
```

#### To add a new technical focus area:
```xml
<area>
  <category>Data Engineering</category>
  <details>Apache Spark, BigQuery, Dataflow, Pub/Sub</details>
</area>
```

---

### experience.xml — Work History

Controls the **Experience section** with the company tab switcher.

**Location:** `public/data/experience.xml`

#### To add a bullet point to an existing role:
Find the `<contributions>` block inside the role and add:
```xml
<item>Your new contribution or achievement here.</item>
```

#### To update dates or title of a role:
```xml
<title>Senior Staff Software Engineer</title>
<startDate>January 2026</startDate>
<endDate>Present</endDate>
<duration>8 months</duration>
```

#### To update the tech stack line of a role:
```xml
<techStack>Java | Spring Boot | Kafka | GCP | Kubernetes</techStack>
```
Separate each technology with ` | ` (space-pipe-space).

#### To add a brand new company:
Paste this block before the closing `</experiences>` tag. Increment the `id` number:
```xml
<company id="5">
  <name>New Company Name</name>
  <totalDuration>1 year 6 months</totalDuration>
  <roles>
    <role>
      <title>Your Job Title</title>
      <startDate>January 2025</startDate>
      <endDate>Present</endDate>
      <duration>1 year 6 months</duration>
      <location>City, Country</location>
      <description>Brief description of what you did in this role.</description>
      <contributions>
        <item>Key contribution 1.</item>
        <item>Key contribution 2.</item>
      </contributions>
      <techStack>Java | Docker | Kubernetes</techStack>
    </role>
  </roles>
</company>
```

---

### skills.xml — Skills & Languages

Controls the **Skills section** with progress bars.

**Location:** `public/data/skills.xml`

#### To add a skill to an existing category:
Find the `<category>` with the right `name` attribute and add a `<skill>` line:
```xml
<skill level="Advanced">GraphQL</skill>
```
The `level` attribute controls the bar width. Allowed values: `Expert`, `Advanced`, `Intermediate`.

#### To add a completely new skills category:
```xml
<category name="Mobile Development">
  <skill level="Intermediate">React Native</skill>
  <skill level="Intermediate">Flutter</skill>
</category>
```

#### To add a spoken language:
```xml
<language proficiency="Basic">French</language>
```

---

### certifications.xml — Certifications

**Location:** `public/data/certifications.xml`

#### To add a certification:
```xml
<certification>
  <name>AWS Certified Solutions Architect</name>
  <issuer>Amazon Web Services</issuer>
  <code>SAA-C03</code>        <!-- Leave empty tags if no code: <code></code> -->
  <type>Professional</type>   <!-- Options: Professional, Associate, Online -->
</certification>
```

---

### awards.xml — Honors & Awards

**Location:** `public/data/awards.xml`

#### To add an award:
```xml
<award>
  <title>Excellence in Innovation Award</title>
  <description>Recognized for outstanding innovation in cloud architecture.</description>
</award>
```

---

### education.xml — Education

**Location:** `public/data/education.xml`

#### To add an education entry:
```xml
<institution>
  <name>Your University Name</name>
  <degree>Master of Technology (MTech)</degree>
  <field>Computer Science and Engineering</field>
  <startYear>2012</startYear>
  <endYear>2014</endYear>
  <!-- Leave startYear/endYear empty if not applicable: <startYear></startYear> -->
</institution>
```

---

## Running Locally

```bash
# Install dependencies (only needed once)
npm install

# Start the development server at http://localhost:3000
npm start
```

Changes to XML files are picked up on every **page refresh** — no code rebuild needed.

---

## Deployment

The site auto-deploys to **GitHub Pages** whenever code is pushed/merged to the `develop` branch.

**Live URL:** https://piyush21upadhyay.github.io/piyush-portfolio

### First-time GitHub setup (do this once):
1. Push the repository to GitHub: `git push -u origin develop`
2. Go to your repository → **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Future pushes to `develop` will trigger an automatic deployment

---

## Git Branching Rules

```
main          ← production snapshot
develop       ← protected: direct commits are BLOCKED by git hook
  └── feature/your-feature-name   ← always work on a feature branch
```

### Workflow for every change (code or XML content):

```bash
# Step 1 — Start from develop
git checkout develop

# Step 2 — Create a new feature branch
git checkout -b feature/your-change-name

# Step 3 — Make your changes (edit XML files or code)

# Step 4 — Stage and commit
git add -A
git commit -m "feat: describe what you changed"

# Step 5 — Push to GitHub
git push origin feature/your-change-name

# Step 6 — Open a Pull Request on GitHub: feature/... → develop
```

> The local pre-commit hook will **refuse** any direct `git commit` while on the `develop` branch.
> Always use a feature branch and merge via Pull Request.
