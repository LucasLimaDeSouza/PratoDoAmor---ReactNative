import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from "styled-components/native";

interface ContentsProps {
    theme: DefaultTheme
}

export const Content = styled.TextInput`

    width: ${RFValue(328)}px;
    height: ${RFValue(60)}px;
    
    border-radius: ${RFValue(12)}px;
    background-color: ${({theme}: ContentsProps) => theme.colors.background};
    color: ${({theme}: ContentsProps) => theme.colors.text_dark};
    font-size: ${RFValue(16)}px;
    padding: ${RFValue(16)}px;
`