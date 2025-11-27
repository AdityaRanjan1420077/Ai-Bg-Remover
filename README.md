<img width="1888" height="921" alt="image" src="https://github.com/user-attachments/assets/ae0852ce-c3a9-4814-bee9-c978e0e59b4f" />

# 🖼️ RemoveBG – AI Background Remover

Full-Stack Project using React + Vite (Frontend) and Spring Boot (Backend)

This project provides an end-to-end background removal web app with authentication using Clerk, payments via Razorpay, and credit-based usage.

## 🚀 Features
- 🎨 AI-powered background removal
- 🔐 Clerk authentication (Google/Email login)
- 💳 Razorpay payment gateway
- 🪙Credit-based system
- 📱 Responsive UI using Tailwind CSS
- 🛠️ Spring Boot REST API
- 🗄️ MySQL database integration
## 📁 Project Structure
/
├── frontend/
│ ├── src/
│ ├── package.json
│ ├── vite.config.js
│ └── index.html
│
└── backend/
├── src/main/java/com/aditya/removebg/
├── src/main/resources/application.properties
└── pom.xml

## 🎯 Tech Stack
### Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔐 Clerk Authentication
- 🔄 Axios
- 🛣️ React Router
- 🔥 React Hot Toast
- 🎯Lucide Icons

### Backend
- 🌱 Spring Boot 3
- 🛡️ Spring Security
- 🗄️ MySQL
- 🧩 Spring Data JPA
- 💳 Razorpay SDK
- 🔑 JWT Validation
- 🖼️ Multipart image processing

## 🔌 API Endpoints
🔹 User
|    Method    |   Endpoint       |   Description               |
|--------------|------------------|-----------------------------|
| GET          | /api/user/me     | Get logged-in user          |
| POST         | /api/user/create | Create user (auto on login) |

🔹 Payment
|    Method    |   Endpoint          |   Description               |
|--------------|---------------------|-----------------------------|
| POST         | /api/payment/order  | Create Razorpay order       |
| POST         | /api/payment/verify | Verify payment signature    |

🔹 Background Removal
|    Method    |   Endpoint              |   Description                                |
|--------------|-------------------------|----------------------------------------------|
| POST         | /api/remove-background  | Remove image background (1 credit used)      |



## 🧪 Background Removal Logic (Backend)
- Accepts a MultipartFile
- Processes with AI model / external API (your service)
- Returns Base64 string
- Deducts 1 credit from user

## 💼 Payment Flow 
1. User selects credit plan
2. Frontend calls POST /payment/order
3. Razorpay order is created
4. Razorpay checkout popup opens
5. On success, Razorpay returns:
   - payment_id
   - order_id
   - signature
6. Frontend sends these to backend
7. Backend verifies signature
8. Credits added to user

## 🔐 Login Page
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/d25ca7e5-0e68-46ad-9efb-f707c13d66a1" />

## 🆕 Signup Page
<img width="1917" height="934" alt="image" src="https://github.com/user-attachments/assets/b5124b3c-93a2-4caa-aa4c-c90d28c674f9" />





If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
