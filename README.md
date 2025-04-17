# Minimalist Payment Page

A compact checkout interface. The goal of the project is to reproduce the core look‑and‑feel of the provided Figma design, implement a basic data‑entry form with client‑side validation, and simulate a successful payment flow.

---

# Deployed version - [here](https://purplefade.github.io/payment-page-test/)

## ✨ Key Features

| Feature                    | Details                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| **Pixel‑perfect UI**       | Re‑creates the minimalist checkout design supplied in Figma.                                     |
| **Data‑entry form**        | Cardholder name, card number, expiration date and CVC fields.                                    |
| **Client‑side validation** | Inline checks for required fields, card‑number (Luhn), date format & future expiry, 3‑digit CVC. |
| **Payment simulation**     | On valid submission, displays a friendly *“Payment successful”* screen—no real gateway calls.    |
| **Error handling**         | Clear, accessible inline messages and disabled *Pay* button until the form is valid.             |

## 🛠️  Tech Stack

- **React 18** + **Vite**

- **TypeScript** for type‑safety

- **React‑Hook‑Form** + **@hookform/resolvers / zod** for ergonomic validation

- **ESLint + Prettier** for clean, consistent code

*(If you are reviewing the task, see ********`package.json`******** for the exact versions.)*

---

## 🚀  Getting Started

### Prerequisites

- **Node.js ≥ 18** (grab it from [https://nodejs.org](https://nodejs.org))
- **npm** (ships with Node) or **pnpm / Yarn** if you prefer

### Installation & Development Server

```bash
# 1. Clone the repo
$ git clone https://github.com/purpleFade/payment-page-test.git
$ cd payment-page-test

# 2. Install dependencies
$ npm install  # or pnpm install / yarn

# 3. Start Vite dev server
$ npm run dev

# The page will open at http://localhost:5173
```

### Production Build

```bash
# Generate an optimized build in ./dist
$ npm run build

# (Optional) Preview the production build locally
$ npm run preview
```

---

## 📁  Project Structure (excerpt)

```text
payment-page-test/
├─ public/              # Static assets
├─ src/
│  ├─ components/       # Reusable UI pieces (Input, Button, etc.)
│  ├─ pages/            # Page‑level components
│  ├─ styles/           # Tailwind base / components / utilities
│  ├─ App.tsx
│  └─ main.tsx
├─ .eslintrc.cjs        # Linting rules
├─ vite.config.ts       # Vite configuration
└─ package.json
```

---

## 🤝  Contributing

This repository is primarily for demonstration and assessment purposes, but feel free to open pull requests for improvements or bug fixes.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜  License

Released under the **MIT License**—see the [`LICENSE`](LICENSE) file for details.

---
