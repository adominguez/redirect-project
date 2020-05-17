exports.routes = (app) => {
    app.get('/impresoras-3d', function(request, response) {
        response.redirect(301, 'https://3dmakernow.com/comprar-tu-primera-impresora-3d/')
    });
    /**
     * Cuando monte la parte de los escaneres, hay que realizar la redirección de esta parte
     */
    app.get('/escaneres-3d', function(request, response) {
        response.redirect(301, 'https://3dmakernow.com/')
    });
    app.get('*', function(request, response) {
        response.redirect(301, 'https://3dmakernow.com')
    });
}