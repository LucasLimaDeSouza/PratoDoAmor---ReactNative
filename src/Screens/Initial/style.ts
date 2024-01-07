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
    gap: ${RFValue(10)}px;

    background-color: ${({theme}: ContentsProps ) => theme.colors.shape};

`
export const ContantUsers = styled.View`

    height: ${RFValue(100)}px;
    width: 90%;
    
`

export const BoxUser = styled.View`

    height: ${RFValue(70)}px;
    /* width: ${RFValue(80)}px; */
    margin-right: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;

`


export const Text = styled.Text`
    font-size: 16px;
    width: 100%;
    text-align: center;
    font-weight: 500;
`

export const BoxLogo = styled.View`


    width: ${RFValue(250)}px;
    height: ${RFValue(200)}px;
    margin-bottom: ${RFValue(60)}px;
    
    align-items: center;
    justify-content: center;
    
`
