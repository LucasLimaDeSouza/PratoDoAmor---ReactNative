import { FlatList } from "react-native";
import { Input } from "../../Components/Imput";
import { 
    Header,
    Container,
    BoxPhotoUser,
    Button,
    TextButton,
    NumberMembers,
    Text,
    BoxMembers,
    CardMembers,
    PhotoUserr,
    BoxPhoto,
    NameUser,
    Genre,
} from "./style";
import { PhotoUser } from "../../Components/PhotoUser";


export function RegisterDay() {

    const usersRegister = [

        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Visita dia 14 abr. 2023',
        },

        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Visita dia 14 abr. 2023',
        },

        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Visita dia 14 abr. 2023',
        },

        
        {
            id: '58694aasr-3da1-471f-bd96-145571e29d72',
            title: 'Visita dia 14 abr. 2023',
        },
        {
            id: '58694aass-3da1-471f-bd96-145571e29d72',
            title: 'Visita dia 14 abr. 2023',
        },
        {
            id: '58694aasss-3da1-471f-bd96-145571e29d72',
            title: 'Visita dia 14 abr. 2023',
        },
        {
            id: '586s94aasss-3da1-471f-bd96-145571e29d72',
            title: 'Visita dia 14 abr. 2023',
        },
        

    ];

    

    return (
        <Container>
            <Header>
            </Header>

            <BoxPhotoUser>
                <PhotoUserr></PhotoUserr>
                <NameUser>João da Silva</NameUser>
                <Genre>Sexo: Masculino</Genre>
            </BoxPhotoUser>

            <Button>
                <TextButton>
                    Registrar Visita
                </TextButton>
            </Button>

            <NumberMembers>
                <Text>
                    Histórico de visistas
                </Text>
            </NumberMembers>

            <BoxMembers>
                <FlatList
                    data={usersRegister}
                    keyExtractor={usersRegister => usersRegister.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        
                        <CardMembers>
                            <BoxPhoto>
                                <PhotoUser/>
                                <Text>
                                    {item.title}
                                </Text>
                            </BoxPhoto>
                        </CardMembers>
                    )}
                />

            </BoxMembers>
        </Container>
    )
}