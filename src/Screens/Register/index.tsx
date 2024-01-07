import { Button } from '../../Components/Button'
import {
    Container,
    Header,
    PhotoUser,
    Content,
    BoxInputName,
    InputSex,
    Title,
    InputName,
} from './style'

export function Register() {
    return (

        <Container>
            <Header>
            </Header>

            <PhotoUser></PhotoUser>

            <Content>

                <BoxInputName>
                    <Title>Nome</Title>
                    <InputName/>
                </BoxInputName>

                <BoxInputName>
                    <Title>Sexo</Title>
                    <InputName>
                    </InputName>

                    <InputSex/>
                </BoxInputName>

                <BoxInputName>
                    <Title>Observação</Title>
                    <InputName/>
                </BoxInputName>

                <Button
                    title='Cadastrar'
                    onPress={() => {}}
                />

            </Content>
        
        </Container>

    )
}