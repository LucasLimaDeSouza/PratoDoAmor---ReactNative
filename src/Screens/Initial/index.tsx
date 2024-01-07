


import {
    ContantLogin,
    BoxLogo,
    ContantUsers,
    BoxUser,
    Text,
    
} from "./style"


    
import { PhotoUser } from "../../Components/PhotoUser";
import { Image, FlatList } from "react-native";

export function Initial(){

    const usersRegister = [

        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First',
        },

        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second',
        },

        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third',
        },

        
        {
            id: '58694aasr-3da1-471f-bd96-145571e29d72',
            title: 'Ford',
        },
        {
            id: '58694aass-3da1-471f-bd96-145571e29d72',
            title: 'Fivird',
        },
        {
            id: '58694aasss-3da1-471f-bd96-145571e29d72',
            title: 'asdsa',
        },
        {
            id: '586s94aasss-3da1-471f-bd96-145571e29d72',
            title: 'as',
        },

    ];


    return (
        <ContantLogin>

            <BoxLogo>
                        
                <Image
                    source={require('../../../assets/Logo.png')}
                />

            </BoxLogo>

            <Text>Ultimos Cadastros</Text>

            <ContantUsers>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={usersRegister}
                    keyExtractor={usersRegister => usersRegister.id }
                    renderItem={({item}) => (

                        <BoxUser key={item.id}>
                            <PhotoUser/>
                            

                            <Text>{item.title}</Text>
                        </BoxUser>

                    )}
                />

            </ContantUsers>




        </ContantLogin>
    )
}