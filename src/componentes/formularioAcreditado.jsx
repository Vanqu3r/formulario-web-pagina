import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/formularioAcreditado.css";
const FormularioAcreditado = () => {
  const [estado, setEstado] = useState("Hidalgo");
  const [obtenerDatosGrupoVulnerable, setDatosGrupoVulnerable] = useState([]);
  const [obtenerDatosDiscapacidad, setDatosDiscapacidad] = useState([]);
  const [email, setEmail] = useState("");
  const [confirmarEmail, setconfirmarEmail] = useState("");
  const [emailsIguales, setemailsIguales] = useState(false);
  useEffect(() => {
    // Realiza la solicitud al servidor Node.js para obtener datos
    axios
      .get("http://localhost:8001/obtenerDatosGrupoVulnerable")
      .then((response) => setDatosGrupoVulnerable(response.data))
      .catch((error) =>
        console.error("Error al obtener datos del servidor:", error)
      );
  }, []);
  useEffect(() => {
    // Realiza la solicitud al servidor Node.js para obtener datos
    axios
      .get("http://localhost:8001/obtenerDatosDiscapacidad")
      .then((response) => setDatosDiscapacidad(response.data))
      .catch((error) =>
        console.error("Error al obtener datos del servidor:", error)
      );
  }, []);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Realizar la solicitud POST al servidor
    axios
      .post("http://localhost:8001/formulario", data)
      .then((response) => {
        console.log(response.data); // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };
  const CambioEmail = (event) => {
    setEmail(event.target.value);
    setemailsIguales(event.target.value === confirmarEmail);
  };

  const ConfirmarCambioEmail = (event) => {
    setconfirmarEmail(event.target.value);
    // Verificar la igualdad cuando se actualiza la confirmación del correo electrónico
    setemailsIguales(event.target.value === email);
  };

  const fechaActual = new Date();
  fechaActual.setDate(fechaActual.getDate() - 1);
  const nuevaFecha = fechaActual.toISOString().split("T")[0];
  return (
    <div className="formulario-container">
      <div className="formulario">
        <h2>Registro de Usuario</h2>
        <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div class=" form-floating col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder="RFC"
              {...register("RFC_a")}
              minLength={12}
              maxLength={13}
              required
              pattern="[a-zA-Z0-9]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              RFC con Homoclave
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Razon_Social")}
              maxLength={45}
              required
              pattern="[a-zA-Z\s]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              Nombre o razón social
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Curp")}
              minLength={18}
              maxLength={18}
              required
              pattern="[a-zA-Z0-9]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              Curp
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Domicilio")}
              maxLength={50}
              required
              pattern="[a-zA-Z0-9\s]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              Domicilio
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Tipo_Domicilio")}
              maxLength={45}
              required
              pattern="[a-zA-Z0-9\s]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              Tipo Domicilio
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Colonia")}
              maxLength={50}
              required
              pattern="[a-zA-Z\s]+"
            ></input>
            <label for="floatingInput" class="asterisk">
              Colonia
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("Codigo_Postal")}
              minLength={5}
              maxLength={5}
              required
            ></input>
            <label for="floatingInput" class="asterisk">
              Codigo Postal
            </label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Estado")}
              maxLength={50}
              value={estado}
              readOnly
            ></input>
            <label>Estado</label>
          </div>
          <div class="col-md-4">
            <select
              class="form-select form-select-lg mb-3"
              {...register("Municipio")}
              required
            >
              <option disabled selected>
                Municipio *
              </option>
              <option value="Acatlán">Acatlán</option>
              <option value="Acaxochitlán">Acaxochitlán</option>
              <option value="Actopan">Actopan</option>
              <option value="Agua Blanca de Iturbide">
                Agua Blanca de Iturbide
              </option>
              <option value="Ajacuba">Ajacuba</option>
              <option value="Alfajayucan">Alfajayucan</option>
              <option value="Almoloya">Almoloya</option>
              <option value="Apan">Apan</option>
              <option value="El Arenal">El Arenal</option>
              <option value="Atitalaquia">Atitalaquia</option>
              <option value="Atlapexco">Atlapexco</option>
              <option value="Atotonilco el Grande">Atotonilco el Grande</option>
              <option value="Atotonilco de Tula">Atotonilco de Tula</option>
              <option value="Calnali">Calnali</option>
              <option value="Cardonal">Cardonal</option>
              <option value="Cuautepec de Hinojosa">
                {" "}
                Cuautepec de Hinojosa
              </option>
              <option value="Chapantongo">Chapantongo</option>
              <option value="Chapulhuacán">Chapulhuacán</option>
              <option value="Chilcuautla">Chilcuautla</option>
              <option value="Eloxochitlán">Eloxochitlán</option>
              <option value="Emiliano Zapata">Emiliano Zapata</option>
              <option value="Epazoyucan">Epazoyucan</option>
              <option value="Francisco I. Madero">Francisco I. Madero</option>
              <option value="Huasca de Ocampo">Huasca de Ocampo</option>
              <option value="Huautla">Huautla</option>
              <option value="Huazalingo">Huazalingo</option>
              <option value="Huehuetla">Huehuetla</option>
              <option value="Huejutla de Reyes">Huejutla de Reyes</option>
              <option value="Huichapan">Huichapan</option>
              <option value="Ixmiquilpan">Ixmiquilpan</option>
              <option value="Jacala de Ledezma">Jacala de Ledezma</option>
              <option value="Jaltocán">Jaltocán</option>
              <option value="Juárez Hidalgo">Juárez Hidalgo</option>
              <option value="Lolotla">Lolotla</option>
              <option value="Metepec">Metepec</option>
              <option value="San Agustín Metzquititlán">
                San Agustín Metzquititlán
              </option>
              <option value="Metztitlán">Metztitlán</option>
              <option value="Mineral del Chico">Mineral del Chico</option>
              <option value="Mineral del Monte">Mineral del Monte</option>
              <option value="La Misión">La Misión</option>
              <option value="Mixquiahuala de Juárez">
                Mixquiahuala de Juárez
              </option>
              <option value="Molango de Escamilla">Molango de Escamilla</option>
              <option value="Nicolás Flores">Nicolás Flores</option>
              <option value="Nopala de Villagrán">Nopala de Villagrán</option>
              <option value="Omitlán de Juárez">Omitlán de Juárez</option>
              <option value="San Felipe Orizatlán">San Felipe Orizatlán</option>
              <option value="Pacula">Pacula</option>
              <option value="Pachuca de Soto">Pachuca de Soto</option>
              <option value="Pisaflores">Pisaflores</option>
              <option value="Progreso de Obregón">Progreso de Obregón</option>
              <option value="Mineral de la Reforma">
                Mineral de la Reforma
              </option>
              <option value="San Agustín Tlaxiaca">San Agustín Tlaxiaca</option>
              <option value="San Bartolo Tutotepec">
                San Bartolo Tutotepec
              </option>
              <option value="San Salvador">San Salvador</option>
              <option value="Santiago de Anaya">Santiago de Anaya</option>
              <option value="Santiago Tulantepec de Lugo Guerrero">
                Santiago Tulantepec de Lugo Guerrero
              </option>
              <option value="Singuilucan">Singuilucan</option>
              <option value="Tasquillo">Tasquillo</option>
              <option value="Tecozautla">Tecozautla</option>
              <option value="Tenango de Doria">Tenango de Doria</option>
              <option value="Tepeapulco">Tepeapulco</option>
              <option value="Tepehuacán de Guerrero">
                Tepehuacán de Guerrero
              </option>
              <option value="Tepeji del Río de Ocampo">
                Tepeji del Río de Ocampo
              </option>
              <option value="Tepetitlán">Tepetitlán</option>
              <option value="Tetepango">Tetepango</option>
              <option value="Tezontepec de Aldama">Tezontepec de Aldama</option>
              <option value="Tianguistengo">Acatlán</option>
              <option value="Tizayuca">Acatlán</option>
              <option value="Tlahuelilpan">Acatlán</option>
              <option value="Tlahuiltepa">Tlahuiltepa</option>
              <option value="Tlanalapa">Tlanalapa</option>
              <option value="Tlanchinol">Tlanchinol</option>
              <option value="Tlaxcoapan">Tlaxcoapan</option>
              <option value="Tolcayuca">Tolcayuca</option>
              <option value="Tula de Allende">Tula de Allende</option>
              <option value="Tulancingo de Bravo">Tulancingo de Bravo</option>
              <option value="Villa de Tezontepec">Villa de Tezontepec</option>
              <option value="Xochiatipan">Xochiatipan</option>
              <option value="Xochicoatlán">AcatXochicoatlánlán</option>
              <option value="Yahualica">Yahualica</option>
              <option value="Zacualtipán de Ángeles">
                Zacualtipán de Ángeles
              </option>
              <option value="Zapotlán de Juárez">Zapotlán de Juárez</option>
              <option value="Zempoala">Zempoala</option>
              <option value="Zimapán">Zimapán</option>
            </select>
          </div>
          <div class="form-floating col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("Telefono")}
              minLength={10}
              maxLength={10}
              required
            ></input>
            <label class="asterisk">Telefono</label>
          </div>
          <div class="form-floating col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("Telefono_WhatsApp")}
              minLength={10}
              maxLength={10}
              required
            ></input>
            <label class="asterisk">Telefono WhastApp</label>
          </div>
          <div class="form-floating col-md-4">
            <input
              type="email"
              id="floatingInput"
              class="form-control"
              placeholder=""
              onKeyDownCapture={CambioEmail}
              {...register("Correo_Electronico")}
              maxLength={50}
              required
            ></input>
            <label class="asterisk">Correo electrónico de Contacto</label>
          </div>
          <div class="form-floating col-md-4">
            <input
              type="email"
              id="floatingInput"
              class="form-control"
              placeholder=""
              value={confirmarEmail}
              onChange={ConfirmarCambioEmail}
              maxLength={50}
              required
            ></input>
            <label class="asterisk">Confirme su Correo electrónico</label>
          </div>
          <div class="col-md-8">
            <select
              class="form-select form-select-lg mb-3"
              {...register("id_grupoVulnerable")}
              required
            >
              <option disabled selected>
                Grupo Vulnerable *
              </option>
              {obtenerDatosGrupoVulnerable.map((item) => (
                <option value={item.Id_GrupoVulnerable}>{item.Nombre}</option>
              ))}
            </select>
          </div>
          <div class="col-md-8">
            <select
              class="form-select form-select-lg mb-3"
              {...register("id_Discapacidad")}
              required
            >
              <option disabled selected>
                Discapacidad *
              </option>
              {obtenerDatosDiscapacidad.map((item) => (
                <option value={item.idDiscapacidad}>{item.Nombre}</option>
              ))}
            </select>
          </div>
          <div class="form-floating col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("No_Empleados")}
              required
            ></input>
            <label class="asterisk">Núm de Empleados</label>
          </div>
          <div class="col-md-6">
            <input
              class="form-select form-select-lg mb-3"
              type="date"
              max={nuevaFecha}
              {...register("Fecha_Inicio_Operaciones")}
              id="fecha"
              required
            ></input>
            <label class="asterisk">Fecha de inicio de Operaciones</label>
          </div>
          <div class="col-md-6">
            <select
              class="form-select form-select-lg mb-3"
              {...register("Camara_Organismo")}
              required
            >
              <option disabled selected>
                Cámara u Organismo *
              </option>
            </select>
          </div>
          <div class="form-floating col-md-6">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Sector")}
              maxLength={45}
              required
              pattern="[a-zA-Z0-9\s]+"
            ></input>
            <label class="asterisk">Sector</label>
          </div>
          <div class="col-md-6">
            <select
              class="form-select form-select-lg mb-3"
              {...register("Banco")}
              required
            >
              <option disabled selected>
                Banco *
              </option>
            </select>
          </div>
          <div class="form-floating col-md-6">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("Clabe_Interbancaria")}
              minLength={18}
              maxLength={18}
              required
            ></input>
            <label class="asterisk">Clabe interbancaria </label>
          </div>
          <div class="form-floating col-md-6">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              pattern="[0-9]+"
              {...register("Numero_de_Cuenta")}
              minLength={10}
              maxLength={10}
              required
            ></input>
            <label class="asterisk">Numero de cuenta</label>
          </div>
          <div>
            {emailsIguales ? null : (
              <p style={{ color: "red" }}>
                Los correos electrónicos no coinciden
              </p>
            )}
            <input
              class="btn btn-primary"
              type="submit"
              value="Enviar"
              disabled={!emailsIguales}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormularioAcreditado;
