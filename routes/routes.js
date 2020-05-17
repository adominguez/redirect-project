exports.routes = (app) => {
    app.get('/impresoras-3d', function(request, response) {
        response.redirect(301, 'https://3dmakernow.com/comprar-tu-primera-impresora-3d/')
    });
    app.get('*', function(request, response) {
        response.redirect(301, 'https://3dmakernow.com')
    });
}