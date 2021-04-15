function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyC9mk5F-DPtAKQJhIkIFzekZN0QA11LqPc",
    authDomain: "kwitter-project-6eb9a.firebaseapp.com",
    projectId: "kwitter-project-6eb9a",
    storageBucket: "kwitter-project-6eb9a.appspot.com",
    messagingSenderId: "750207796747",
    appId: "1:750207796747:web:ed11b2f0cb671fe700a90e",
    measurementId: "G-YDC1YMF3R6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();