# 🚗 RideShare Hub

A modern carpooling and ride-sharing platform built with **Next.js 16**, **MongoDB**, and **Pusher** — connecting drivers and passengers for sustainable, affordable travel across India.

**Live Demo:** [v0-carpooling-and-ride-sharing-plat.vercel.app](https://v0-carpooling-and-ride-sharing-plat.vercel.app)

---

## ✨ Features

- **🔐 OTP Authentication** — Passwordless login via email one-time passwords
- **🗺️ Find a Ride** — Search, filter, and sort available rides by date or price
- **🚘 Offer a Ride** — Post rides with interactive map pin for pickup/dropoff
- **💬 Real-time Chat** — Pusher-powered messaging between drivers and passengers
- **👤 Profile Dashboard** — Ride history, earnings, and reviews for drivers and passengers
- **💺 Smart Booking** — Seat availability tracked and decremented on each booking

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Shadcn UI |
| Animations | Framer Motion |
| Database | MongoDB Atlas + Mongoose |
| Real-time | Pusher |
| Email | Nodemailer (Gmail) / Resend |
| Maps | React Leaflet |
| Deployment | Vercel |

---

## 📁 Project Structure

```
rideshare-connect/
├── frontend/               # Next.js application
│   └── src/
│       ├── app/            # Pages (home, find-ride, offer-ride, login, register, profile, about)
│       ├── components/     # Navbar, ChatWindow, BookButton, MapPicker
│       └── lib/            # Utilities
└── backend/                # Server actions (imported directly into Next.js)
    └── src/
        ├── actions/        # auth.ts, ride.ts, chat.ts
        ├── models/         # User, Ride, Message (Mongoose schemas)
        └── lib/            # mongodb.ts, email.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 10+
- MongoDB Atlas account
- Gmail account with [App Password](https://myaccount.google.com/apppasswords) enabled

### Installation

```bash
git clone https://github.com/SantoshMalana/rideshare-connect-main.git
cd rideshare-connect-main
npm install --workspace=@rideshare/frontend
```

### Environment Variables

Create a `.env` file in the project root:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/rideshare

# Email (Gmail App Password — enable 2FA first)
EMAIL_USER=your@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Optional: Resend (more reliable on cloud deployments)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# Pusher (real-time chat)
PUSHER_APP_ID=your_app_id
PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
PUSHER_CLUSTER=ap2

NEXT_PUBLIC_PUSHER_KEY=your_key
NEXT_PUBLIC_PUSHER_CLUSTER=ap2
```

### Run Locally

```bash
npm run dev --workspace=@rideshare/frontend
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add all environment variables from above
5. **MongoDB Atlas** → Network Access → Allow `0.0.0.0/0`
6. Deploy!

> **Note:** Gmail SMTP may be blocked by Vercel IPs. Use [Resend](https://resend.com) (free tier) for reliable email delivery in production. As a fallback, the OTP is displayed on-screen when email delivery fails.

---

## 📸 Pages

| Page | Description |
|------|-------------|
| `/` | Hero, animated stats, how-it-works, testimonials |
| `/find-ride` | Search & sort rides with dynamic filters |
| `/offer-ride` | Multi-step form with map pin selection |
| `/login` | OTP-based passwordless authentication |
| `/register` | Sign up as driver or passenger |
| `/profile` | Dashboard with ride history and chat |
| `/about` | Mission, team, and contact form |

---

## 📄 License

MIT — free to use and modify.
