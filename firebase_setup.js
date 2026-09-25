import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";

const firebaseConfig = {
  projectId: "cire-conglomerate",
  appId: "1:849410729611:web:39f0173b5be4bafd81168e",
  storageBucket: "cire-conglomerate.firebasestorage.app",
  apiKey: "AIzaSyBKkJIG9r963JCq9UzsZ4vfQ_WS6jnYjQ8",
  authDomain: "cire-conglomerate.firebaseapp.com",
  messagingSenderId: "849410729611"
};

// reCAPTCHA Enterprise site key, used by App Check to attest that a submission
// came from this site rather than a script hitting Firestore directly.
//
// Enterprise rather than the classic v3 key: Google deprecated reCAPTCHA Classic
// as an App Check provider, and the console will not accept a classic key.
//
// There is no secret key in this scheme. Firebase calls the Enterprise API with
// the project's own credentials, so the site key below is the only value
// involved - it is public by design and ships in the page.
//
// Left empty, App Check stays off and writes behave exactly as before, so this
// file is safe to ship in either state.
const RECAPTCHA_SITE_KEY = "";

const app = initializeApp(firebaseConfig);

if (RECAPTCHA_SITE_KEY) {
  // A LAN address or localhost can't produce a real reCAPTCHA attestation, so
  // on those hosts ask the SDK for a debug token instead. It prints one to the
  // console on first load; register it under App Check > Apps > Manage debug
  // tokens, once per browser and per test device.
  const h = location.hostname;
  const isLocal =
    h === "localhost" || h === "127.0.0.1" || h === "[::1]" ||
    /^192\.168\./.test(h) || /^10\./.test(h) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(h);

  if (isLocal) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

  // Initialised before getFirestore so every Firestore call carries a token.
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true
  });
}

const db = getFirestore(app);

window.firebaseDB = db;
window.firebaseAddDoc = addDoc;
window.firebaseCollection = collection;
window.firebaseGetDocs = getDocs;
window.firebaseServerTimestamp = serverTimestamp;

window.firebaseDoc = doc;
window.firebaseSetDoc = setDoc;
window.firebaseDeleteDoc = deleteDoc;
