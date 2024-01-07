import React, { useState } from "react";
// import Logo from "../../../assets/Logo.png";


import {
    ContantLogin,
    BoxLogo,
    BoxInput,
} from "./style"

import { Input } from "../../Components/Imput";
import { Button } from "../../Components/Button";
import { Image } from "react-native";

export function Login(){

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleName = () => {
        

        alert(`Seu nome é ${email} e a senha é ${password}`)
    }

    return (
        <ContantLogin>

            <BoxLogo>
                        
                <Image
                    source={require('../../../assets/Logo.png')}
                />
                        
            </BoxLogo>

            <BoxInput>

                <Input
                    title="Nome"
                    handleFunction={setEmail}
                />
                <Input
                    title="Senha"
                    handleFunction={setPassword}
                />
                
            </BoxInput>
            <Button
                title="Acessar"
                onPress={handleName}
            />

        </ContantLogin>
    )
}