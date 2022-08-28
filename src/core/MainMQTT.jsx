import mqtt from "precompiled-mqtt";
const PI_URL = 'mqtt://192.168.1.125:9001/'; // Static IP of Raspberry PI device, 9001 is websocket listening port of mosquitto broker based in Raspberry


function MainMQTT() {   
    try { 
        var client = mqtt.connect(PI_URL, {keepalive: 5000}); // MQTT client
        client.on('connect', (error) => console.log("Connected to Raspberry PI (MainMQTT)."));
    } catch (error) {
        console.log(error);
    }

    return client;
}

export default MainMQTT;