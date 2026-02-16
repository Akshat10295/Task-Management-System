# 🚀 Task Management System (Java Spring Boot + React)

A full‑stack Task Management application built using **Java Spring
Boot**, **React**, and **MySQL**. This project demonstrates RESTful API
design, layered backend architecture, and JPA/Hibernate ORM --- ideal
for a Java Full‑Stack internship portfolio.

------------------------------------------------------------------------

## 📌 Features

-   Create, update, delete, and view tasks
-   Filter tasks by status (PENDING, IN_PROGRESS, COMPLETED)
-   RESTful API architecture
-   Enum‑based status handling
-   Global exception handling
-   Clean Controller → Service → Repository structure

------------------------------------------------------------------------

## 🧱 Tech Stack

### Backend

-   Java
-   Spring Boot
-   Spring Data JPA (Hibernate)
-   MySQL

### Frontend

-   React (Functional Components + Hooks)
-   Fetch/Axios for API calls

------------------------------------------------------------------------

## 📂 Project Architecture

    Controller → Service → Repository → Entity → Database

### Key Concepts Used

-   Dependency Injection
-   REST API Design
-   JPA Entity Mapping
-   Enum Modeling
-   Centralized Exception Handling

------------------------------------------------------------------------

## 🔗 REST API Endpoints

  Method   Endpoint                     Description
  -------- ---------------------------- ------------------
  POST     /api/tasks                   Create a task
  GET      /api/tasks                   Get all tasks
  GET      /api/tasks/{id}              Get task by ID
  PUT      /api/tasks/{id}              Update task
  DELETE   /api/tasks/{id}              Delete task
  GET      /api/tasks/status/{status}   Filter by status

------------------------------------------------------------------------

## 🗄️ Task Entity Fields

-   id (Long, auto‑generated)
-   title (String)
-   description (String)
-   status (ENUM)
-   createdAt (LocalDateTime)

------------------------------------------------------------------------

## ⚙️ How Data Flows

React UI → REST Controller → Service Layer → JPA Repository → MySQL
Database

------------------------------------------------------------------------

## ▶️ Running the Project

### Backend

1.  Open project in IDE
2.  Configure MySQL in `application.properties`
3.  Run Spring Boot application

### Frontend

    npm install
    npm start

------------------------------------------------------------------------

## 🧠 Interview Talking Points

-   Layered architecture improves separation of concerns
-   Enum prevents invalid task status values
-   Global exception handler keeps controllers clean
-   JPA reduces boilerplate SQL code

------------------------------------------------------------------------

## 👨‍💻 Author

Akshat Srivastava\
Java Full‑Stack Developer (Internship Project)
