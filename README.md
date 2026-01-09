JobConnect – MERN Job Portal Platform

JobConnect is a full-stack **Job Portal web application** built using the **MERN stack**. The platform connects students seeking job opportunities with recruiters looking to hire talent. It emphasizes clean UI, smooth user experience, and scalable architecture.

This project is a **customized and extended version of an open-source repository**. The original concept has been enhanced with UI improvements, feature extensions, and code refactoring to better reflect real-world job portal requirements.

---

## Features

###  General
- Secure authentication using **JWT**
- Role-based access control (Student & Recruiter)
- Responsive and modern UI
- Smooth navigation and state management

###  Student Features
- Browse and search job listings
- Apply to jobs with a single click
- Track applied jobs and application status

###  Recruiter Features
- Create and post job openings
- View applicants for each job
- Edit or delete job listings
- Manage all postings from a recruiter dashboard

---

## UI & Animations

- **Tailwind CSS** for responsive design
- **shadcn/ui** components for accessibility and consistency
- **Framer Motion** for smooth animations and transitions
- Mobile-first layout optimized for all screen sizes

---

##  Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- shadcn/ui  
- Framer Motion  
- React Router  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON Web Tokens (JWT)  

---

## Authentication Flow

- Users register and log in using email and password  
- JWT tokens are issued upon successful authentication  
- Role-based protected routes for students and recruiters  
- Authorization middleware for secure API access  

---

##  Getting Started

###Clone the Repository

git clone https://github.com/DHURSHITHA/job-portal.git


### Environment Variables

Create a `.env` file inside the `server/` directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8000
SECRET_KEY=your_jwt_secret

CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name

NODE_ENV=development
```


Install Dependencies
cd client
npm install

cd ../server
npm install


Run the Application
cd server
npm run dev

cd ../client
npm start


Application URLs

Frontend: http://localhost:5137

Backend: http://localhost:5000
