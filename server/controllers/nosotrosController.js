//res.send('Hola Mundo en NodeJS'); //.send para mandar información

exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}