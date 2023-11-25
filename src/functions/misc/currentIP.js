const { networkInterfaces } = require('os');
const interfaces = networkInterfaces();

module.exports = function currentIP() {
    let localIpAddress = '';

    for (const key in interfaces) {
        if (Object.prototype.hasOwnProperty.call(interfaces, key)) {
            const iface = interfaces[key];

            for (let i = 0; i < iface.length; i++) {
                if (iface[i].family === 'IPv4' && !iface[i].internal) {
                    localIpAddress = iface[i].address;
                    break;
                }
            }

            if (localIpAddress) {
                break;
            }
        }
    }

    return localIpAddress;
};
