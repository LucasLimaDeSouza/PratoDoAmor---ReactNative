import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme  } from "styled-components/native";
// import { RectButton } from "react-native-gesture-handler";
interface ContentsProps {
    theme: DefaultTheme;
} 

export const Content = styled.TouchableOpacity`

    width: ${RFValue(328)}px;
    height: ${RFValue(60)}px;

    border-radius: ${RFValue(12)}px;
    background-color: ${({theme}: ContentsProps) => theme.colors.primary};

    align-items: center;
    justify-content: center;
    
`
export const Title = styled.Text`
    color: ${({theme}: ContentsProps) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    /* font-family: ${({theme}: ContentsProps) => theme.fonts.regular}; */
`