// importar el paquete de rutas de express
import { Router } from 'express'
// crear una instancia de Router
const router = Router()



// crear link parta el index
router.get('/', (req, res) => {
    res.render('index', 
    {
        title: 'Inicio',
        message: 'Bienvenido a mi sitio web'
    })
});
// crear link para about
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre mi',
        message: 'Aqui puedes saber mas de mi'
    })
});
// crear link para contact
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacto',
        message: 'Deja tu mensaje'
    })
});


//exportar
export default router