const Hapi = require('hapi');

const host = 'localhost';
const port = 3003;

const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () =>
{

    await server.start();
    console.log("Server up and running at port: " + port);

}

require('./services/services')(server);

init();
