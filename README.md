# Terra Electric

## 1. Overview

**Terra Electric** is a China-based vehicle export platform that connects international buyers directly to genuine Chinese electric vehicles — eliminating middlemen, markups, and risk. Built by Mahmoud, a 7-year resident of China with deep relationships in local supply chains, factories, and licensed dealers.

The platform is a modern, responsive marketing website designed to build trust, showcase real field exports, and convert visitors into direct WhatsApp leads.

---

## 2. Project Structure

The project follows a modular architecture using the Next.js App Router:

```
Terra_Electric/
├── public/
│   └── assets/
│       └── images/          # Banner, photos, logo, founder image
├── src/
│   ├── app/                 # Next.js App Router pages & layout
│   │   ├── about-us/        # About Us page
│   │   ├── contact-us/      # Contact Us page
│   │   ├── faq/             # FAQ page
│   │   ├── not-found/       # Custom 404 page
│   │   ├── services/        # Services page
│   │   ├── spinner/         # Loading spinner assets
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── loading.tsx      # Loading UI
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── about/           # About Us components (Hero, FounderJourney, etc.)
│   │   ├── contact-us/      # Contact Us components
│   │   ├── faq/             # FAQ components
│   │   ├── home/            # Landing page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Brands.tsx
│   │   │   ├── LatestFromField.tsx
│   │   │   ├── MeetFounder.tsx
│   │   │   └── CTA.tsx
│   │   ├── services/        # Services components
│   │   ├── shared/          # Shared layout components (e.g., Footer)
│   │   └── ui/              # Reusable primitive components (Navbar, Button, Sheet…)
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Shared utility functions
```

---

## 3. Page Sections

| Page | Description |
|---|---|
| **Home** | `Hero`, `Features`, `Process`, `Brands`, `LatestFromField`, `MeetFounder`, `CTA`. |
| **About Us** | `AboutHero`, `OurIdentity`, `WhyChinaLeads`, `ExportMarkets`, `FounderJourney`, `AboutCTA`. |
| **Services** | `ServicesHero`, `ServicesGrid`, `ServiceCard`, `ServicesCTA`. |
| **Contact Us** | `ContactHero`, `FeaturesStrip`, `ContactCards`. |
| **FAQ** | `FaqHero`, `FaqAccordion`, `FaqCTA`. |
| **Shared** | Common layout components like `Footer`, and `Navbar` (via `ui`). |

---

## 4. Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation
Clone the repository and install the dependencies:

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
npm start
```

---

## 5. Key Technologies

| Technology | Purpose |
|---|---|
| [Next.js 16.1+](https://nextjs.org/) | Framework (App Router) |
| [React 19](https://react.dev/) | UI Library |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [Lucide React](https://lucide.dev/) | Icons |
| [shadcn/ui](https://ui.shadcn.com/) | Primitive components (Sheet, Button…) |
| [Google Fonts – Dancing Script](https://fonts.google.com/) | Signature-style font for founder name |

---

## 6. Design Notes

- **Color Palette**: Dark navy `#0d1b2a` as primary, electric blue `#0ea5e9` as accent, teal `#13526c` for CTAs.
- **Typography**: Serif headings for authority, sans-serif body for readability.
- **Responsive**: Mobile-first. The `LatestFromField` section converts to a horizontal snap-scroll carousel on small screens.
- **Animations**: Brands section uses a CSS `@keyframes scroll` marquee. Hover overlays on field photos reveal title, description, and platform icon.
- **Navbar**: Transparent on hero, switches to `bg-[#14293f]/90` with `backdrop-blur` on scroll.

---

## 7. Contact

For sourcing inquiries, reach out directly via WhatsApp:  
📱 [+86 199 2455 4911](https://wa.me/+8619924554911)

> *Direct Access. Unwavering Excellence.*
