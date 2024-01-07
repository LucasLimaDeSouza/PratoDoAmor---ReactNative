import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";



interface ContentsProps {
    theme: DefaultTheme;
} 


export const Container = styled.View`
    flex: 1;
    align-items: center;
    align-items: center;
    /* gap: ${RFValue(15)}px; */
    
    `;


export const Header = styled.View`
    background-color: ${({theme}: ContentsProps ) => theme.colors.primary};
    color: ${({theme}: ContentsProps ) => theme.colors.text};
    width: 100%;
    height: ${RFValue(118)}px;
    margin-bottom: ${RFValue(10)}px;
    padding: 0 ${RFValue(16)}px;

    justify-content: center;
`;

export const TextBack = styled.Text`
    font-weight: 600;
    font-size: ${RFValue(16)}px;
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
    gap: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    padding: 0 ${RFValue(16)}px;
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
    
    `;


export const Title = styled.Text`

`;

export const BoxDate = styled.View`
    gap: ${RFValue(10)}px;
    margin-bottom: ${RFValue(15)}px;
    padding: 0 ${RFValue(16)}px;
`;

export const BoxInformation = styled.View`
    gap: ${RFValue(10)}px;
    padding: 0 ${RFValue(16)}px;
`;
