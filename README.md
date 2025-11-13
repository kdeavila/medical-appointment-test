# 🏥 Medical IPS - Appointment Booking System

**A modern web application for managing medical appointments at IPS healthcare facilities**

Medical IPS is a modern single-page application (SPA) built with React and TypeScript that provides a seamless appointment booking experience for patients. The system enables secure authentication, real-time appointment management, and intuitive user interaction.

## ✨ Key Features

- **🔐 Secure Authentication**: Document-based login with date of birth verification
- **👥 Specialty Selection**: Browse and select from multiple medical specialties
- **📅 Smart Appointment Viewing**: Appointments grouped by date for easy navigation
- **⚡ Real-time Operations**: Book and cancel appointments instantly with confirmations
- **📊 Appointment History**: Access your complete schedule and booking history
- **🎯 Form Validation**: Robust validation using React Hook Form & Zod
- **🛡️ Protected Routes**: Route-based access control via React Router v6
- **🎨 Responsive Design**: Mobile-first UI with Tailwind CSS
- **📱 User Experience**: Loading states, error handling, and success confirmations

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19, TypeScript 5.7 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4, SWC for transpilation |
| **Routing** | React Router 7 |
| **State Management** | Zustand 5 |
| **Form & Validation** | React Hook Form 7, Zod 3 |
| **Mock API** | JSON Server 1.0.0-beta.3 |
| **Code Quality** | Biomejs 1.9.4 |
| **Fonts** | Plus Jakarta Sans (Variable) |

---

## 📋 Prerequisites

- **Node.js** v16+ (recommended v18 or higher)
- **pnpm** v8+ (or npm/yarn)
- Modern web browser with ES2020+ support

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/kdeavila/medical-appointment-test.git
cd medical-appointment-test
pnpm install
```

### 2. Start Services

Open two terminal windows:

**Terminal 1 - Backend (Mock API):**
```bash
pnpm run server
# JSON Server runs at http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
pnpm run dev
# Vite dev server runs at http://localhost:5173
```

3. Open your browser and navigate to `http://localhost:5173`

### Test Credentials

Use any of these credentials to log in:

| Document | Birth Date | Name |
|----------|-----------|------|
| 1043667234 | 2005-12-03 | Keyner de Ávila |
| 76877623 | 2003-03-08 | John Doe |
| 1234567890 | 1995-07-21 | Sofía Martínez |
| 99887766 | 1988-11-10 | Carlos Pineda |

---

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app component with route definitions
├── main.tsx                   # React entry point
├── global.css                 # Global styles
├── vite-env.d.ts             # Vite environment types
│
├── components/               # Reusable UI components
│   ├── AppointmentCard.tsx   # Single appointment card display
│   ├── AppointmentList.tsx   # List container for appointments
│   ├── Navbar.tsx            # Navigation header
│   ├── ScheduleNow.tsx       # Appointment booking interface
│   ├── Service.tsx           # Specialty/service selector
│   ├── ShowAppointments.tsx  # Appointments view page
│   └── icons/                # Icon components
│       ├── BuildingIcon.tsx
│       ├── CheckIcon.tsx
│       ├── ClipboardIcon.tsx
│       ├── ClipIcon.tsx
│       ├── HomeIcon.tsx
│       ├── LogoutIcon.tsx
│       └── UserIcon.tsx
│
├── hooks/                     # Custom React hooks
│   ├── useAppointmentData.ts # Fetch and manage appointment data
│   └── useUpdateAppointment.ts # Handle appointment mutations
│
├── routes/                    # Page components
│   ├── Home.tsx              # Dashboard after login
│   ├── LandingPage.tsx       # Welcome/intro page
│   ├── Login.tsx             # Authentication page
│   ├── NotFound.tsx          # 404 page
│   └── confirmation/
│       └── appointmentId.tsx # Booking confirmation page
│
├── libs/                      # Route protection logic
│   ├── PrivateRoutes.tsx     # Authenticated user routes
│   └── RestrictedRoutes.tsx  # Routes for non-authenticated users
│
├── store/                     # Zustand state management
│   ├── appointmentStore.ts   # Appointment state & actions
│   └── useAuth.ts            # Authentication state & actions
│
├── schema/                    # Zod validation schemas
│   └── loginSchema.ts        # Login form validation
│
├── types/                     # TypeScript type definitions
│   ├── index.ts              # Main type exports
│   └── font.d.ts             # Font type declarations
│
└── utils/                     # Utility functions
    ├── appointment.ts        # Appointment business logic
    └── format.ts             # Date/time formatting helpers

