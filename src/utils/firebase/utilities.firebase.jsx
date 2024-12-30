import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc, collection, writeBatch, query, getDocs } from "firebase/firestore"

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
const db = getFirestore();
export const addCollection = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

await   batch.commit();
console.log('done');
  }

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    });
    return categoryMap
  }












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

export const signIneAuthUserWitEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return
    };
    return await signInWithEmailAndPassword(auth, email, password)
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);