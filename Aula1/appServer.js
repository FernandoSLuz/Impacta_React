const http = require('http')

const requisicao = function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('<h1>Teste Resposta HTML</h1>')
    response.end()
}

const server = http.createServer(requisicao)

const resultado = function()
{
    console.log('Servidor em funcionamento')
}
server.listen(3000, resultado)