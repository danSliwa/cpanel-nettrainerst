import mqtt from "precompiled-mqtt";
const PI_URL = 'mqtt://192.168.1.125:9001/'; 

function MainMQTT() {
    var t2 = 0;
    try { 
        const t1 = performance.now();
        var client = mqtt.connect(PI_URL, {connectTimeout: 3000, keepalive: 10, reconnectPeriod: 5000}); // MQTT client
        client.on('connect', () => {t2 = performance.now()});
        
        console.log(`Connection was estabilished in ${t1-t2} miliseconds.`);
    } catch (error) {
        console.log(error);
    }

    return client;
}

export default MainMQTT;