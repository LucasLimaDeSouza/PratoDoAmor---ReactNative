import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

interface ContentsProps {
    theme: DefaultTheme
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