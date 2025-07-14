# Personal Portfolio Site

This is a personal website built to showcase my work and abilities as a full stack software developer. It includes a portfolio of projects, a build log, and general information about me.

## 🧰 Tech Stack

- **Frontend:** React (with Vite), Material UI (MUI)
- **Backend:** Spring Boot (Java)
- **Database:** MongoDB
- **Deployment:** AWS Elastic Beanstalk (Backend), Static hosting for frontend

## 🌟 Features

- Responsive UI with light/dark mode toggle
- Project cards with descriptions, GitHub links, and interactive features
- Tax estimation tool powered by a real API backend
- Build log page with implementation details and screenshots

## 🔐 Repository Protections

This repository enforces branch protection rules for the `main` branch:

- Direct commits to `main` are disallowed
- All changes must go through a pull request
- Pull requests must pass all GitHub Actions checks (including `npm test`)
- Reviews from designated CODEOWNERS are required before merging

## ⚙️ CI/CD

GitHub Actions is used to automatically:

- Build and test pull requests
- Enforce code quality before changes are merged
- Ensure stability and prevent regressions via continuous integration
