
### The project is e-commerce 🛍️🛒 website aims to make two interfaces one for admin and another for user.
## Table of Contents 📑
  - [Getting Started](#start)
     - [Prerequisites](#prerequisites)
     - [installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [final screen of projects](#final_screen_of_projects)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Contact](#contact)
 

<h3 id="start">Getting_Gtarted 🔑</h3>
To get the project up and running on your local machine, follow the instructions below.

<h3 id="prerequisites">Prerequisites 🔱</h3> 
Before you begin, ensure you have the following installed on your development machine:

  - Node.js - Download and install the latest version of Node.js, which includes `npm (Node Package Manager)`.
  - Angular CLI - Install the Angular Command Line Interface globally by running `npm install -g @angular/cli`.

<h3 id="installation">installation 🌐</h3>
 
 Clone this repository to your local machine using:
    ```
    git clone https://github.com/zenab12/vodafone_task.git
    ```
Navigate to the project directory:
    ```
    cd solution
    ```
    
Install the project dependencies:
    ```
    npm install
    ```

<h3 id="usage">Usage 🚀</h3>
  
  After completing the installation, you can run the project locally with the following command:
  
  ```
  ng serve
  ```
   - This will start a local development server, and you can access the application by opening your web browser and navigating to `http://localhost:4200/`.
  Run JSON server from here
  ```
    npx json-server ./src/app/server/db.json
  ```
  - This will start a local development server, and you can access the application by opening your web browser and navigating to `http://localhost:3000/`.

  To get the user view login with : 
  
   - username:user 
   - password:user 
    
  To get the admin view login with : 
  
  - username:admin 
  - password:admin 

<h3 id="features"> Features ✌️❤️</h3>

- #### general features 
  - **Authentication** : Login page that sure you are admin or user and based on your role you will get user or admin interface
  - **LazyLoading** : the project consist of Three modules one for user , one for admin and the other one for app
  - **Validation** : each form has validation using reactive form validators (login, add product ,edit ptoduct) forms
  - **Authorization**: using guard in angular i check the user authorized to see routes or not
  - **services and observables**: using angular httpclient module I make requests to FakeAPISTore
  - **JSON Server**: using json server with fake store api to make crud operations in new products
  - **forms**: using reactive form as it has super power in handling form and validation of it
  - **ErrorHandling** : using error handler in angular , i implement general error handler class
  - **impresive UI**: using dribble and freepik to make inspiration for ui

- ### admin features
   - dashboard page : admin can see overview about products 
   - **crud** operations as admin can edit , remove oand add product 
   - pagination for product table (**bonus feature**)
 
- ### user features
   - Home page : after login user see home page with details about us 
   - products page :  user can see products to page with interacive card
   - filteration : user can filter products based on category
   - product details page : more details about product

- ### final_screen_of_projects
  - login page
    
    <img width="700" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/09fce079-f969-4230-9828-3d88bb409f6b">

  - User view

    <img width="700" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/405bf6c7-5173-4a91-8fbd-1b5725a8db8c">
    <img width="700" alt="Screenshot 2023-07-22 132922" src="https://github.com/zenab12/vodafone_task/assets/78083890/3298a373-b9f7-4104-a5d3-4b441c9cd063">
    <img width="700" alt="Screenshot 2023-07-22 132922" src="https://github.com/zenab12/vodafone_task/assets/78083890/f6e12a9d-32c9-4e2a-9ae3-d7311c7f2563">
    <img width="700" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/7ef07569-c4be-4c57-b89c-7863788159e6">

  - Admin view
    
      <img width="700" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/a8e9016c-99f2-4886-ac88-37a871df4518">
      <img width="700" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/6f2999b5-db38-406c-a466-bc0c1a9bc0f7">
      <img width="350" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/7356c2b4-7c2f-413f-875d-1d9a63bc4434">
      <img width="350" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/dad4c047-1695-4ef0-bf74-971ed3e873fc">
      <img width="350" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/360dd4a8-dd0e-467d-afd3-ef21cdba3733">
      <img width="350" alt="Screenshot 2023-07-21 132054" src="https://github.com/zenab12/vodafone_task/assets/78083890/b906975c-aaa9-4ab2-88cb-064d6dfc86f3">

<h3 ID="contributing">Contributing ✍️</h3>

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

  - Fork the repository.
  - Create a new branch: git checkout -b my-new-feature
  - Make your changes and commit them: git commit -m "Add my feature"
  - Push your changes to the branch: git push origin my-new-feature
  - Submit a pull request.

Please ensure your pull request follows the project's coding conventions and includes relevant tests.

<h3 id="license">License 💼</h3>

[@vodafone](https://github.com/Vodafone)

<h3 id="acknowledgments"> Acknowledgments 💫🌟</h3>
- angular frame work
- sass preprocessor
- json server
- fake store api

<h3 id="contact">Contact 📩</h3>
If you have any questions or feedback regarding this project, feel free to get in touch:

  - Email: zenabm410@gmail.com
  - linkedin: [@zienabmuhammad](https://www.linkedin.com/in/zienabmuhammad)
  - GitHub: [@zenab12](https://github.com/zenab12)

Feel free to modify this README file to suit your project's specific needs. Happy coding! 🚀
