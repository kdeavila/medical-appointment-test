# Medical IPS

**Doctor appointment booking system for IPS patients**

Medical IPS is a single-page web application (SPA) built with React and TypeScript that enables patients to:

- Authenticate using their ID number and date of birth
- Select a medical specialty (General Medicine, Dentistry, Pediatrics, Dermatology, etc.)
- View and group available appointments by date
- Book and cancel appointments in real time
- Access a history of their scheduled appointments
- Receive a confirmation screen after booking

---

## 📋 Features

- **Secure Login**: Form validation via React Hook Form & Zod
- **Protected Routes**: Using React Router v6 for authenticated access
- **Global State Management**: Zustand to handle authentication and appointment data
- **Mock API**: JSON Server (or a combination of JSON files + localStorage) simulates backend endpoints
- **Responsive Design**: Tailwind CSS for utility-first styling
- **User Feedback**: Loading indicators, error messages, and booking confirmations

---

## 🚀 Technology Stack

- **React** (v18+) with **TypeScript**
- **Vite** for fast development and bundling
- **React Router** for client-side routing
- **React Hook Form** + **Zod** for declarative form validation
- **Zustand** for lightweight global state
- **JSON Server** (or JSON + localStorage) as a mock API
- **Tailwind CSS** for styling
- **Figma** for prototype and mockup design

---

## 📦 Installation

> Requires Node.js v16+ and npm or pnpm

1. Clone the repository:
   ```bash
   git clone https://github.com/kdeavila/medical-appointment-test
   cd medical-appointment-test
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or npm install
   ```
3. Start the mock API (JSON Server):
   ```bash
   pnpm run json-server
   # API available at http://localhost:3000
   ```
4. Launch the development server:
   ```bash
   pnpm run dev
   # App available at http://localhost:5173
   ```

---

## 📂 Project Structure

```
src/
├─ components/         # Reusable UI components (cards, lists, icons)
├─ hooks/              # Custom hooks (useFetch, useUpdateAppointment)
├─ routes/             # Pages: Login, ScheduleNow, ShowAppointments, Confirmation
├─ store/              # Zustand stores: auth, appointments
├─ utils/              # Helper functions: date formatting, grouping logic
├─ App.tsx             # Route definitions and layout
└─ main.tsx            # Entry point
public/
├─ index.html         # Static HTML template
db.json               # Mock data for JSON Server
vite.config.ts        # Vite configuration
```

---

## ⚙️ Available Scripts

```bash
pnpm run dev           # Start frontend at http://localhost:5173
pnpm run build         # Create production build
pnpm run preview       # Preview production build locally
pnpm run json-server   # Launch JSON Server at http://localhost:3000
```

---

## 📖 Usage

1. Navigate to `/login` and enter your ID number and birth date.
2. Choose a specialty and view available appointments.
3. Click **Book** to reserve an appointment. You will be redirected to `/confirmation/:id`.
4. Visit the **My Appointments** section to see upcoming and past bookings.
5. Click **Cancel** on any booked appointment to release it back to available status.

---
