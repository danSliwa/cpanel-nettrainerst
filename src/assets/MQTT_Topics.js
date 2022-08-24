// Available MQTT topics and actions programmed on NodeRED that trigger some response
// Update this file as more modules are added/changed

module.exports = {
    PASSIVE_SNIFFING_MOD: {
        topic: 'SNIFFING_MODE',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    ARP_MOD: {
        topic: 'ARP_MOD',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    DNS_MOD: {
        topic: 'DNS_MOD',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    DNS_MASQ_MOD: {
        topic: 'DNS_MASQ_MOD',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    SIMPLE_SSH: {
        topic: 'SIMPLE_SSH',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    NETCAT_BD: {
        topic: 'NETCAT_BD',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    TCP_METASPLOIT: {
        topic: 'TCP_METASPLOIT',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    USB_POWER_ONLY: {
        topic: 'USB_POWER_ONLY',
        turnOn: 'turnOn',
        turnOff: 'turnOff'
    },
    RESET_TO_DEFAULT: {
        topic: 'RESET_TO_DEFAULT',
        turnOn: 'turnOff'
    },
    LOG_TRANSFER: {
        topic: 'LOG',
        logTopic: 'LOG/file',
        turnOn: 'turnOn',
        file: ''
    }
}