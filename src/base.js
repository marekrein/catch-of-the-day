import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAe00GTnC_gTWvtyRROoV9aVPgyPfRyw6o",
    authDomain: "fish-of-the-day-wes-bos-7e0ec.firebaseapp.com",
    databaseURL: "https://fish-of-the-day-wes-bos-7e0ec-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
