import firebase from "firebase";

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
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("Token => ");
            console.log(currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
