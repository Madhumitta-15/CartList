### README.md

# Cart List

This is a simple web application that allows users to add and remove items from a cart list. The data is stored in Firebase Realtime Database, and the list updates in real-time.
## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
## Features

- Add items to the cart.
- Remove items from the cart.
- Real-time updates of the cart list using Firebase Realtime Database.
- Simple and intuitive user interface.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- Firebase account (for configuring your Firebase Realtime Database)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cart-list.git
    cd cart-list
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Update Firebase configuration:
    - Go to your Firebase project in the Firebase Console.
    - Navigate to Realtime Database and get the database URL.
    - Update the `firebaseConfig` object in `index.js` with your Firebase database URL.

### Usage

1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.


### File Breakdown

#### `index.js`
This file contains the main logic for the application, including initialization of Firebase, event listeners for adding and removing items, and real-time updates from Firebase.

#### `index.html`
This file contains the structure of the web page, including input fields and the cart list.


### Adding Items

Users can add new items to the cart by entering the item in the input field and clicking the "Add to Cart" button. The new item will be added to the Firebase Realtime Database and displayed in the cart list.

### Removing Items

Users can remove an item from the cart by clicking on the item in the list. The item will be removed from the Firebase Realtime Database and the cart list will update in real-time.
