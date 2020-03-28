const express = require('express');
const router = express.Router();

/* Modelos (agregados cada uno a los controllers que lo necesiten) */
// const Viaje = require('../models/Viajes');
// const Testimonial = require('../models/Testimoniales');

/* Controladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesControllers');

module.exports = function() {
    //.use responde a todos los verbos de http, .get solo a get

    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.agregarTestimonial); //Cuando se llena el formulario

    return router;
}



