// import axios from "axios";
// import { createContext,useState, useEffect } from "react";

// export const userContext = createContext({});

// export function UserContext({children}){
//     const [user, setUser] = useState(null);
    
//     useEffect(() => {
//         if(!user){
//             axios.get('http://localhost:8080/profile').then(({data}) =>{
//                 setUser(data)
//             })
//         }
//     },[])

//     return (
//         <userContext.Provider value={{user,setUser}}>
//             {children}
//         </userContext.Provider>
//     )
// }