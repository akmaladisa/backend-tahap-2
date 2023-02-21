# BASIC GUIDE

### 1. Clone
```
git clone https://github.com/akmaladisa/backend-tahap-2.git
```

### 2. Install packages
```
cd backend-tahap-2
```
```
npm install
```

### 3. Database set up
```
DB name: backend-tahap-2
DBMS: MySQL

more info in : ./config/config.json
```

### 4. Sequelize CLI set up
```
npm install sequelize-cli
```

### 5. DB Migrate
```
sequelize db:migrate 
```

### 6. Start server
```
npm run dev
```

### 7. URL
```
http://localhost:8888/

more info in : ./bin/www
```

# API ENDPOINT

### 1. Admin Authentication
```
POST http://localhost:8888/auth/register (Create new admin account)
```

```
POST http://localhost:8888/auth/login (Login with JWT Token, token expire in 2 hours)
```

```
POST http://localhost:8888/logout (Delete JWT Token)
```

### 2. Course Category CRUD
```
POST http://localhost:8888/course-category (Create new course category)
```

```
GET http://localhost:8888/course-category (Get all course categories)
```

```
GET http://localhost:8888/course-category/:categoryId (Get course category by ID)
```

```
DELETE http://localhost:8888/course-category/:categoryId (Delete course category by ID)
```

```
PUT http://localhost:8888/course-category/:categoryId (Update course category by ID)
```

### 2. Course CRUD
```
POST http://localhost:8888/course (Create new course)
```

```
GET http://localhost:8888/course (Get all courses)
```

```
GET http://localhost:8888/course/:courseId (Get course by ID)
```

```
DELETE http://localhost:8888/course/:courseId (Delete course by ID)
```

```
PUT http://localhost:8888/course/:courseId (Update course by ID)
```

### 3. User CRUD
```
POST http://localhost:8888/users (Create new user)
```

```
GET http://localhost:8888/users (Get all users)
```

```
GET http://localhost:8888/users/:userId (Get user by ID)
```

```
DELETE http://localhost:8888/users/:userId (Delete user by ID)
```

```
PUT http://localhost:8888/users/:userId (Update user by ID)
```

### 4. User Course CRUD
```
POST http://localhost:8888/user-course (Create new user course)
```

```
GET http://localhost:8888/user-course (Get all user courses)
```

```
GET http://localhost:8888/user-course/:userCourseId (Get user course by ID)
```

```
DELETE http://localhost:8888/user-course/:userCourseId (Delete user course by ID)
```

```
PUT http://localhost:8888/user-course/:userCourseId (Update user course by ID)
```