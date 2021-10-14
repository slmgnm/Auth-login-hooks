import React, {useState, useEffect} from 'react';

export const AuthContext = React.createContext();
// authContext is used here to save the authentication
export function AuthProvider(Props){
// when  data is detected in loacalStorage, it will be saved in the state.
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');

        // @todo: validate token with api
        if(email){
            setAuth({
                token, email
            });
        }

    }, []);

    return (
        // the state is attached to this context
        // App will be available here  (props.children)
        <AuthContext.Provider value={{auth, setAuth}}>
            
            {Props.children}
        </AuthContext.Provider>
    );

}
