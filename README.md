# Recipe Blog

A **full-stack recipe-sharing platform** where users can **upload, edit, delete, and explore** recipes while also adding favorites for easy access.

## 🚀 Features  
- 🌍 **Explore Recipes** – Browse a collection of delicious recipes.  
- ✍️ **Add & Manage Recipes** – Users can create, update, and delete their own recipes.  
- ❤️ **Favorite Recipes** – Save favorite recipes for quick access.  
- 🔐 **User Authentication** – Secure login/signup using JWT authentication.
- 📸 **Image Upload** – Multer integration for recipe images.


## 🛠️ Technologies Used  

- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Tokens (JWT), bcrypt  
- **File Uploads:** Multer  
- **Version Control:** Git, GitHub  


## Installation & Setup  
### 1. Clone the Repository  
```sh
git clone https://github.com/Shweta-Prasad/Recipe-Blog.git
cd Recipe-Blog
```

### 2. Install Dependencies  
#### Backend  
```sh
cd backend
npm install
```
#### Frontend  
```sh
cd frontend
npm install
```

### 3. Set Up Environment Variables  
Create a **.env** file in the backend directory and add:  
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Application  
#### Start Backend Server  
```sh
cd backend
npm start
```
#### Start Frontend Server  
```sh
cd ../frontend/recipe-blog
npm start
```

## 📌 API Endpoints  
| Method  | Endpoint        | Description            |
|---------|----------------|------------------------|
| `POST`  | `/user/signup` | Register a new user   |
| `POST`  | `/user/login`  | Authenticate user     |
| `GET`   | `/recipe`      | Get all recipes       |
| `POST`  | `/recipe`      | Add a new recipe      |
| `GET`   | `/recipe/:id`  | Get a specific recipe |
| `PUT`   | `/recipe/:id`  | Update recipe         |
| `DELETE` | `/recipe/:id` | Delete recipe         |


## 📸 Screenshots  

![Screenshot 2025-03-05 211605](https://github.com/user-attachments/assets/f754b57d-3daa-4a6f-bf4a-26ae15072385)

![Screenshot 2025-03-05 211622](https://github.com/user-attachments/assets/018041fa-e1dc-49b3-9eac-380a0f2139f1)

![Screenshot 2025-03-05 211644](https://github.com/user-attachments/assets/1c243707-b46d-43f8-9b4a-0ff89ed3d9b4)

![Screenshot 2025-03-02 212446](https://github.com/user-attachments/assets/03becfd5-0969-4afd-902d-991b8ea09aa2)

![Screenshot 2025-03-05 211719](https://github.com/user-attachments/assets/57bcea11-bd2c-4a69-86b4-1ae7a0de2b12)

![Screenshot 2025-03-02 212521](https://github.com/user-attachments/assets/f2af0eea-1076-4d51-8825-1397ff0b809f)


## Contributors 
Shweta Prasad - GitHub
