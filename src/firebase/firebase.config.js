// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log ('environment variable', import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKeyZ:import.meta.env.VITE_APIKEY,
  authDomainZ: import.meta.env.VITE_AUTHDOMAIN,
  projectIdZ: import.meta.env.VITE_PROJECTID,
  storageBucketZ:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderIdZ:import.meta.env.VITE_MESSAGINGSENDERID,
  appIdZ:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 
 