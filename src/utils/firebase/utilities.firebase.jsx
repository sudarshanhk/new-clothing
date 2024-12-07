import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore , getDoc, setDoc ,doc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCacTWMVLEUSKNFaQfWgGtBfiRdDOiwC2Q",
    authDomain: "sud-clothing.firebaseapp.com",
    projectId: "sud-clothing",
    storageBucket: "sud-clothing.firebasestorage.app",
    messagingSenderId: "854437061537",
    appId: "1:854437061537:web:63e3e76001389d664361e0"
};
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    "prompt": " select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth , googleProvider)  
}

export const  signWithGoogleRedirect = () => {
    return signInWithRedirect(auth, googleProvider)
}
const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if (!userAuth) return; 
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
   

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date;
        try { 
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
        }
            catch (error) {
                console.log(error);
            }
        }
 return userDocRef   
}

export const createAuthUserWitEmailAndPassword = async (email, password) =>{
    if (!email || !password) {
        return
    } ;
    return await createUserWithEmailAndPassword(auth , email,password)
}