
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction
} from "react"


interface AuthProps {

  children: ReactNode

}

interface User {
  name: string,
  passwordd: string,
}

interface UserProps {
  user: User | undefined
  setUser: Dispatch<SetStateAction<User | undefined>>
} 

export const AuthContext = createContext({} as UserProps)

function AuthProvider({children} : AuthProps) {

  const [user, setUser] = useState<User>({name: '', passwordd: ''})

  return (

    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
  
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth } 