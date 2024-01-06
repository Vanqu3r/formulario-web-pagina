const express = require("express");
const mySql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "nitrome12",
  database: "formulario",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar:", err);
    return;
  }
  console.log("Conexión a la base de datos exitosa");
});

app.post("/formulario", (req, res) => {
  const sql =
    "INSERT INTO acreditado " +
    "(Razon_Social,RFC,Curp,Domicilio,Colonia,Codigo_Postal,Municipio,Telefono," +
    "Estado,Correo_Electronico,id_grupoVulnerable,id_Discapacidad,Telefono_WhatsApp," +
    "No_Empleados,Camara_Organismo,Fecha_Inicio_Operaciones,Sector,Tipo_Domicilio,Banco,Clabe_Interbancaria,Numero_de_Cuenta)" +
    " VALUES (?)";
  const values = [
    req.body.Razon_Social,
    req.body.RFC_a,
    req.body.Curp,
    req.body.Domicilio,
    req.body.Colonia,
    req.body.Codigo_Postal,
    req.body.Municipio,
    req.body.Telefono,
    req.body.Estado,
    req.body.Correo_Electronico,
    req.body.id_grupoVulnerable,
    req.body.id_Discapacidad,
    req.body.Telefono_WhatsApp,
    req.body.No_Empleados,
    req.body.Camara_Organismo,
    req.body.Fecha_Inicio_Operaciones,
    req.body.Sector,
    req.body.Tipo_Domicilio,
    req.body.Banco,
    req.body.Clabe_Interbancaria,
    req.body.Numero_de_Cuenta,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("error" + err);
      return res.json({
        success: false,
        message: "Error al insertar en la base de datos",
        error: err,
      });
    }

    return res.json({
      success: true,
      message: "Datos insertados correctamente",
      data: data,
    });
  });
});

app.post("/formulario/Financiamiento", (req, res) => {
  const sql =
    "INSERT INTO financiamiento " +
    "(ID_Acreditado, Esquema, Convocatoria, Monto," +
    "Plazos_Meses, Periodo_de_gracia, Tipo_de_garantia, NoContrato, Fecha_Elaboracion," +
    "CIE, Referencia_Bancaria, Cuenta_Bancaria," +
    " Dias_de_gracia_por_reflejo, Condicionante_dias_de_retraso)" +
    " VALUES (?,?,?,?,?,?,?,?,STR_TO_DATE(?, '%Y-%m-%d'),?,?,?,?,?)"; //hacer un triger para que se cree la tabla de abono ideal
  const values = [
    req.body.ID_Acreditado,
    req.body.Esquema,
    req.body.Convocatoria,
    req.body.Monto,
    req.body.Plazos_Meses,
    req.body.Periodo_de_gracia,
    req.body.Tipo_de_garantia,
    req.body.NoContrato,
    req.body.Fecha_Elaboracion,
    req.body.CIE_a,
    req.body.Referencia_Bancaria,
    req.body.Cuenta_Bancaria,
    req.body.Dias_de_gracia_por_reflejo,
    req.body.Condicionante_dias_de_retraso,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("error" + err);
      return res.json({
        success: false,
        message: "Error al insertar en la base de datos",
        error: err,
      });
    }

    return res.json({
      success: true,
      message: "Datos insertados correctamente",
      data: data,
    });
  });
});

app.post("/acreditado/usuario/abono/nuevo/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "INSERT INTO Abonos (ID_Financiamineto,Pago,Fecha_Pago) VALUES (?)"; //Aqui llama al procedure
  const values = [
    req.body.ID_Financiamiento,
    req.body.Pago,
    req.body.Fecha_Pago,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("error" + err);
      return res.json({
        success: false,
        message: "Error al insertar en la base de datos",
        error: err,
      });
    }

    return res.json({
      success: true,
      message: "Datos insertados correctamente",
      data: data,
    });
  });
});

app.post("/acreditado/usuario/documento/nuevo/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "INSERT INTO documentos (tipo_documento,archivo,ID_Acreditado) VALUES (?)"; //Aqui llama al procedure
  const values = [
    req.body.tipo_documento,
    req.body.archivo,
    req.body.ID_Acreditado,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("error" + err);
      return res.json({
        success: false,
        message: "Error al insertar en la base de datos",
        error: err,
      });
    }

    return res.json({
      success: true,
      message: "Datos insertados correctamente",
      data: data,
    });
  });
});

app.get("/acreditado/datos", (req, res) => {
  const sql = "SELECT ID_Acreditado,Razon_Social FROM acreditado";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado/usuario/finaciamiento/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM financiamiento WHERE ID_Acreditado = ?";

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado", (req, res) => {
  const sql = "SELECT * FROM acreditado";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado/usuario/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM acreditado WHERE ID_Acreditado = ?";

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado/usuario/abonoIdeal/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT * FROM abonos_ideal WHERE ID_Financiamineto = (SELECT ID_Financiamiento from financiamiento where ID_Acreditado = ?)";
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado/usuario/abono/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT * FROM abonos  WHERE ID_Financiamineto = (SELECT ID_Financiamiento from financiamiento where ID_Acreditado = ?)";

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/obtenerDatosGrupoVulnerable", (req, res) => {
  const sql = "SELECT Id_GrupoVulnerable, Nombre FROM grupo_vulnerable";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/obtenerDatosDiscapacidad", (req, res) => {
  const sql = "SELECT idDiscapacidad, Nombre FROM discapacidad";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/acreditado/usuario/documentos/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * from documentos WHERE ID_Acreditado = ?";
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get(
  "/acreditado/usuario/documentos/:id/descargar/:nombreArchivo",
  (req, res) => {
    const id = req.params.id;
    const nombreArchivo = req.params.nombreArchivo; // Obtén el nombre del archivo de los parámetros de la URL
    const sql =
      "SELECT archivo FROM documentos WHERE ID_Acreditado = ? AND tipo_documento = ?";
    db.query(sql, [id, nombreArchivo], (err, data) => {
      if (err) return res.json(err);
      // Comprueba si se encontraron datos y envía el archivo como respuesta
      if (data && data.length > 0) {
        const archivo = data[0].archivo; // Suponiendo que 'archivo' contiene los datos del archivo en base64
        // Puedes enviar el archivo como respuesta usando res.send() o res.sendFile() dependiendo de cómo estén almacenados los datos del archivo en la base de datos
        res.send(archivo); // Si el archivo está en formato base64
        // o
        // res.sendFile('/ruta/del/archivo'); // Si el archivo está almacenado como un archivo físico en el servidor
      } else {
        // Manejo si no se encuentra el archivo
        res.status(404).json({ mensaje: "Archivo no encontrado" });
      }
    });
  }
);

app.listen(8001, () => {
  console.log("Algo");
});
