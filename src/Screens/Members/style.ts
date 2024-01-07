import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";



interface ContentsProps {
    theme: DefaultTheme;
} 


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(16)}px;
    `;

export const NumberMembers = styled.View`
    /* background-color: red; */
    width: 100%;
    height: ${RFValue(35)}px;
    justify-content: center;
    `;

export const Text = styled.Text`
    color:${({theme}: ContentsProps) => theme.colors.text};
    `;

export const BoxMembers = styled.View`

    width: 100%;
    height: 70%;
    /* background-color: ${({theme}: ContentsProps) => theme.colors.primary}; */

`;
export const CardMembers = styled.View`

    width: 100%;
    border-radius: ${RFValue(12)}px;
    background-color: ${({theme}: ContentsProps) => theme.colors.background};
    margin-bottom: ${RFValue(10)}px;

    justify-content: center;

`;

export const BoxPhoto = styled.View`

    /* background-color: ${({theme}: ContentsProps) => theme.colors.primary}; */
    flex-direction: row;
    align-items: center;
    gap: ${RFValue(15)}px;
    
    width: 100%;
    padding: ${RFValue(8)}px;
    
`;