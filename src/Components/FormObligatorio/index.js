/* global chrome */
import React, { PureComponent } from "react";
import ficha_obligatorios from "../../ficha_obligatorios.jpg";
import {
  addCerosDni,
  getDay,
  getMonth,
  getYear,
  getDateNow,
  isJubilado,
  isPensionado,
  isAdminPublica,
  isMunicipales,
  isPrsonalNoPermanente
} from "../../utilities";
import Row from "../Row";
import RowP from "../RowP";
import Content from "../Content";
import BackgroundImg from "../BackgroundImg";

class FormObligatorio extends PureComponent {
  render() {
    const { afiliado } = this.props;
    const { origen, entidad, anexo } = afiliado.entidad;

    const renderDniCarga = (dni, top) => {
      const arrayDni = addCerosDni(dni).split("");
      let list = [];
      let left = 439;
      arrayDni.map(digit => {
        list.push(
          <Row size={8} left={left} top={top}>
            {digit}
          </Row>
        );
        left = left + 13;
      });
      return list;
    };

    const renderListCargas = ({ cargas }) => {
      let list = [];
      let cantLoop = 1;
      let top = 329.35;
      cargas.map(data => {
        let { nombre, barra, sexo, dni } = data;
        if (cantLoop <= 5) {
          list.push(
            <Row size={7} left={78.2} top={top}>
              {nombre}
            </Row>
          );
          list.push(
            <Row size={7} left={265.2} top={top}>
              {barra}
            </Row>
          );
          list.push(
            <Row size={7} left={378.2} top={top}>
              {"DNI"}
            </Row>
          );
          list.push(
            <Row size={7} left={415.2} top={top}>
              {sexo}
            </Row>
          );
          const cargaDni = renderDniCarga(dni, top);
          list.push(cargaDni);
        }
        cantLoop++;
        top = top + 10;
      });

      return list;
    };
    return (
      <Content>
        <BackgroundImg src={ficha_obligatorios} alt="Ficha Obligatorios" />
        <Row size={8.1} left={157.4} top={102.23} fontweight={500}>
          USO DEL IOMA
        </Row>
        <Row size={8.1} left={431.51} top={102.23} fontweight={500}>
          NÚMERO DE AFILIADO
        </Row>
        <Row size={10} left={430.51} top={90.23}>
          {afiliado.numeroAfiliado}
        </Row>
        <Row size={8.1} left={144.23} top={135} fontweight={500}>
          APELLIDO Y NOMBRES
        </Row>
        <Row size={10} left={130.23} top={123.19}>
          {afiliado.nombre}
        </Row>
        <Row size={8.1} left={432.47} top={135} fontweight={500}>
          ESTADO CIVIL
        </Row>
        <Row size={10} left={432.47} top={120.99}>
          {afiliado.estadoCivil}
        </Row>
        <Row size={8.1} left={543.97} top={135} fontweight={500}>
          CÓD.
        </Row>
        <Row size={10} left={547.97} top={120.99}>
          {afiliado.estadoCivilId}
        </Row>
        <Row size={8.1} left={57.02} top={150} fontweight={500}>
          DOMICILIO
        </Row>
        <Row size={8.1} left={57.02} top={158} fontweight={500}>
          AFILIADO
        </Row>
        <Row size={8.1} left={58.27} top={167} fontweight={500}>
          DIRECTO
        </Row>
        <Row size={6} left={137.28} top={165.5}>
          CALLE - CAMINO - PARAJE - LUGAR - ESTABLECIMIENTO
        </Row>
        <Row size={10} left={137.28} top={153.61}>
          {afiliado.calle}
        </Row>
        <Row size={6} left={325.2} top={165.5}>
          NÚMERO
        </Row>
        <Row size={10} left={325.2} top={153.61}>
          {afiliado.numero}
        </Row>
        <Row size={6} left={398.84} top={165.57}>
          TIPO
        </Row>
        <Row size={10} left={385.84} top={153.57}>
          {afiliado.tipoDocumento}
        </Row>
        <Row size={6} left={436.42} top={165.57}>
          CÓD.
        </Row>
        <Row size={10} left={438.7} top={153.57}>
          {afiliado.sexo}
        </Row>
        <Row size={6} left={494.92} top={165.57}>
          NÚMERO
        </Row>
        <Row size={10} left={494.92} top={153.57}>
          {afiliado.dni}
        </Row>
        <Row size={6} left={392.85} top={176.59}>
          DOC. DE IDENTIDAD DEL AFILIADO DIRECTO
        </Row>
        <Row size={6} left={58.29} top={193}>
          PROVINCIA
        </Row>
        <Row size={10} left={58.29} top={182.59}>
          {afiliado.provincia}
        </Row>
        <Row size={6} left={124.38} top={193}>
          CÓD.
        </Row>
        <Row size={10} left={124.38} top={182.59}>
          {afiliado.provinciaCodigo}
        </Row>
        <Row size={6} left={176.24} top={193}>
          PARTIDO
        </Row>
        <Row size={10} left={147.24} top={182.59}>
          {afiliado.partido}
        </Row>
        <Row size={6} left={233.77} top={193}>
          CÓDIGO
        </Row>
        <Row size={10} left={233} top={180.59}>
          {/*`${afiliado.partidoCodigo.substr(0, 1)}`*/}
        </Row>
        <Row size={10} left={242.77} top={181.59}>
          {/*`${afiliado.partidoCodigo.substr(1, 1)}`*/}
        </Row>
        <Row size={10} left={251.5} top={183.59}>
          {/*`${afiliado.partidoCodigo.substr(2, 1)}`*/}
        </Row>
        <Row size={6} left={287.85} top={193}>
          LOCALIDAD
        </Row>
        <Row size={10} left={258.85} top={183.59}>
          {afiliado.localidad}
        </Row>
        <Row size={6} left={345.99} top={193}>
          COD.
        </Row>
        <Row size={10} left={344} top={180.59}>
          {/*`${afiliado.localidadCodigo.substr(0, 1)}`*/}
        </Row>
        <Row size={10} left={354} top={181.59}>
          {/*`${afiliado.localidadCodigo.substr(1, 1)}`*/}
        </Row>
        <Row size={6} left={100.16} top={226}>
          TELÉFONO
        </Row>
        <Row size={10} left={68.16} top={215}>
          {`${afiliado.codigoMovil}-${afiliado.telefonoMovil} / ${
            afiliado.codigoParticular
          }-${afiliado.telefonoParticular}`}
        </Row>
        <Row size={6} left={340.88} top={226}>
          E-MAIL
        </Row>
        <Row size={10} left={250.88} top={215}>
          {afiliado.email}
        </Row>
        <Row size={6} left={490.13} top={225}>
          DIA
        </Row>
        <Row size={6} left={516.85} top={225}>
          MES
        </Row>
        <Row size={6} left={546.41} top={225}>
          AÑO
        </Row>
        <Row size={10} left={490.84} top={213.67}>
          {getDay(afiliado.fechaNacimiento)}
        </Row>
        <Row size={10} left={520.84} top={213.67}>
          {getMonth(afiliado.fechaNacimiento)}
        </Row>
        <Row size={10} left={548.84} top={213.67}>
          {getYear(afiliado.fechaNacimiento)}
        </Row>
        <Row size={6} left={488.13} top={236.34}>
          FECHA DE NACIMIENTO
        </Row>
        <Row size={8.1} left={54.96} top={243.65} fontweight={500}>
          DOMICILIO
        </Row>
        <Row size={8.1} left={61.77} top={250.67} fontweight={500}>
          LUGAR
        </Row>
        <Row size={8.1} left={52.51} top={258.53} fontweight={500}>
          DE TRABAJO
        </Row>
        <Row size={6} left={174.54} top={256.23}>
          CALLE - CAMINO - PARAJE - LUGAR
        </Row>
        <Row size={6} left={324.98} top={256.23}>
          NÚMERO
        </Row>
        <Row size={6} left={58.29} top={286.87}>
          PROVINCIA
        </Row>
        <Row size={6} left={124.38} top={286.87}>
          CÓD.
        </Row>
        <Row size={6} left={176.24} top={286.87}>
          PARTIDO
        </Row>
        <Row size={6} left={244.77} top={286.87}>
          CÓDIGO
        </Row>
        <Row size={6} left={287.85} top={286.87}>
          LOCALIDAD
        </Row>
        <Row size={6} left={345.99} top={286.87}>
          COD.
        </Row>
        <Row size={6} left={460.62} top={286.87}>
          N° CUIL/CUIT
        </Row>
        <Row size={10} left={450.62} top={273.87}>
          {afiliado.cuit}
        </Row>
        <Row size={10} left={104.2} top={305.55}>
          FAMILIARES A CARGO
        </Row>
        <Row size={7} left={283.81} top={300.55}>
          FECHA NACIM.
        </Row>
        <Row size={8} left={344.41} top={305.55}>
          CÓD.
        </Row>
        <Row size={8} left={344.41} top={313.55}>
          PAR.
        </Row>
        <Row size={8} left={391.74} top={302.31}>
          DOCUMENTO DE IDENTIDAD
        </Row>
        <Row size={8} left={540} top={305.55}>
          CÓD.
        </Row>
        <Row size={8} left={540} top={313.55}>
          ALTA
        </Row>
        <Row size={7} left={104.2} top={318.35}>
          APELLIDO Y NOMBRES
        </Row>
        {renderListCargas(afiliado)}
        <Row size={5} left={259.81} top={318.09}>
          BARRA
        </Row>
        <Row size={6} left={283.82} top={318.09}>
          DÍA
        </Row>
        <Row size={6} left={301.83} top={318.09}>
          MES
        </Row>
        <Row size={6} left={319.78} top={318.09}>
          AÑO
        </Row>
        <Row size={6} left={378.26} top={318.09}>
          TIPO
        </Row>
        <Row size={6} left={411.05} top={318.09}>
          CÓD.
        </Row>
        <Row size={6} left={469.94} top={318.09}>
          NÚMERO
        </Row>
        <Row size={7} left={104.2} top={413.15}>
          LUGAR Y FECHA
        </Row>
        <Row size={10} left={80.2} top={400.15}>
          {`${afiliado.localidad}  ${getDateNow()}`}
        </Row>
        <Row size={7} left={275.09} top={413.15}>
          FIRMA AFILIADO
        </Row>
        <Row size={7} left={436.9} top={413.15}>
          FIRMA RESP. IOMA
        </Row>
        <Row size={9} left={28.58} top={427.95}>
          PARA USO EXCLUSIVO DEL IOMA
        </Row>
        <Row size={8} left={62.74} top={445.82}>
          02
        </Row>
        <Row size={8} left={77.74} top={445.82}>
          {isJubilado(origen)}
        </Row>
        <Row size={8} left={108.63} top={445.82}>
          JUBILADO
        </Row>
        <Row size={8} left={62.74} top={460.82}>
          03
        </Row>
        <Row size={8} left={77.74} top={460.82}>
          {isPensionado(origen)}
        </Row>
        <Row size={8} left={108.63} top={460.82}>
          PENSIONADO
        </Row>
        <Row size={8} left={62.74} top={477.82}>
          01
        </Row>
        <Row size={8} left={77.74} top={477.82}>
          {isAdminPublica(origen)}
        </Row>
        <Row size={8} left={98.63} top={477.82}>
          ADM. PÚBL. PROV.
        </Row>
        <Row size={8} left={62.74} top={490.82}>
          04
        </Row>
        <Row size={8} left={77.74} top={490.82}>
          {isMunicipales(origen)}
        </Row>
        <Row size={8} left={100.63} top={490.82}>
          MUNICIPALES
        </Row>
        <Row size={8} left={62.74} top={503.82}>
          10
        </Row>
        <Row size={8} left={77.74} top={503.82}>
          {isPrsonalNoPermanente(origen)}
        </Row>
        <Row size={7} left={90.63} top={503.82}>
          PERS. NO PERMANENTE
        </Row>
        <Row size={8} left={198} top={445.82}>
          1
        </Row>
        <Row size={8} left={210} top={445.82}>
          {" "}
        </Row>
        <Row size={7} left={220} top={445.82}>
          AFIL. DIRECTO
        </Row>
        <Row size={8} left={198} top={460.82}>
          2
        </Row>
        <Row size={8} left={210} top={460.82}>
          {" "}
        </Row>
        <Row size={7} left={220} top={460.82}>
          AFIL. A CARGO
        </Row>
        <Row size={8} left={198} top={477.82}>
          3
        </Row>
        <Row size={8} left={210} top={477.82}>
          {""}
        </Row>
        <Row size={7} left={232} top={477.82}>
          ALTA
        </Row>
        <Row size={8} left={198} top={490.82}>
          4
        </Row>
        <Row size={8} left={210} top={490.82}>
          {" "}
        </Row>
        <Row size={7} left={220} top={490.82}>
          MODIFICACIÓN
        </Row>
        <Row size={8} left={198} top={503.82}>
          5
        </Row>
        <Row size={8} left={210} top={503.82}>
          {" "}
        </Row>
        <Row size={7} left={220} top={503.82}>
          RENOVACIÓN
        </Row>
        <Row size={8} left={360} top={490.82}>
          {/*legajo*/}
        </Row>
        <Row size={7} left={316} top={506.82}>
          NÚMERO BENEFICIO O LEGAJO
        </Row>
        <Row size={9} left={299.59} top={446.82}>
          {/*ingresoDay*/}
        </Row>
        <Row size={8} left={299.59} top={460.82}>
          DIA
        </Row>
        <Row size={9} left={326.92} top={446.82}>
          {/*ingresoMonth*/}
        </Row>
        <Row size={8} left={326.92} top={460.82}>
          MES
        </Row>
        <Row size={9} left={355.32} top={446.82}>
          {/*ingresoYear*/}
        </Row>
        <Row size={7} left={355.32} top={460.82}>
          AÑO
        </Row>
        <Row size={8} left={292.78} top={472.03}>
          FECHA DE INGRESO
        </Row>
        <Row size={9} left={400} top={446.82}>
          {/*seceMonth*/}
        </Row>
        <Row size={8} left={400} top={460.82}>
          MES
        </Row>
        <Row size={9} left={425.5} top={446.82}>
          {/*seceYear*/}
        </Row>
        <Row size={7} left={425.5} top={460.82}>
          AÑO
        </Row>
        <Row size={8} left={395.5} top={472.03}>
          FECHA SECE
        </Row>
        <Row size={10} left={472.5} top={446.82}>
          {`${entidad ? entidad.substr(0, 1) : ""}`}
        </Row>
        <Row size={10} left={486.5} top={446.82}>
          {`${entidad ? entidad.substr(1, 1) : ""}`}
        </Row>
        <Row size={10} left={500.5} top={446.82}>
          {`${entidad ? entidad.substr(2, 1) : ""}`}
        </Row>
        <Row size={10} left={514.5} top={446.82}>
          {`${entidad ? entidad.substr(3, 1) : ""}`}
        </Row>
        <Row size={10} left={529.5} top={446.82}>
          {`${entidad ? entidad.substr(4, 1) : ""}`}
        </Row>
        <Row size={7} left={484.5} top={460.82}>
          CÓDIGO
        </Row>
        <Row size={10} left={544.7} top={446.82}>
          {`${anexo ? anexo.substr(0, 1) : ""}`}
        </Row>
        <Row size={10} left={558.7} top={446.82}>
          {`${anexo ? anexo.substr(1, 1) : ""}`}
        </Row>
        <Row size={5} left={542.7} top={460.82}>
          SUB.COD.
        </Row>
        <Row size={8} left={476.5} top={472}>
          LUGAR DE TRABAJO
        </Row>
        <RowP size={9} left={28.42} top={523.37}>
          CERTIFICACIÓN DE FIRMA, CARGO Y APORTES PARA EL PERSONAL EN ACTIVIDAD
          DEPENDIENTE DE LOS PODERESEJECUTIVO, LEGISLATIVO Y JUDICIAL,
          ORGANISMOS DE LA CONSTITUCIÓN, MUNICIPALIDADES ADHERIDAS Y JUBILADOS Y
          PENSIONADOS DE LAS CAJAS DE LA PROVINCIA DE BUENOS AIRES
        </RowP>
        <Row size={9} left={28.42} top={566.1} fontweight={400}>
          AGENTES EN ACTIVIDAD
        </Row>
        <Row size={9} left={305.47} top={573.6} fontweight={400}>
          CERTIFICO que la rma que antecede es auténtica y pertenece a
        </Row>
        <Row size={9} left={28.42} top={586.6} fontweight={400}>
          (Nombres y Apellido)
        </Row>
        <Row size={9} left={278.27} top={586.6} fontweight={400}>
          M.I. o C.I.
        </Row>
        <Row size={9} left={465.57} top={586.6} fontweight={400}>
          quien presta servicios en
        </Row>
        <Row size={9} left={28.42} top={601.48} fontweight={400}>
          (Dependencia)
        </Row>
        <Row size={9} left={320.53} top={599.48} fontweight={400}>
          dependiente de (Ministerio, Municipalidad, Organismo, etc.)
        </Row>
        <Row size={9} left={293.98} top={612.58} fontweight={400}>
          habiendo sido designado como (Titular, Mensual, Jornalizado, etc.)
        </Row>
        <Row size={9} left={215.91} top={625.79} fontweight={400}>
          por (Decreto, Resolución, etc.)
        </Row>
        <Row size={9} left={443.66} top={627.1} fontweight={400}>
          Legajo Contaduría
        </Row>
        <Row size={9} left={28.33} top={639.88} fontweight={400}>
          Provincia o Interno Repartición N°
        </Row>
        <Row size={9} left={195.04} top={639.88} fontweight={400}>
          ingresó el
        </Row>
        <Row size={9} left={298.86} top={639.88} fontweight={400}>
          y cesará el
        </Row>
        <RowP size={9} left={188.8} top={660.95} fontweight={400}>
          Al nombrado se le efectúan sobre sus haberes los descuentos y aportes
          determinados por Ley en concepto de cuota afiliatoria.
        </RowP>
        <Row size={9} left={28.47} top={712.7} fontweight={400}>
          LUGAR Y FECHA
        </Row>
        <Row size={9} left={276.06} top={720.89} fontweight={400}>
          SELLO REPART.
        </Row>
        <Row size={7} left={385.71} top={720.01} fontweight={400}>
          FIRMA Y SELLO FUNCIONARIO CERTIFICANTE
        </Row>
        <RowP size={9} left={28.22} top={734.02}>
          JUBILADOS Y PENSIONADOS DE LAS CAJAS DE LA PROVINCIA DE BUENOS AIRES
        </RowP>
        <Row size={7} left={239.07} top={758.12} fontweight={400}>
          quien es JUBILADO ( ) o PENSIONADO ( ) N°
        </Row>
        <Row size={7} left={28.1} top={772.21} fontweight={400}>
          de la CAJA
        </Row>
        <Row size={7} left={74.95} top={808.48} fontweight={400}>
          LUGAR Y FECHA
        </Row>
        <Row size={7} left={246.01} top={808.52} fontweight={400}>
          FIRMA Y SELLO FUNCIONARIO CERTIFICANTE
        </Row>
        <Row size={7} left={477.24} top={808.41} fontweight={400}>
          FIRMA DEL AFILIADO
        </Row>
      </Content>
    );
  }
}

export default FormObligatorio;
