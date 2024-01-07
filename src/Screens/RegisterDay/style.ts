import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";



interface ContentsProps {
    theme: DefaultTheme;
} 

export const Header = styled.View`

    height: ${RFValue(330)}px;
    width: 100%;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary_light};
`;


export const BoxPhotoUser = styled.View`
    align-items: center;
    gap: ${RFValue(8)}px;
    margin-top: ${RFValue(-80)}px;

    
    /* width: 100%; */

`;

export const Button = styled.View`
    height: ${RFValue(56)}px;
    width: ${RFValue(328)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(12)}px;
    margin: ${RFValue(14)}px 0;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary};
`;
export const TextButton = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 600;
    color:${({theme}: ContentsProps) => theme.colors.text_light};
`;

export const PhotoUserr = styled.View`
    height: ${RFValue(148)}px;
    width: ${RFValue(148)}px;
    border-radius: ${RFValue(100)}px;;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary};
    `;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    `;

export const NumberMembers = styled.View`
    /* background-color: red; */
    width: 100%;
    height: ${RFValue(35)}px;
    padding: 0 ${RFValue(16)}px;
    justify-content: center;
    `;

export const Text = styled.Text`
    color:${({theme}: ContentsProps) => theme.colors.text};
    `;

export const BoxMembers = styled.View`

    width: 100%;
    height: 70%;
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
    padding: ${RFValue(8)}px;
    
`;

export const NameUser = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: 600;
`;
export const Genre = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
`;