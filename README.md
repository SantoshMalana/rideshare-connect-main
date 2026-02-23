# 🚗 RideShare Hub

A modern carpooling and ride-sharing platform that connects drivers and passengers heading in the same direction — split costs, reduce traffic, and lower carbon emissions.

---

## 🏗️ Project Structure

```
rideshare-connect/
├── frontend/                   # Next.js 15 App (App Router)
│   ├── src/
│   │   ├── app/                # Pages
│   │   │   ├── page.tsx        # Landing page
│   │   │   ├── layout.tsx      # Root layout + Navbar + Footer
│   │   │   ├── find-ride/      # Search & browse rides
│   │   │   ├── offer-ride/     # Post a new ride with map
│   │   │   ├── login/          # OTP-based login
│   │   │   ├── register/       # User registration
│   │   │   ├── profile/        # Ride history + chat
│   │   │   └── about/          # About & contact page
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── BookButton.tsx
│   │   │   ├── ChatWindow.tsx  # Real-time Pusher chat
│   │   │   ├── MapPicker.tsx   # Leaflet map picker
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── hooks/              # use-mobile.ts
│   │   └── lib/                # utils.ts (cn helper)
│   ├── public/
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                    # Shared server-side logic
│   └── src/
│       ├── actions/            # Next.js Server Actions
│       │   ├── auth.ts         # register, sendOtp, verifyOtp, logout
│       │   ├── ride.ts         # createRide, getRides, bookRide
│       │   └── chat.ts         # sendMessage, getChatHistory
│       ├── models/             # Mongoose models
│       │   ├── User.ts
│       │   ├── Ride.ts
│       │   └── Message.ts
│       └── lib/                # Server utilities
│           ├── mongodb.ts      # DB connection
│           ├── email.ts        # Nodemailer OTP sender
│           └── pusher.ts       # Pusher server client
│
├── .env                        # ⚠️ Not committed (see .env.example)
├── .env.example                # Copy this to .env and fill in values
├── .gitignore
├── package.json                # Root workspace config (npm workspaces)
└── README.md
```

---

## ✨ Features

- **Find a Ride** — Search rides by city, filter by date/price
- **Offer a Ride** — Post your journey with interactive map pin for pickup/drop
- **OTP Login** — Passwordless email authentication (no passwords stored)
- **User Profiles** — Ride history, earnings, reviews, per-role dashboards
- **Real-Time Chat** — In-app messaging via Pusher WebSockets
- **Ride Booking** — One-click booking with instant confirmation
- **Responsive UI** — Works on mobile and desktop

---

## 🛠️ Tech Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Framework   | Next.js 15 (App Router + Server Actions) |
| Language    | TypeScript                               |
| Styling     | Tailwind CSS v4 + Radix UI (shadcn/ui)   |
| Database    | MongoDB Atlas via Mongoose               |
| Auth        | Passwordless OTP (Nodemailer + Gmail)    |
| Real-time   | Pusher (WebSocket chat)                  |
| Maps        | Leaflet + React Leaflet                  |
| Animations  | Framer Motion                            |
| Package Mgr | npm Workspaces                           |

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/rideshare-connect.git
cd rideshare-connect
```

### 2. Install all dependencies

```bash
npm install
```

> Installs dependencies for both `frontend` and `backend` workspaces.

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```env
# MongoDB Atlas
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/rideshare

# Gmail (for OTP emails — use an App Password)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

# Pusher — optional, for real-time chat (get free account at pusher.com)
PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
PUSHER_CLUSTER=
NEXT_PUBLIC_PUSHER_KEY=
NEXT_PUBLIC_PUSHER_CLUSTER=
```

> **Gmail App Password**: Enable 2FA on your Google account, then go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) to generate one.

### 4. Run the dev server

```bash
npm run dev
```

App runs at → **http://localhost:3000**

---

## 🧪 Scripts

Run from the **root** directory:

| Command          | Description                    |
|------------------|-------------------------------|
| `npm run dev`    | Start frontend dev server     |
| `npm run build`  | Production build              |
| `npm run start`  | Start production server       |
| `npm run lint`   | Lint frontend code            |

---

## 🚀 Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Set **Root Directory** to `frontend`
4. Add all your environment variables in the Vercel dashboard
5. Click **Deploy**

---

## � Git Push Guide

```bash
git add .
git commit -m "feat: rideshare hub — frontend/backend monorepo"
git push origin main
```

> ✅ `.env` is in `.gitignore` — your secrets are safe and will **not** be pushed.
> ✅ `node_modules/` and `.next/` are also ignored automatically.

---

## 📄 License

[MIT](LICENSE)
