import { FlatList } from "react-native";
import { Input } from "../../Components/Imput";
import { 
    Container,
    NumberMembers,
    Text,
    BoxMembers,
    CardMembers,
    BoxPhoto,
} from "./style";
import { PhotoUser } from "../../Components/PhotoUser";


export function Members() {

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

    const surchIndex = usersRegister.map((value,index) => index)

    const count = surchIndex.length

    return (
        <Container>
            <Input
                title="Buscar Membro"
                handleFunction={()=>{}}
            />

            <NumberMembers>
                <Text>
                    {count} membros
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