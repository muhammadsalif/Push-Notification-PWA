importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD-amq7hQupsJ5J71TbACIKoWm4HdPzFTo",
  authDomain: "pwaappreact.firebaseapp.com",
  databaseURL: "https://pwaappreact.firebaseio.com",
  projectId: "pwaappreact",
  storageBucket: "pwaappreact.appspot.com",
  messagingSenderId: "727625819844",
  appId: "1:727625819844:web:cf6699c4ca85757ad58b91",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
