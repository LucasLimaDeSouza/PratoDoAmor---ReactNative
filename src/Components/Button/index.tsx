import react from 'react';
import {
    Content,
    Title
} from "./style"


// interface ComponentType {
//     title: string;
// }

interface Props {
    title: string;
    onPress: () => void;
}


export function Button({
    title,
    onPress,
}: Props) {

    return (
        <Content
            onPress={onPress} 
        >
            <Title>{title}</Title>
        </Content>
    )
    
}