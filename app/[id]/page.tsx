// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5DbDqpzbM8utwsC6ntb9Tvlrq3q43p8M",
  authDomain: "turncoat-timeline.firebaseapp.com",
  projectId: "turncoat-timeline",
  storageBucket: "turncoat-timeline.firebasestorage.app",
  messagingSenderId: "337190515063",
  appId: "1:337190515063:web:83921803fd42613e2f7172",
  measurementId: "G-XQE60QH5FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


type pageParams = Promise<{ id: string }>;


export default async function Page(props : { params: pageParams }) {
  const {id} = await props.params;
  return <div>hello world: {id} | {app.options.projectId}</div>
}