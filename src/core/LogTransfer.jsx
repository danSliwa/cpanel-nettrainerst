import { useState } from 'react';
import MainMQTT from '../core/MainMQTT';
const modules = require('../store/ModuleOptions');
const mqttData = require('../assets/MQTT_Topics');

function LogTransfer() {
    const [logFile, setLogFile] = useState('');

    const logClient = MainMQTT();
    logClient.subscribe(mqttData.LOG_TRANSFER.logTopic);
    logClient.on('message', (topic, payload, packet) => { console.log(setLogFile(payload)) });
    console.log(`LOGTRANSFER: ${logFile}`);
    return logFile.toString();
}

export default LogTransfer;