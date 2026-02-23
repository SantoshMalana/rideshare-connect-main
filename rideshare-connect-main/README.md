# 🚗 RideShare Hub

A modern carpooling and ride-sharing web application that connects drivers and passengers heading in the same direction, allowing them to split costs, reduce traffic, and lower carbon emissions.

---

## ✨ Features

- **Find a Ride** – Search active rides by destination with real-time results from MongoDB
- **Offer a Ride** – Post your journey with interactive map selection for pickup/drop locations
- **OTP-Based Authentication** – Secure passwordless login via email one-time passwords
- **User Profiles** – View ride history, earnings, and passenger reviews
- **Real-Time Chat** – In-app messaging between drivers and passengers powered by Pusher
- **Ride Booking** – One-click booking with instant confirmation
- **Responsive Design** – Fully responsive UI built with Tailwind CSS and Radix UI

---

## 🏗️ Project Structure

```
rideshare-connect/
├── frontend/               # Next.js 15 App (App Router)
│   ├── src/
│   │   ├── app/            # Pages (find-ride, offer-ride, login, register, profile, about)
│   │   ├── components/     # UI Components (Navbar, ChatWindow, BookButton, MapPicker)
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Frontend utilities (utils.ts)
│   ├── public/             # Static assets
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                # Shared backend logic (Server Actions + Models)
│   └── src/
│       ├── actions/        # Next.js Server Actions (auth.ts, ride.ts, chat.ts)
│       ├── models/         # Mongoose MongoDB models (User.ts, Ride.ts, Message.ts)
│       └── lib/            # Server-side utilities (mongodb.ts, email.ts, pusher.ts)
│
├── .env                    # Environment variables (do not commit!)
└── package.json            # Root workspace config (npm workspaces)
```

---

## 🛠️ Tech Stack

| Layer       | Technology                             |
|-------------|----------------------------------------|
| Framework   | Next.js 15 (App Router, Server Actions)|
| Language    | TypeScript                             |
| Styling     | Tailwind CSS v4 + Radix UI             |
| Database    | MongoDB (via Mongoose)                 |
| Auth        | Passwordless OTP (Nodemailer)          |
| Real-time   | Pusher (WebSocket chat)                |
| Maps        | Leaflet + React Leaflet                |
| Animations  | Framer Motion                          |
| Package Mgr | npm Workspaces                         |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Gmail account (for OTP email sending)
- Pusher account (for real-time chat, optional)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rideshare-connect.git
cd rideshare-connect
```

### 2. Install dependencies

```bash
npm install
```

> This installs dependencies for both `frontend` and `backend` workspaces using npm workspaces.

### 3. Set up environment variables

Create a `.env` file in the **root** of the project:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/rideshare

# Email (for OTP)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

# Pusher (optional, for real-time chat)
PUSHER_APP_ID=your_pusher_app_id
PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
PUSHER_CLUSTER=your_pusher_cluster

# Pusher (Frontend)
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
```

> **Gmail Setup**: To use Gmail for OTP, enable 2-Factor Authentication and generate an [App Password](https://support.google.com/accounts/answer/185833).

### 4. Run the development server

From the **root** directory:

```bash
npm run dev
```

This starts the Next.js frontend at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Available Scripts

From the root directory:

| Command             | Description                         |
|---------------------|-------------------------------------|
| `npm run dev`       | Start frontend dev server           |
| `npm run build`     | Build frontend for production       |
| `npm run start`     | Start production server             |
| `npm run lint`      | Lint frontend code                  |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Set the **Root Directory** to `frontend`
4. Add all environment variables in the Vercel dashboard
5. Deploy!

---

## 📝 Git Push Guide

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "feat: reorganize into frontend/backend workspaces and fix all errors"

# Push to your repository
git push origin main
```

> ⚠️ **Important**: Make sure your `.gitignore` includes `.env` to avoid committing secrets. The `.gitignore` already has it, but always double-check before pushing.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)
