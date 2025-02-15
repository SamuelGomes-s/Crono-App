import React, { useState } from "react";
import {
  Background,
  ButtonAction,
  ButtonText,
  ImgCrono,
  AreaButton,
  TextCrono,
  ContainerCrono,
  TextRecord
} from "./src/styles";
import { StatusBar } from "react-native";

let timer = null
let hours = 0
let minutes = 0
let seconds = 0

export default function App() {

  const [timeCrono, setTimeCrono] = useState(0)
  const [lastTime, setLastTime] = useState(null)
  const [buttonText, setButtonText] = useState('Iniciar')

  function startTime() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null
      setButtonText('Iniciar')
    } else {
      timer = setInterval(() => {
        seconds++
        if (seconds == 60) {
          seconds = 0
          minutes++
        }
        if (minutes == 60) {
          minutes = 0
          hours++
        }
        let format =
          (hours < 10 ? '0' + hours : hours) + ':' +
          (minutes < 10 ? '0' + minutes : minutes) + ':' +
          (seconds < 10 ? '0' + seconds : seconds)
        setTimeCrono(format)
      }, 1000)
      setButtonText('Pausar')
    }
  }

  function clearTime() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null
    }
    setLastTime(timeCrono)
    setTimeCrono(0)
    hours = 0
    minutes = 0
    seconds = 0
    setButtonText('Iniciar')
  }

  return (
    <Background>
      <StatusBar backgroundColor={"#000"} />
      <ContainerCrono>
        <ImgCrono
          source={require('./src/images/crono.png')}
        />
        <TextCrono> {timeCrono} </TextCrono>
      </ContainerCrono>
      <AreaButton>
        <ButtonAction onPress={startTime}>
          <ButtonText> {buttonText}</ButtonText>
        </ButtonAction>
        <ButtonAction onPress={clearTime}>
          <ButtonText> {"Limpar"}</ButtonText>
        </ButtonAction>
      </AreaButton>
      {lastTime === null || lastTime === 0 ? "" : (
        <TextRecord>
          {`Ultimo tempo registrado ${lastTime}`}
        </TextRecord>)
      }
    </Background>
  )
}