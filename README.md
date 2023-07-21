# Vodafone Angular Project Task

### The project is e-commerce website aims to make two interfaces one for admin and another for user.
## Table of Contents 
  - [Getting Started](Getting_Started)
     - [Prerequisites](Prerequisites)
     - [Installation](Installation)
  - [Usage](Usage)
  - [Features](Features)
  - [Contributing](Contributing)
  - [License](License)
  - [Acknowledgments](Acknowledgments)

### Getting_Started

To get the project up and running on your local machine, follow the instructions below.

### Prerequisites
    
Before you begin, ensure you have the following installed on your development machine:

  - Node.js - Download and install the latest version of Node.js, which includes `npm (Node Package Manager)`.
  - Angular CLI - Install the Angular Command Line Interface globally by running `npm install -g @angular/cli`.

### Installation

 - Clone this repository to your local machine using:

    ```
    git clone https://github.com/your-username/angular-project.git
    ```
 - Navigate to the project directory:
    ```
    cd angular-project
    ```
 - Install the project dependencies:
    ```
    npm install
    ```

### Usage

After completing the installation, you can run the project locally with the following command:
  
  ```
  ng serve
  ```

This will start a local development server, and you can access the application by opening your web browser and navigating to `http://localhost:4200/`.

### Features
- #### general features 
  - **Authentication** : Login page that sure you are admin or user and based on your role you will get user or admin interface
  - **LazyLoading** : the project consist of Three modules one for user , one for admin and the other one for app
  - **Validation** : each form has validation using reactive form validators (login, add product ,edit ptoduct) forms
  - **Authentication**: using guard in angular i check the user authorized to see routes or not
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

### Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

  - Fork the repository.
  - Create a new branch: git checkout -b my-new-feature
  - Make your changes and commit them: git commit -m "Add my feature"
  - Push your changes to the branch: git push origin my-new-feature
  - Submit a pull request.

Please ensure your pull request follows the project's coding conventions and includes relevant tests.

### License
[@vodafone](https://github.com/Vodafone)

### Acknowledgments
- angular frame work
- sass preprocessor
- json server
- fake store api

Contact
If you have any questions or feedback regarding this project, feel free to get in touch:

  Email: zenabm410@gmail.com
  linkedin: [@zienabmuhammad](https://www.linkedin.com/in/zienabmuhammad)
  GitHub: [@zenab12](https://github.com/zenab12)

Feel free to modify this README file to suit your project's specific needs. Happy coding! 🚀
