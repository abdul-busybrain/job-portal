# Job Portal

## 📌 Overview

The **Job Portal** is a modern web application designed to streamline the job application process. It features a **multi-step form** for applicants, ensuring a smooth and intuitive experience. Built using **React (Vite), TypeScript, Tailwind CSS, ShadCN, and Context API**, the platform allows users to enter and review their information before submission.

## 🎯 Features

- **Multi-step job application form** (with state persistence using Context API)
- **Modern UI design** using Tailwind CSS and ShadCN components
- **Form validation** to ensure accurate user inputs
- **State management** using React Context API for smooth navigation
- **Interactive alerts** for form submission feedback

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS, ShadCN
- **State Management:** Context API
- **Icons & UI:** Lucide-react, ShadCN components

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Vite](https://vitejs.dev/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### 2️⃣ Installation

```sh
# Clone the repository
git clone https://github.com/your-username/job-portal.git
cd job-portal

# Install dependencies
yarn install  # or npm install
```

### 3️⃣ Running the App

```sh
# Start the development server
yarn dev  # or npm run dev
```

Then, open **http://localhost:5173/** in your browser.

## 📂 Project Structure

```
job-portal/
│── src/
│   ├── components/       # Reusable UI components (Buttons, Alerts, etc.)
│   ├── context/          # Context API for form state management
│   ├── pages/            # Application pages (Steps, Review, etc.)
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│── public/               # Static assets
│── package.json          # Project dependencies
│── README.md             # Documentation
```

## ✨ How It Works

### **Form State Management**

- Uses **React Context API** to store form data and share it across multiple steps.
- Data is maintained across navigation without prop drilling.

### **Steps in the Application**

1. **Personal Information** (Name, Email)
2. **Job Preferences** (Job Title, Experience Level)
3. **Upload Resume**
4. **Review & Submit** (Final review before submission)

### **Alerts & Feedback**

- When a user submits the application, an **interactive alert** confirms the submission.

## 🛠️ Future Enhancements

- ✅ Integration with a **backend API** for job listings & applications
- ✅ **Authentication** (Login & Signup)
- ✅ **Admin Dashboard** for recruiters to review applications

## 📜 License

This project is **open-source** under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions! If you’d like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push the branch (`git push origin feature-name`)
5. Open a Pull Request

## 👥 Author

**Auwal Abdullahi Haruna** – [LinkedIn](https://linkedin.com/in/yourprofile) | [Twitter](https://twitter.com/yourhandle)

---

🌟 _If you found this project useful, give it a star! ⭐_
