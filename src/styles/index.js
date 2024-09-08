import styled from "styled-components/native";


const Background = styled.View`
    flex: 1;
    background-color: #4995fd;
    justify-content: center;
    align-items: center;
`;
const ContainerCrono = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
`;



const ImgCrono = styled.Image``;


const ButtonAction = styled.TouchableOpacity`
    width: 120px;
    height: 55px;
    border-radius: 10px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: #4995fd;
    font-weight: bold;
`;

const AreaButton = styled.View` 
    margin-top: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 45px;
    
`;

const TextCrono = styled.Text`
    font-size: 45px;
    font-weight: bold;
    color: #000;
    position: absolute;
    top: 170px;
`;
const TextRecord = styled.Text`
    margin-top: 60px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    font-style: italic;

`;


export {
    Background,
    ImgCrono,
    ButtonAction,
    ButtonText,
    AreaButton,
    TextCrono,
    ContainerCrono,
    TextRecord
}