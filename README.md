# PT ARTHA MIGAS RESOURCES – Corporate Website

A modern, responsive, and corporate web application built for **PT ARTHA MIGAS RESOURCES**, an Indonesian energy-sector enterprise specializing in oil & gas drilling support, field operational solutions, oilfield services, and industrial equipment procurement.

The design embodies operational excellence, industrial engineering rigor, unwavering safety commitment, and international corporate prestige inspired by global energy leaders.

---

## 🎨 Visual Identity & Design System

The visual language follows the prescribed corporate palette:
- **Primary (Deep Navy):** `#071827` – Communicating stability, deep industrial authority, and corporate gravity.
- **Secondary (Industrial Blue):** `#123B5D` – Evoking precision engineering and maritime offshore discipline.
- **Accent (Premium Gold):** `#C6A15B` – Conveying quality, high standards, and elite energy excellence.
- **Light Surface:** `#F4F6F8` – Crisp, clean whitespace for effortless readability.
- **White:** `#FFFFFF` – High-contrast clarity and structural definition.
- **Typography:** Google Fonts **Inter** (body & UI) and **Manrope** (bold corporate headings).

---

## 🚀 Technology Stack

- **React.js 18+** with JSX component architecture.
- **Tailwind CSS 3.4+** with custom corporate color variables, glowing accents, and responsive typography.
- **Framer Motion 11+** for cinematic hero entrance, scroll reveals, card stagger, and accessible motion (with `prefers-reduced-motion` compliance).
- **Lucide React** for industrial and corporate iconography.
- **Vite 6+** for rapid development and optimized production bundling.
- **HTML5 Semantic Structure & Modern ES6+ JavaScript**.

---

## 🏗️ Project Architecture & Components

```
artha-migas-resources/
├── index.html                   # HTML5 entry with Google Fonts & SEO metadata
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Tailwind theme extension & custom color palette
├── postcss.config.js            # PostCSS plugin setup
├── public/
│   └── favicon.svg              # Custom gold/navy derrick energy emblem
└── src/
    ├── main.jsx                 # React root mounting
    ├── App.jsx                  # Master application orchestrating navigation & sections
    ├── index.css                # Base styling, custom scrollbars, industrial texture, accessibility
    ├── data/
    │   └── companyData.js       # Central data store (services, operations, projects, HSE, contacts)
    └── components/
        ├── Navbar.jsx           # Fixed responsive navbar with dynamic scroll & Framer Motion mobile drawer
        ├── Hero.jsx             # Cinematic fullscreen hero with offshore rig imagery & staggered text
        ├── About.jsx            # "Who We Are" 2-column layout, authentic values & discovery modal
        ├── Services.jsx         # 6 modern service cards with Lucide icons & gold accents
        ├── ServiceModal.jsx     # Deep-dive interactive modal for each service with direct inquiry action
        ├── Operations.jsx       # "Engineering Excellence. Reliable Operations." filterable gallery
        ├── OperationModal.jsx   # Lightbox modal for high-res industrial operation photos
        ├── Projects.jsx         # Project portfolio with representative case studies
        ├── HSE.jsx              # "Safety Is Our Priority." 3 visual pillars & Stop-Work Authority
        ├── WhyChooseUs.jsx      # 4 core pillars with alternating corporate contrast
        ├── Contact.jsx          # Validated contact form, WhatsApp desk & corporate info
        └── Footer.jsx           # Corporate identity, quick links, services directory, copyright © 2026
```

---

## ⚙️ Configuration & Customization

All corporate contact information, WhatsApp numbers, services, and locations can be modified in one single place:
👉 **`src/data/companyData.js`**

```javascript
export const companyProfile = {
  name: "PT ARTHA MIGAS RESOURCES",
  contact: {
    email: "corporate@arthamigas.co.id",
    phoneDisplay: "+62 21 5289 7700",
    phoneCallable: "+622152897700",
    whatsappNumber: "6281112345678", // Put your real WhatsApp number here (without '+' or dashes)
    whatsappDisplay: "+62 811-1234-5678",
    address: "Energy Tower, 18th Floor, SCBD Lot 11A, Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia",
    workingHours: "Monday – Friday: 08:00 – 17:00 WIB",
  },
  // ...
};
```

---

## 💻 Running the Application Locally

### Prerequisites
- Node.js (version 18 or newer)
- npm (version 9 or newer)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
The application will launch at: `http://localhost:3000` (or the next available port shown in terminal).

### Step 3: Build for Production
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

### Step 4: Preview Production Build
```bash
npm run preview
```

---

## 🛡️ Governance & Transparency Policy

In strict accordance with corporate standards:
- **No Fictitious Metrics**: The website does not invent false historical statistics, unverified client names, or unauthorized certification claims.
- **Illustrative Representation**: Operations and project case studies are explicitly marked as representative operational frameworks.
- **HSE Stop-Work Authority**: Focuses on operational culture and safety discipline.
- **Configurable Placeholders**: All addresses and contact details are clearly structured for verified company data substitution.

