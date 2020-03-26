import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD5ka9JQLIuAV-tzbHsURv8mOnq2Y28E_Y",
  authDomain: "react-market-775c5.firebaseapp.com",
  databaseURL: "https://react-market-775c5.firebaseio.com",
  projectId: "react-market-775c5",
  storageBucket: "react-market-775c5.appspot.com",
  messagingSenderId: "777037652519",
  appId: "1:777037652519:web:617b935aaef552eedee402"
};

class Firebase {
  constructor() {
    if (typeof Firebase.instance === "object") {
      return Firebase.instance;
    }
    Firebase.instance = this;
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  userRegistration = async (name, email, password) => {
    await this.auth.createUserWithEmailAndPassword(email, password);
    await this.db.doc(`asdas/${this.auth.currentUser.uid}`).set({
      name
    });
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  };

  // addInfo = (name, info) => {
  //   return this.db.doc(`asdas/${this.auth.currentUser.uid}`).set({
  //     [name]: info
  //   });
  // };

  addData = (name, info) => {
    return this.db.doc(`asdas/${this.auth.currentUser.uid}`).update({
      [name]: info
    });
  };
}

const fire = new Firebase();

export default fire;
