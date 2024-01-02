const express = require('express');
const mySql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'nitrome12',
    database: 'formulario',
    port: 3307
})


db.connect((err) => {
    if (err) {
        console.error('Error al conectar:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});


app.post('/formulario', (req,res)=>{
    const sql ="INSERT INTO tabla (nombre,algo) VALUES (?)";
    const values =[
        req.body.nombre,
        req.body.algo,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/acreditado', (req,res)=>{
    const sql = "SELECT * FROM acreditado";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/acreditado/usuario/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM acreditado WHERE ID_Acreditado = ?";
    
    db.query(sql, [id], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/acreditado/usuario/abonoIdeal/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM abonos_ideal WHERE ID_Financiamineto = ?";
    
    db.query(sql, [id], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/acreditado/usuario/abono/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM abonos WHERE ID_Financiamineto = ?";
    
    db.query(sql, [id], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})



app.listen(8001,()=>{
    console.log('Algo')
})