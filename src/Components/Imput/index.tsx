import react from 'react';
import {
    Content
} from "./style"
import { TextInputProps } from 'react-native';

// import { AuthContext, useAuth } from '../Contexto/Auth';
interface Props extends TextInputProps{
    title: string;
    handleFunction: {}
}

export function Input({
    title,
    handleFunction
}: Props) {

    return (
        
        <Content
            onChangeText = {handleFunction}
            placeholder = {title}
        />
    )
}