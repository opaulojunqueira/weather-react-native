# weather-react-native
A simple Weather application in React Native Expo.

<a href="https://www.buymeacoffee.com/cesinha" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="28" width="119"></a>

---
Important to have installed on your computer
```
- NodeJs (https://nodejs.org/en/download/)
- Npm
- Expo-CLI (npm install --global expo-cli or https://docs.expo.dev/get-started/installation/)
```
Install the required dependency presented in the **package.json** file
```
npm install
```
Modify information in the **api/ConsultApi.js** file
```js
axios.get(`https://api.weatherapi.com/v1/forecast.json?key=<API_KEY>...`)
```
"API_KEY" -> Here you will need to put your KEY to access the api, create your account at [weatherapi.com](https://weatherapi.com).<br/>

---
After the change, give the command on the console to start the project
```
expo start
```
I'm going to run it in a web application, so I'm going to run
```
expo start --web
```

---
**IMPORTANT: If you have any tracking or adverts blocker, please deactivate. Because the project uses your IP to know your latitude and longitude to give you more accurate information.**

---
See screenshots:
<img wight="50%" src="https://i.imgur.com/6QVdWpl.png"/><br/>
<img wight="50%" src="https://i.imgur.com/7EBoU4n.png"/>
