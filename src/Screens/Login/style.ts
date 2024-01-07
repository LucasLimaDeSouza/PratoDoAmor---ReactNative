import styled from "styled-components/native";
import { DefaultTheme } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize"



interface ContentsProps {
    theme: DefaultTheme;
} 


export const ContantLogin = styled.View`

    flex: 1;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}: ContentsProps ) => theme.colors.shape};
    
`
export const BoxLogo = styled.View`


    width: ${RFValue(250)}px;
    height: ${RFValue(200)}px;
    margin-bottom: ${RFValue(60)}px;
    
    align-items: center;
    justify-content: center;
    
`
export const BoxInput = styled.View`

    align-items: center;

    height: ${RFValue(120)}px;
    width: ${RFValue(300)}px;
    gap: ${RFValue(30)}px;
    margin-bottom: ${RFValue(65)}px;

`

