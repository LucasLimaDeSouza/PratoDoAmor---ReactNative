import 'styled-components';
import {theme} from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}

// declare module "*.svg" {
//   import { SvgProps } from "react-native-svg";
//   const content: React.FC<SvgProps> | any;
//   export default content;
// }