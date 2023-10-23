// importar express
import express from 'express'
// importar dirname de path
import { dirname, join } from 'path'
// importar file url
import { fileURLToPath } from 'url'
// importar indexRoiye de index.js de routes
import indexRouter from './routes/index.js'

// funcion de app
const app = express()

// constarte de __dirname con file url
const __dirname = dirname(fileURLToPath(import.meta.url));
// mostrar ruta 
console.log(__dirname, '/views')

// configurar el viws con el dirname y la carpeta views
app.set('views', join(__dirname, '/views'))
// view engine 
app.set('view engine', 'ejs')

// llamar las rutas
app.use('/', indexRouter)
// llamar la carpeta public el archivo de main css
app.use(express.static(join(__dirname, '/public')))












// app escuchando por el  puerto 3000
app.listen(3000, () => {
    console.log('servidor iniciado')
});
