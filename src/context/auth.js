import { useState  ,createContext, useEffect, Children } from "react";
import firebase from "../services/firebaseConection";


export const AuthContext = createContext({})

function AuthProvider( {children}){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

  

    useEffect(() => {

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser')
    
            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
    
            setLoading(false)
        }
        loadStorage()
    }, [])

    async function siginUp(email, password, nome){
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }


// a expressao '!!user' quer dizer que estamo convertendo para boleano, poisi como user vai ser um objeto futuramente, se caso tiver dados nele ele vai converter para true se não para false
    return(
        <AuthContext.Provider value = {{signed: !!user, user, loading}}> 
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider