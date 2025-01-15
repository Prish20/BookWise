# BookWise: A University Library Management System

BookWise is a Next.js-based web application designed to streamline the management of book borrowing within a university library. This system provides an intuitive interface for users to browse, search, and borrow books while ensuring that administrators have the tools they need to manage the library's inventory effectively.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Tech Stack](#tech-stack)
6. [Scripts](#scripts)
7. [Configuration](#configuration)
8. [Contributing](#contributing)
9. [License](#license)

---

## Introduction

Built with Next.js, TypeScript, and PostgreSQL, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.

---

## Features

### User Features

- **Search and Filter:** Browse books by title, author, genre, and rating.
- **Book Details:** View detailed information about each book, including summaries, ratings, and availability.
- **Borrowing System:** Check out books and track availability in real time.

### Administrator Features

- **Inventory Management:** Add, update, and delete book records.
- **Usage Reports:** Generate reports on borrowed and available books.
- **Role Management:** Change user roles to invite more admins, with email notifications sent upon role updates.

### General Features

- **Responsive Design:** Optimized for desktop and mobile devices.
- **Customizable Themes:** Tailwind CSS-based themes for flexibility.
- **Optimized Fonts:** Integrated with `next/font` for efficient font loading.
- **Onboarding Workflows:** Automated welcome emails when users sign up, with follow-ups based on inactivity or activity dates.
- **Borrow Book Reminder:** Customized email notifications sent before, on, and after the due date, reminding users to return books or avoid charges.
- **Borrow Book Receipt:** Automatically generates a customized PDF receipt when a book is successfully borrowed.
- **Advanced Functionalities:** Caching, rate-limiting, DDoS protection, and custom notifications.
- **Database Management:** Postgres with Neon for scalable and collaborative database handling.
- **Real-time Media Processing:** ImageKit for image and video optimization and transformations.
- **Efficient Caching:** Upstash Redis for caching, workflows, and triggers.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/bookwise.git
    cd bookwise
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

```
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .prettierrc
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── fonts/
│       ├── BebasNeue-Regular.ttf
│       ├── IBMPlexSans-Bold.ttf
│       ├── IBMPlexSans-Medium.ttf
│       ├── IBMPlexSans-Regular.ttf
│       └── IBMPlexSans-SemiBold.ttf
├── components/
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
└── public/
    ├── books.json
    ├── icons/
    │   └── admin/
    └── images/
        └── pattern.webp
```

### Key Files and Directories

- **`app/`**: Contains the main application structure, including global styles and layouts.
- **`components/`**: Reusable UI components.
- **`lib/`**: Utility functions.
- **`public/`**: Public assets like images, icons, and JSON data.
- **`tailwind.config.ts`**: Custom Tailwind CSS configuration.
- **`eslint.config.mjs`**: ESLint configuration for code quality.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Database:** PostgreSQL with Neon
- **Caching:** Upstash Redis
- **Media Processing:** ImageKit
- **Authentication:** NextAuth
- **Email Handling:** Resend
- **ORM:** Drizzle ORM

---

## Scripts

The following scripts are defined in the `package.json`:

- **`dev`**: Starts the development server with Turbopack.
- **`build`**: Builds the application for production.
- **`start`**: Starts the production server.
- **`lint`**: Runs ESLint for code linting.

Run scripts using:

```bash
npm run <script>
# or
yarn <script>
```

---

## Configuration

### Tailwind CSS

- **Config File:** `tailwind.config.ts`
- Customizations:
    - Themes and colors.
    - Custom screen sizes.
    - Extended utility classes.

### ESLint

- **Config File:** `eslint.config.mjs`
- Key Plugins:
    - `eslint-plugin-tailwindcss`
    - `eslint-config-prettier`

---

## Contributing

We welcome contributions to enhance BookWise. To contribute:

1. Fork the repository.
2. Create a feature branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
    ```
4. Push to your branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

---

## License

BookWise is licensed under the [MIT License](https://opensource.org/licenses/MIT).
