import { __values } from "tslib";

const DataAfiliadoMock = () => {
  return {
    nombre: "Alejo Bianchi",
    dni: 31624988,
    numeroAfiliado: 131624988200,
    cuit: 20316249885,
    estadoCivil: "Soltero",
    estadoCivilId: "1",
    sexo: "1",
    fechaNacimiento: "30/04/1985",
    origen: 10,
    entidad: "IOMA",
    anexo: 1,
    tipoAfiliado: "obligatorio",
    tipoBarra: "titular",
    tipoDocumento: "dni",
    codigoPostal: "7130",
    partido: "Chascomus",
    partidoCodigo: "217",
    localidad: "Chascomus",
    localidadCodigo: "01",
    provincia: "Bs. As.",
    provinciaCodigo: "B",
    calle: "Julian Quintana",
    numero: 109,
    piso: 0,
    depto: 0,
    telefonoParticular: "422687",
    codigoParticular: "2241",
    telefonoMovil: "6051098",
    codigoMovil: "2241",
    email: "alejobianchi@gmail.com",
    cargas: [
      {
        nombre: "Tina Bianchi",
        dni: 55261263,
        numeroAfiliado: 131624988202,
        cuit: 27552612634,
        estadoCivil: "Soltero",
        sexo: "F",
        fechaNacimiento: "28/12/2015",
        origen: 10,
        entidad: "IOMA",
        anexo: 1,
        tipoAfiliado: "obligatorio",
        tipoBarra: "hijo menor de 21",
        tipoDocumentp: "dni",
        codigoPostal: "7130",
        partido: "Chascomus",
        localidad: "Chascomus",
        calle: "Julian Quintana",
        numero: 109,
        piso: 0,
        depto: 0,
        telefonoFijo: "2216051098",
        telefonoMovil: "2216051098",
        email: "alejobianchi@gmail.com"
      }
    ]
  };
};

const getElementsByNameDom = (name, index) => {
  let result = "";
  if (document.getElementsByName(name)[index]) {
    result = document.getElementsByName(name)[index].value
      ? document.getElementsByName(name)[index].value
      : "";
  }
  return result;
};

const getTipoAfiliado = tipo => {
  switch (tipo) {
    case "O":
      return "OBLIGATORIO";
    case "C":
      return "CONVENIO";
    case "V":
      return "VOLUNTARIO";
    case "D":
      return "DE OTRA PROVINCIA";
    case "B":
      return "BENEFICIARIO";
    default:
      return "No Especificado";
  }
};

const parseSexoToNumber = intSexo => {
  switch (intSexo) {
    case "Masculino":
      return 1;
    case "Femenino":
      return 2;
    case "Mujer":
      return 2;
    case "Hombre":
      return 1;
    default:
      return 0;
  }
};

//Ver codigos
const parseEstadoCivilToInt = intEstadoCivil => {
  switch (intEstadoCivil) {
    case "Soltero":
      return "1";
    case "Casado":
      return "2";
    case "Viudo":
      return "3";
    case "Divorciado":
      return "4";
    case "Separado legal":
      return "5";
    case "Separado de hecho":
      return "6";
    case "Conviviente":
      return "7";
    default:
      return "Falta codigo";
  }
};

const getDay = day => {
  return day ? day.substr(0, 2) : "00";
};

const getMonth = month => {
  return month ? month.substr(3, 2) : "00";
};

const getYear = year => {
  return year ? year.substr(8, 2) : "00";
};

const getBarra = numeroAfiliado => {
  return numeroAfiliado ? numeroAfiliado.substr(11, 2) : " ";
};

const getDateNow = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "/" + mm + "/" + yyyy;
};

const isTrue = value => {
  return value ? "X" : "";
};

const parseEntidad = entidadFull => {
  const array = entidadFull.split(" ");
  const entidad = array[array.length - 1].split("-");
  let parse = {
    origen: "",
    entidad: "",
    anexo: ""
  };
  switch (entidad.length) {
    case 1:
      parse.origen = entidad[0].replace("(", "").replace(")", "");
      break;
    case 2:
      parse.origen = entidad[0].replace("(", "");
      parse.entidad = entidad[1].replace(")", "");
      break;
    case 3:
      parse.origen = entidad[0].replace("(", "");
      parse.entidad = entidad[1];
      parse.anexo = entidad[2].replace(")", "");
      break;
  }
  return parse;
};

const getCantidadCargas = () => {
  return document.getElementById("example").children[1].children.length;
};

