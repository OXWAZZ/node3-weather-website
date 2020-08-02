const request = require('request');

const forecast = (latitude, longitude, callback) => {
    setTimeout(() => {
        const url =
            'http://api.weatherstack.com/current?access_key=89452372d42d886f3695955972783bbc&query=' +
            latitude +
            ',' +
            longitude;

        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect!', undefined);
            } else if (body.error) {
                callback('Unable find location!', undefined);
            } else {
                callback(
                    undefined,
                    body.current.weather_descriptions +
                        '. It is currently ' +
                        body.current.temperature +
                        ' degrees out. There is a ' +
                        body.current.precip +
                        '% chance of rain.'
                );
            }
        });
    }, 2000);
};

module.exports = forecast;
