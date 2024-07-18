



import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDV-f9ZLFo4rhN1VYvsRvHjygduw7B6ysc",
    authDomain: "cartlist-ebca8.firebaseapp.com",
    databaseURL: "https://cartlist-ebca8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cartlist-ebca8",
    storageBucket: "cartlist-ebca8.appspot.com",
    messagingSenderId: "398863873610",
    appId: "1:398863873610:web:ec9e2407f2da0d54e9d8b3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const cartVal = ref(database, "CartList");

// Get elements from the DOM
let inputEl = document.getElementById("input-el");
let addBtn = document.getElementById("add-button");
const cartList = document.getElementById("cart-list");

// Add item to cart
addBtn.addEventListener("click", function() {
    let inputVal = inputEl.value;
    push(cartVal, inputVal);
    clearInput();
});

// Listen for changes in the cart list
onValue(cartVal, (snapshot) => {
    if (snapshot.exists()) {
        let itemArray = Object.entries(snapshot.val());
        clearCartList();
        for (let i = 0; i < itemArray.length; i++) {
            let currentItem = itemArray[i];
            displayList(currentItem);
        }
    } else {
        cartList.innerHTML = "No items in the Cart";
    }
});

// Clear the cart list in the DOM
function clearCartList() {
    cartList.innerHTML = "";
}

// Clear the input field
function clearInput() {
    inputEl.value = "";
}

// Display list item
function displayList(item) {
    let itemID = item[0];
    let itemValue = item[1];
    let newEl = document.createElement("li");
    newEl.textContent = itemValue;
    newEl.addEventListener("click", function() {
        let exactLocation = ref(database, `CartList/${itemID}`);
        remove(exactLocation);
    });
    cartList.append(newEl);
}

