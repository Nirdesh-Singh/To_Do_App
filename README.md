# To-Do Mobile App

Welcome to the To-Do Mobile App! This app is designed to help you track your daily tasks efficiently and stay organized.

# Features

1. User Registration and Login: Easily create an account or log in to the app to access your to-do lists.
2. Create To-Do Items: Add tasks that you need to complete during the day.
3. View To-Do List: See a list of all your tasks in one place.
4. Delete To-Do Items: Mark tasks as completed and remove them from your list.
5. Data Persistence: All your to-do items are stored securely so you can access them anytime.

# Technologies Used

1. Frontend: Flutter
2. Backend: NodeJS and ExpressJs
3. Database: MongoDB

# Frontend
The frontend of the app is developed using the Flutter framework. With its expressive UI components, Flutter provides a smooth and engaging user experience. Users can easily register and log in to the app to start managing their tasks.

# Backend
The backend of the app is powered by NodeJS and ExpressJs. These technologies enable the creation of robust and efficient APIs that handle various functionalities, including user authentication, storing and retrieving to-do data, and managing user-specific information.

# API Endpoints

1. Login: POST request to /api/login for user authentication.
2. Register: POST request to /api/register for user registration.
3. Store To-Do Data: POST request to /api/storeToDoData to add new tasks.
4. Get User To-Do Data: GET request to /api/getUserToDoData to retrieve user-specific to-do items.
5. Delete To-Do: DELETE request to /api/deleteToDo to remove completed tasks.

# Database

The app utilizes MongoDB as its database system. Two distinct schemas are employed in the project:

1. User Schema: This schema manages user information such as usernames, email addresses, and encrypted passwords.
2. ToDo Schema: This schema handles the structure of to-do items, including task names, due dates, and completion status.

By utilizing MongoDB, the app ensures efficient data storage and retrieval, contributing to a seamless user experience.

# Getting Started
Follow these steps to get the app up and running on your local machine:

1. Clone this repository.
2. Set up the MongoDB database and ensure you have the necessary credentials.
3. Navigate to the backend folder and run npm install to install backend dependencies.
4. Start the backend server using npm start.
5. Navigate to the frontend folder and run flutter pub get to install frontend dependencies.
5. Launch the app on an emulator or physical device using flutter run.
6. Feel free to explore and customize the app according to your preferences!

# Contributing
If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

# License
This project is licensed under the MIT License.

Happy task tracking! If you have any questions or need assistance, feel free to contact us at nirdesh.singh1901@gmail.com.