public/
├── index.html                # HTML entry point
└── [assets]                  # Static assets

Configuration Files
├── vite.config.ts            # Vite bundler configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.node.json        # Node/build tool TS config
├── biome.json                # Biomejs linter/formatter config
├── db.json                   # Mock database (JSON Server)
├── package.json              # Dependencies & scripts
└── pnpm-lock.yaml            # Locked dependency versions
```

---

## 📜 Available Scripts

```bash
# Development
pnpm run dev              # Start development server (http://localhost:5173)
pnpm run build            # Create production build
pnpm run preview          # Preview production build locally

# Backend & Services
pnpm run server           # Start JSON Server (http://localhost:3000)

# Code Quality
pnpm run check            # Check and format code with Biomejs
```

---

## 👤 User Workflow

1. **Login** (`/login`)
   - Enter document number (ID) and birth date
   - Form validation with Zod ensures data integrity

2. **Select Specialty** (`/home`)
   - Browse available medical specialties
   - View list of doctors in each specialty

3. **Schedule Appointment** (`/schedule`)
   - View available appointment slots
   - Appointments displayed grouped by date
   - Select your preferred time

4. **Confirmation** (`/appointment/:id`)
   - Receive appointment confirmation
   - Display booking details
   - Option to return to booking or view all appointments

5. **View Appointments** (`/appointments`)
   - See all scheduled appointments
   - Cancel appointments if needed
   - Real-time updates

---

## 🔐 Authentication & Security

- **Login Mechanism**: Document number + date of birth verification
- **Protected Routes**: Private routes require valid authentication token
- **Restricted Routes**: Public routes redirect authenticated users to home
- **Local State Management**: User session stored in Zustand store with localStorage persistence
- **Form Validation**: All inputs validated with Zod schemas before submission

---

## 🌐 API Endpoints (Mock Server)

The JSON Server provides the following endpoints:

```
GET    /patients              # List all patients
GET    /patients/:id          # Get specific patient
GET    /appointments          # List all appointments
GET    /appointments/:id      # Get specific appointment
POST   /appointments          # Create new appointment
PATCH  /appointments/:id      # Update appointment
DELETE /appointments/:id      # Cancel appointment
```

See `db.json` for the database schema and sample data.

---

## 🧠 State Management

The application uses **Zustand** for lightweight, scalable state management:

### `useAuth` Store
```typescript
- user: Current authenticated user data
- login(documentNumber, birthDate): Authenticate user
- logout(): Clear user session
- isAuthenticated: Check if user is logged in
```

### `appointmentStore`
```typescript
- appointments: Array of all appointments
- fetchAppointments(): Load from API
- createAppointment(data): Book new appointment
- cancelAppointment(id): Remove appointment
- updateAppointment(id, data): Modify existing appointment
```

---

## 🎨 Styling Architecture

- **Tailwind CSS v4**: Utility-first CSS framework
- **Responsive**: Mobile-first design approach
- **Custom Configuration**: Tailwind config for brand consistency
- **Font**: Plus Jakarta Sans variable font for modern typography

---

## 🤝 Contributing

This is a personal project for learning and portfolio purposes. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact

- **Author**: Keyner de Ávila
- [LinkedIn](https://github.com/kdeavila)

**Made with ❤️ by Keyner de Ávila**