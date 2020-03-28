const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes: viajes //Se puede nada más pasar una vez viajes ya que propiedad y valor tienen el mismo nombre
    });
}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id); //findById was replaced??
    res.render('viaje', {
        pagina: 'Disfruta tu viaje',
        viaje
    });
}