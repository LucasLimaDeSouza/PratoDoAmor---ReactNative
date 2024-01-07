import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native"


interface ContentsProps {
    theme: DefaultTheme;
} 

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}: ContentsProps) => theme.colors.shape};
`;

export const Header = styled.View`

    height: ${RFValue(128)}px;
    width: 100%;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary_light};
    `;

export const PhotoUser = styled.View`
    height: ${RFValue(148)}px;
    width: ${RFValue(148)}px;
    border-radius: ${RFValue(100)}px;;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary};
    margin-top: ${RFValue(-80)}px;
    `;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: ${RFValue(24)}px;
    
    `;

export const BoxInputName = styled.View`
    width: 90%;
    gap: ${RFValue(8)}px;
`;

export const InputSex = styled.Pressable`
`;


export const Title = styled.Text`
    font-weight: 600;
    font-size: ${RFValue(16)}px;
    `;

export const InputName = styled.Pressable`
    width: 100%;
    border-radius: ${RFValue(12)}px;
    height: ${RFValue(54)}px;
    background-color: ${({theme}: ContentsProps) => theme.colors.background};
    color: ${({theme}: ContentsProps) => theme.colors.text_dark};
    font-weight: 400;
    font-size: ${RFValue(16)}px;
    padding: ${RFValue(10)}px;

`;
