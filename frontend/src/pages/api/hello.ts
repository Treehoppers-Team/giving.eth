// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB41iK_y3xy_3wnS11eVkZmazTA9RKp4-k",
  authDomain: "giving-eth.firebaseapp.com",
  projectId: "giving-eth",
  storageBucket: "giving-eth.appspot.com",
  messagingSenderId: "721510575119",
  appId: "1:721510575119:web:1e31213dc210d11392477a",
  measurementId: "G-CN5596ZF53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
