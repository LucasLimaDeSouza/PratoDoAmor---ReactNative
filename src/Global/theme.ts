


interface ThemeType {

    colors: {
      
      primary: string ;
      primary_light: string ;
      
      secondary: string ;
      secondary_light: string ;
  
      shape: string ;
      text: string ;
      text_light: string ;
      text_dark: string ;
      background: string ;

    };

    fonts: {
      regular: string ;
      medium: string ;
      bold: string ;
    }

}


export const theme:ThemeType = {

    colors: {
      primary: '#EA6662',
      primary_light: 'rgba(234, 102, 98, 0.3)',
      
      secondary: '#E89694',
      secondary_light: 'rgba(255, 135, 44, 0.3)',
  
      shape: '#FFFFFF',
      text_light: '#F5F8F5',
      text: '#969CB2',
      text_dark: '#000000',
      background: '#F5F8F5',
    },
    
    fonts: {
      regular: 'Raleway_400Regular',
      medium: 'Raleway_500Medium',
      bold: 'Raleway_700Bold',
    }
  }