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

  userRegistration = async (name, email, number, password) => {
    await this.auth.createUserWithEmailAndPassword(email, password);
    await this.db.doc(`users/${this.auth.currentUser.uid}`).set({
      name,
      email,
      number
    });
    await this.auth.currentUser.updateProfile({
      displayName: name
    });
  };

  addAdvert = async (title, description, category, number, price) => {
    const payload = {
      title,
      description,
      category,
      number,
      price,
      uid: this.auth.currentUser.uid
    };
    await this.db.doc(`/adverts/${Date.now()}`).set(payload);
    await this.db.doc(`/users/${this.auth.currentUser.uid}`).update({
      adverts: firebase.firestore.FieldValue.arrayUnion(payload)
    });
  };

  getAdverts = async () => {
    const response = await this.db.collection("/adverts").get();

    console.log(response);

    // console.log(response.forEach(data => ({ id: data.id, data: data.data() })));
    // response.foeEach(data => console.log({ id: data.id, data: data.data() }));

    // console.log(doc =>
    //   doc.forEach(data => ({ id: data.id, data: data.data() }))
    // );
  };
}

const fire = new Firebase();

export default fire;
