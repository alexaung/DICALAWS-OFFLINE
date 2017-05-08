var firebase = require('firebase');
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBI-80ua26BEiWPCjMwfzE_e5CCqWR-W20',
  authDomain: 'dica-laws.firebaseio.com',
  databaseURL: 'https://dica-laws.firebaseio.com',
  storageBucket: ''
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
//export const mmLawsRef = firebaseApp.database().ref('mmlaws')
//export const engLawsRef = firebaseApp.database().ref('englaws')
//module.exports.FirebaseApp = FirebaseApp.database();