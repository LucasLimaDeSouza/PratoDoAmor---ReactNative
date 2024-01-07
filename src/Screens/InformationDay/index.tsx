import { FlatList } from "react-native";
import { Input } from "../../Components/Imput";
import { 
    Container,
    Header,
    TextBack,
    BoxMembers,
    Title,
    BoxDate,
    BoxInformation,
    CardMembers,
    BoxPhoto,
} from "./style";
import { PhotoUser } from "../../Components/PhotoUser";


export function InformartionDay() {

    

    

    return (
        <Container>
            <Header>
                <TextBack>
                    Visita dia 14 abr. 2023                
                </TextBack> 
            </Header>

            <BoxMembers>
                <Title>Doações e serviços recebidos</Title>

                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />

            </BoxMembers>

            <BoxInformation>
                <Title>Informações complementares</Title>
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                />
            </BoxInformation>
        </Container>
    )
}