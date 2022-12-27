import express from 'express';
import dotenv from 'dotenv'
import mustacheExpress from 'mustache-express';
import path from 'path'; 
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'view'))
server.engine('mustache', mustacheExpress());

server.use(express.static(path.join(__dirname, '../public')))

//rotas
server.use(mainRoutes)

server.use((req, res)=>{
    res.send("Página não encontrada! Error 404")
})

server.listen(process.env.PORT)