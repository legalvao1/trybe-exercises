const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
const maxTemperature = 58;
return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
  const marsTemperature  = getMarsTemperature();
  setTimeout(() => {
      const didOperationSucceed = Math.random() >= 0.5;
      if(didOperationSucceed) {
          onSuccess(marsTemperature)
      } else {
        const error = 'Robot is busy';
          onError(error);
      }
  }), messageDelay();
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);