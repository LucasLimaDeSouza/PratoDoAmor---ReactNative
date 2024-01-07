import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";


interface ContentsProps {
    theme: DefaultTheme
}


export const Content = styled.View`

    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(100)}px;
    background-color: ${({theme}: ContentsProps ) => theme.colors.primary};

`