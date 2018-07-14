import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAVYLFgbUmgWBi0rxqt6lwhxzX4SXEbMhY",
  authDomain: "ripuariapp-react.firebaseapp.com",
  databaseURL: "https://ripuariapp-react.firebaseio.com",
  projectId: "ripuariapp-react",
  storageBucket: "ripuariapp-react.appspot.com",
  messagingSenderId: "501791638413"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;