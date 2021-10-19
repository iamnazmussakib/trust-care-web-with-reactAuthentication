import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../firebase/firebase.init';


firebaseInitialize()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(() => setIsLoading(false));
    }
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    
    const handleName = evant => {
        setName(evant.target.value);
    }
    const handleEmail = evant => {
        setEmail(evant.target.value);
    }
    const handlePass = evant => {
        setPass(evant.target.value);
    }
    const setDisplayName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(res => { })
    }
    const handleFormBtn = (event) => {
        event.preventDefault();
        if(pass.length < 6){
        setError('your password is not currect');
        return;
        }
        if(isLogin){
            signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                const user = res.user;
                setUser(user);
                setError('');
                setEmail('');
                setPass('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
            }
        else{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(res => {
            const user = res.user;
            setUser(user);
            setError('');
            setDisplayName();
            setEmail('');
            setPass('');
            setName('');
        })
        .catch(error => {
            setError(error.message);
        })
        }
        
    }
    
    const toggleUser = event => {
        setIsLogin(event.target.checked);
    }

    return{
        user,
        error,
        googleSignIn,
        logout,
        handleFormBtn,
        handleEmail,
        handlePass,
        toggleUser,
        isLogin,
        toggleUser,
        handleName,
        isLoading

    }
}
export default useFirebase;