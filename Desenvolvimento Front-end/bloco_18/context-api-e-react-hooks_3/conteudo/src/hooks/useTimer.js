import { useState, useEffect } from "react";

function useTimer() {
  const [ timer, setTimer ] = useState(0);
  const [ randomNumber, setRandomNumber ] = useState()

  // A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  useEffect( () => {
    const interval = setInterval(() => {
      let newTimer = timer + 1;
      if(newTimer === 10) {
        generateRandomNumber();
        newTimer = 0
      }
      setTimer(newTimer);
    }, 1000);

    //O timer é removido quando o componente é desmontado.
     return () => clearInterval(interval)

  }, [timer]);

  // Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
  const isMultiple = randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0);

  // A mensagem de acerto é removida 4 segundos depois de ser exibida;
  useEffect( () => {
    if (isMultiple) {
      setTimeout( () => {
        setRandomNumber(null);
      }, 4000)
    }
  }, [randomNumber, isMultiple])

  return {
    timer,
    randomNumber,
    isMultiple,
  }
}

export default useTimer;
