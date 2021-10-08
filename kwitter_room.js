const firebaseConfig = {
      apiKey: "AIzaSyD73iwsKBkVuzmi5z8-Jqz0JiPnwSyv81I",
      authDomain: "letschat-4b779.firebaseapp.com",
      projectId: "letschat-4b779",
      storageBucket: "letschat-4b779.appspot.com",
      messagingSenderId: "437710305188",
      appId: "1:437710305188:web:db7e722a7e09ec20b03331"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      username = localStorage.getItem("username")
      //End code
      });});}
getData();
