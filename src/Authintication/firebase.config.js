// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB378xIOfNknp8pkc815U4mAGNnG4b3yO4",
//   authDomain: "hostel-management-1e126.firebaseapp.com",
//   projectId: "hostel-management-1e126",
//   storageBucket: "hostel-management-1e126.appspot.com",
//   messagingSenderId: "834331727394",
//   appId: "1:834331727394:web:f02eabd5b7b415abcb1c7b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcqXe0snpPEe7zzJarIIM-rHNhbY7u_g",
  authDomain: "hostel-management-7f6f8.firebaseapp.com",
  projectId: "hostel-management-7f6f8",
  storageBucket: "hostel-management-7f6f8.appspot.com",
  messagingSenderId: "499521907499",
  appId: "1:499521907499:web:244280a6ed901e63ccb36e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 export default auth;