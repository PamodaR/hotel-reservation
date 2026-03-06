 OceanView Hotel Reservation System

 Frontend - React 19, Vite, Tailwind CSS      
 Backend  - Spring Boot 3, Java 17, Maven     
 Database - MySQL 8                           

- Frontend runs on: http://localhost:5173
- Backend runs on: http://localhost:8080


 Prerequisites

Make sure you have these installed before starting:

- Java 17 
- Maven - included via the Maven wrapper in the project, no separate install needed
- Node.js 18+ and npm 
- MySQL 8 

 Step 1 - Database Setup

1. Open your MySQL

   bash
   mysql -u root -p
  

2. Create the database:

   sql
   CREATE DATABASE oceanview_db;
   EXIT;
  

3. Import the provided SQL file to set up the tables:

   bash
   mysql -u root -p oceanview_db < oceanview_db.sql
   

   The SQL file is in the root of this project (oceanview_db.sql).


 Step 2 - Backend Setup

1. Open the backend configuration file:

 
   backend/hotel-reservation/src/main/resources/application.properties
 

2. Set your MySQL root password on this line:

  properties
  spring.datasource.password=
  

3. Start the backend from the backend/hotel-reservation/ directory:

   bash
   cd backend/hotel-reservation
   ./mvnw spring-boot:run
   
   On Windows, use mvnw.cmd instead of ./mvnw

4. Wait until you see a message like:

   Started HotelReservationApplication in seconds
   
   The API is now running at http://localhost:8080.


 Step 3 — Frontend Setup

1. Open a new terminal window and go to the frontend/ directory:

   bash
   cd frontend

2. Install dependencies:

   bash
   npm install

3. Start the development server:

   bash
   npm run dev

4. Open your browser and go to:

   http://localhost:5173


 Login Credentials:

 You can create a new admin account from the database or log in using these credentials:
 Email/Username: rajapaksha@gmail.com
 Password: 123456

