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


export function InsertValuesRegisterDay() {

    

    

    return (
        <Container>
            <Header>
                <TextBack>
                    Registrar visita
                </TextBack> 
            </Header>
            <BoxDate>
                <Title>Data</Title>
                <Input
                    title="Buscar Membro"
                    handleFunction={()=>{}}
                    />
            </BoxDate>

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