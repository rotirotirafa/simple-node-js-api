const functions = require('./functions')
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

//Definir porta
const port = functions.normalizePort(process.env.PORT || '3000');
app.set('port', port); //posso inserir direto sem armazenar em variável, fica melhor assim para entendimento do codigo.

//Cria o servidor
const server = http.createServer(app); //server recebe uma função que cria o servidor através do modulo http passando o Express
 
server.listen(port); 
server.on('error', functions.onError);
server.on('listening', onListening);
console.log('servidor rodando na porta:' + port);

//Está aqui pois não tem como mandar o server.address sem dar recursividade.
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}