const getCargaObjet = cells => {
  return {
    nombre: cells[0].textContent,
    sexo: parseSexoToNumber(cells[1].textContent),
    dni: cells[2].textContent,
    numeroAfiliado: cells[3].textContent,
    barra: cells[3].textContent.substr(11, 2)
  };
};

const getCargas = () => {
  let cantidadCargas = getCantidadCargas();
  const children = document.getElementById("example").children[1].children;
  let cargas = [];
  while (cantidadCargas--) {
    cargas.push(getCargaObjet(children[cantidadCargas].cells));
  }
  return cargas;
};

const addCerosDni = dni => {
  const cantidadCeldas = 8;
  let x = cantidadCeldas - dni.length;
  dni = "0".repeat(x) + dni;
  return dni;
};

const isJubilado = value => {
  return value === "02" ? "X" : " ";
};

const isPensionado = value => {
  return value === "03" ? "X" : " ";
};

const isAdminPublica = value => {
  return value === "01" ? "X" : " ";
};

const isMunicipales = value => {
  return value === "04" ? "X" : " ";
};

const isPrsonalNoPermanente = value => {
  return value === "10" ? "X" : " ";
};

const DataAfiliado = () => {
  return {
    nombre: getElementsByNameDom("T1", 0),
    dni: getElementsByNameDom("nro_doc", 0).trim(),
    numeroAfiliado: getElementsByNameDom("nro_afiliado", 0).trim(),
    barra: getBarra(getElementsByNameDom("nro_afiliado", 0)).trim(),
    cuit: getElementsByNameDom("cuil", 0),
    estadoCivil: getElementsByNameDom("estado_civil_id", 0).trim(),
    estadoCivilId: parseEstadoCivilToInt(
      getElementsByNameDom("estado_civil_id", 0).trim()
    ),
    sexo: parseSexoToNumber(getElementsByNameDom("sexo", 0).trim()),
    fechaNacimiento: getElementsByNameDom("fecha_nacimiento", 0).replace(
      /\s/g,
      ""
    ),
    entidadFull: getElementsByNameDom("situacion_id", 0),
    entidad: parseEntidad(getElementsByNameDom("situacion_id", 0)),
    tipoIncorporacion: getElementsByNameDom("tipo_inc", 0),
    parentesco: getElementsByNameDom("parentesco_id", 0),
    tipoAfiliado: getTipoAfiliado(getElementsByNameDom("tipAfil", 0)).replace(
      /\s/g,
      ""
    ),
    tipoDocumento: getElementsByNameDom("empresa", 0).trim(),
    fechaAlta: getElementsByNameDom("fAlta", 0).trim(),
    fechaUltimoEstado: getElementsByNameDom("fAlta", 1).trim(),
    fechaSegudaPresentacion: getElementsByNameDom(
      "fAltaPrestacional",
      0
    ).trim(),
    fechaBaja: getElementsByNameDom("fecha_baja", 0).trim(),
    fechaRenovacion: getElementsByNameDom("fAlta", 2).trim(),
    codigoPostal: getElementsByNameDom("cp", 0).trim(),
    partido: getElementsByNameDom("partido", 0),
    partidoCodigo: "217",
    localidad: getElementsByNameDom("localidad", 0),
    localidadCodigo: "01",
    provincia: "Bs. As.",
    provinciaCodigo: "B",
    calle: getElementsByNameDom("txtCalle", 0),
    numero: getElementsByNameDom("txtNro", 0).trim(),
    piso: getElementsByNameDom("txtPiso", 0).trim(),
    depto: getElementsByNameDom("txtDpto", 0),
    telefonoParticular: getElementsByNameDom("txtTel", 0).trim(),
    codigoParticular: getElementsByNameDom("txtArea", 0).trim(),
    telefonoMovil: getElementsByNameDom("movil", 0).trim(),
    codigoMovil: getElementsByNameDom("telefono", 0).trim(),
    email: getElementsByNameDom("txtEmail", 0).trim(),
    cargas: getCargas()
  };
};

export {
  DataAfiliado,
  DataAfiliadoMock,
  getTipoAfiliado,
  parseSexoToNumber,
  parseEstadoCivilToInt,
  getDay,
  getMonth,
  getYear,
  getDateNow,
  getBarra,
  isTrue,
  parseEntidad,
  getCargas,
  isJubilado,
  isPensionado,
  isAdminPublica,
  isMunicipales,
  isPrsonalNoPermanente,
  addCerosDni
};
