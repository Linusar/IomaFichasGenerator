import React, { Component } from "react";
import { DataAfiliado } from "../../utilities";
import ficha_obligatorios from "../../ficha_obligatorios.jpg";
import "./FormEstudiante.css";
import ReactToPrint from 'react-to-print';

class FormEstudiante extends Component {
  render() {
    const afiliado = DataAfiliado();
    
    return (

        <div className="Content">
            <div className="ImgPos">
            <img
                      src={ficha_obligatorios}
                      className="Background"
                      alt="Ficha Obligatorios"
                    />
            </div>
            <div className="cls_003"><span className="cls_003">FICHA PARA AFILIADOS OBLIGATORIOS</span></div>
            <div className="cls_004"><span className="cls_004">USO DEL IOMA</span></div>
            <div className="cls_004a"><span className="cls_004">NÚMERO DE AFILIADO</span></div>
            <div className="cls_004ab"><span className="cls_004ab">{afiliado.numeroAfiliado}</span></div>
            <div className="cls_004b"><span className="cls_004">APELLIDO Y NOMBRES</span></div>
            <div className="cls_004bb"><span className="cls_004bb">{'afiliado.nombre'}</span></div>
            <div className="cls_004c"><span className="cls_004">ESTADO CIVIL</span></div>
            <div className="cls_004cb"><span className="cls_004cb">{afiliado.estadoCivil}</span></div>
            <div className="cls_004d"><span className="cls_004">CÓD.</span></div>
            <div className="cls_004db"><span className="cls_004db">{afiliado.estadoCivilId}</span></div>
            <div className="cls_004e"><span className="cls_004">DOMICILIO</span></div>
            <div className="cls_004f"><span className="cls_004">AFILIADO</span></div>
            <div className="cls_004g"><span className="cls_004">DIRECTO</span></div>
            <div className="position:absolute;left:148.28px;top:171.61px" className="cls_005"><span className="cls_005">CALLE - CAMINO - PARAJE - LUGAR - ESTABLECIMIENTO</span></div>
            <div className="cls_005aa"><span className="cls_005aa">{`${afiliado.calle} ${afiliado.numero}`}</span></div>
            <div className="position:absolute;left:325.20px;top:171.59px" className="cls_005"><span className="cls_005">NÚMERO</span></div>
            <div className="position:absolute;left:398.84px;top:172.57px" className="cls_005"><span className="cls_005">TIPO</span></div>
            <div className="position:absolute;left:436.42px;top:172.55px" className="cls_005"><span className="cls_005">CÓD.</span></div>
            <div className="position:absolute;left:494.92px;top:172.55px" className="cls_005"><span className="cls_005">NÚMERO</span></div>
            <div className="position:absolute;left:392.85px;top:180.59px" className="cls_004"><span className="cls_004">DOC. DE IDENTIDAD DEL  AFILIADO DIRECTO</span></div>
            <div className="position:absolute;left:58.29px;top:199.98px" className="cls_005"><span className="cls_005">PROVINCIA</span></div>
            <div className="position:absolute;left:124.38px;top:200.00px" className="cls_005"><span className="cls_005">CÓD.</span></div>
            <div className="position:absolute;left:176.24px;top:200.04px" className="cls_005"><span className="cls_005">PARTIDO</span></div>
            <div className="position:absolute;left:233.77px;top:200.09px" className="cls_005"><span className="cls_005">CÓDIGO</span></div>
            <div className="position:absolute;left:287.85px;top:200.04px" className="cls_005"><span className="cls_005">LOCALIDAD</span></div>
            <div className="position:absolute;left:344.99px;top:200.06px" className="cls_005"><span className="cls_005">COD.</span></div>
            <div className="position:absolute;left:98.16px;top:230.99px" className="cls_004"><span className="cls_004">TELÉFONO</span></div>
            <div className="position:absolute;left:340.88px;top:230.99px" className="cls_004"><span className="cls_004">E-MAI L</span></div>
            <div className="position:absolute;left:489.84px;top:231.67px" className="cls_005"><span className="cls_005">DIA</span></div>
            <div className="position:absolute;left:516.85px;top:231.67px" className="cls_005"><span className="cls_005">MES</span></div>
            <div className="position:absolute;left:546.41px;top:231.54px" className="cls_005"><span className="cls_005">AÑO</span></div>
            <div className="position:absolute;left:486.13px;top:240.34px" className="cls_004"><span className="cls_004">FECHA DE NACIMIENTO</span></div>
            <div className="position:absolute;left:54.96px;top:246.65px" className="cls_004"><span className="cls_004">DOMICILIO</span></div>
            <div className="position:absolute;left:61.77px;top:253.67px" className="cls_004"><span className="cls_004">LUGAR</span></div>
            <div className="position:absolute;left:52.51px;top:261.53px" className="cls_004"><span className="cls_004">DE TRABAJO</span></div>
            <div className="position:absolute;left:174.54px;top:263.23px" className="cls_005"><span className="cls_005">CALLE - CAMINO - PARAJE - LUGAR</span></div>
            <div className="position:absolute;left:324.98px;top:263.23px" className="cls_005"><span className="cls_005">NÚMERO</span></div>
            <div className="position:absolute;left:58.94px;top:292.87px" className="cls_005"><span className="cls_005">PROVINCIA</span></div>
            <div className="position:absolute;left:123.46px;top:292.87px" className="cls_005"><span className="cls_005">CÓD.</span></div>
            <div className="position:absolute;left:182.12px;top:292.87px" className="cls_005"><span className="cls_005">PARTIDO</span></div>
            <div className="position:absolute;left:246.06px;top:292.87px" className="cls_005"><span className="cls_005">CÓDIGO</span></div>
            <div className="position:absolute;left:292.37px;top:292.87px" className="cls_005"><span className="cls_005">LOCALIDAD</span></div>
            <div className="position:absolute;left:346.54px;top:292.87px" className="cls_005"><span className="cls_005">CÓD.</span></div>
            <div className="position:absolute;left:390.62px;top:290.39px" className="cls_004"><span className="cls_004">MINISTERIO-REPARTIC.-MUNIC.-CAJA PREV.</span></div>
            <div className="position:absolute;left:104.20px;top:307.55px" className="cls_006"><span className="cls_006">FAMILIARES A CARGO</span></div>
            <div className="position:absolute;left:283.81px;top:308.31px" className="cls_004"><span className="cls_004">FECHA NACIM.</span></div>
            <div className="position:absolute;left:344.41px;top:309.77px" className="cls_004"><span className="cls_004">CÓD.</span></div>
            <div className="position:absolute;left:391.74px;top:308.31px" className="cls_004"><span className="cls_004">DOCUMENTO DE IDENTIDAD</span></div>
            <div className="position:absolute;left:541.49px;top:307.91px" className="cls_004"><span className="cls_004">CÓD.</span></div>
            <div className="position:absolute;left:345.94px;top:318.33px" className="cls_004"><span className="cls_004">PAR.</span></div>
            <div className="position:absolute;left:541.15px;top:317.51px" className="cls_004"><span className="cls_004">ALTA</span></div>
            <div className="position:absolute;left:105.76px;top:321.35px" className="cls_004"><span className="cls_004">APELLIDO Y NOMBRES</span></div>
            <div className="position:absolute;left:259.81px;top:323.09px" className="cls_005"><span className="cls_005">BARRA</span></div>
            <div className="position:absolute;left:283.82px;top:323.09px" className="cls_005"><span className="cls_005">DÍA</span></div>
            <div className="position:absolute;left:301.83px;top:323.09px" className="cls_005"><span className="cls_005">MES</span></div>
            <div className="position:absolute;left:319.78px;top:323.09px" className="cls_005"><span className="cls_005">AÑO</span></div>
            <div className="position:absolute;left:378.26px;top:322.61px" className="cls_005"><span className="cls_005">TIPO</span></div>
            <div className="position:absolute;left:411.05px;top:322.63px" className="cls_005"><span className="cls_005">CÓD.</span></div>
            <div className="position:absolute;left:469.94px;top:322.63px" className="cls_005"><span className="cls_005">NÚMERO</span></div>
            <div className="position:absolute;left:96.09px;top:420.11px" className="cls_007"><span className="cls_007">LUGAR Y FECHA</span></div>
            <div className="position:absolute;left:281.66px;top:420.15px" className="cls_007"><span className="cls_007">FIRMA  AFILIADO</span></div>
            <div className="position:absolute;left:409.90px;top:420.15px" className="cls_007"><span className="cls_007">FIRMA RESP. IOMA Cert. Datos y Parentescos</span></div>
            <div className="position:absolute;left:27.58px;top:433.95px" className="cls_008"><span className="cls_008">PARA USO EXCLUSIVO DEL IOMA</span></div>
            <div className="position:absolute;left:62.74px;top:450.82px" className="cls_009"><span className="cls_009">02</span></div>
            <div className="position:absolute;left:108.63px;top:449.85px" className="cls_004"><span className="cls_004">JUBILADO</span></div>
            <div className="position:absolute;left:197.73px;top:451.17px" className="cls_009"><span className="cls_009">1</span></div>
            <div className="position:absolute;left:221.64px;top:450.60px" className="cls_009"><span className="cls_009">AFIL. DIRECTO</span></div>
            <div className="position:absolute;left:62.74px;top:464.67px" className="cls_009"><span className="cls_009">03</span></div>
            <div className="position:absolute;left:101.94px;top:464.95px" className="cls_009"><span className="cls_009">PENSIONADO</span></div>
            <div className="position:absolute;left:197.73px;top:464.18px" className="cls_009"><span className="cls_009">2</span></div>
            <div className="position:absolute;left:220.86px;top:464.94px" className="cls_009"><span className="cls_009">AFIL. A CARGO</span></div>
            <div className="position:absolute;left:299.59px;top:466.75px" className="cls_005"><span className="cls_005">DÍA</span></div>
            <div className="position:absolute;left:326.92px;top:466.75px" className="cls_005"><span className="cls_005">MES</span></div>
            <div className="position:absolute;left:355.32px;top:466.75px" className="cls_005"><span className="cls_005">AÑO</span></div>
            <div className="position:absolute;left:399.30px;top:466.75px" className="cls_005"><span className="cls_005">MES</span></div>
            <div className="position:absolute;left:429.12px;top:466.75px" className="cls_005"><span className="cls_005">AÑO</span></div>
            <div className="position:absolute;left:493.95px;top:466.63px" className="cls_005"><span className="cls_005">CÓDIGO</span></div>
            <div className="position:absolute;left:542.70px;top:467.08px" className="cls_019"><span className="cls_019">SUB.COD.</span></div>
            <div className="position:absolute;left:300.78px;top:476.03px" className="cls_009"><span className="cls_009">FECHA DE INGRESO</span></div>
            <div className="position:absolute;left:398.95px;top:476.03px" className="cls_009"><span className="cls_009">FECHA CESE</span></div>
            <div className="position:absolute;left:483.50px;top:476.03px" className="cls_009"><span className="cls_009">LUGAR DE TRABAJO</span></div>
            <div className="position:absolute;left:63.02px;top:480.83px" className="cls_009"><span className="cls_009">01</span></div>
            <div className="position:absolute;left:97.38px;top:480.26px" className="cls_009"><span className="cls_009">ADM. PÚBL. PROV.</span></div>
            <div className="position:absolute;left:197.73px;top:481.11px" className="cls_009"><span className="cls_009">3</span></div>
            <div className="position:absolute;left:234.27px;top:480.59px" className="cls_009"><span className="cls_009">ALTA</span></div>
            <div className="position:absolute;left:62.74px;top:494.63px" className="cls_009"><span className="cls_009">04</span></div>
            <div className="position:absolute;left:107.57px;top:494.80px" className="cls_009"><span className="cls_009">MUNICIPALES</span></div>
            <div className="position:absolute;left:197.73px;top:493.90px" className="cls_009"><span className="cls_009">4</span></div>
            <div className="position:absolute;left:219.82px;top:493.87px" className="cls_009"><span className="cls_009">MODIFICACIÓN</span></div>
            <div className="position:absolute;left:62.17px;top:509.15px" className="cls_009"><span className="cls_009">10</span></div>
            <div className="position:absolute;left:90.66px;top:509.16px" className="cls_009"><span className="cls_009">PERS. NO PERMANENTE</span></div>
            <div className="position:absolute;left:197.73px;top:508.59px" className="cls_009"><span className="cls_009">5</span></div>
            <div className="position:absolute;left:222.18px;top:508.23px" className="cls_009"><span className="cls_009">RENOVACIÓN</span></div>
            <div className="position:absolute;left:316.26px;top:510.23px" className="cls_004"><span className="cls_004">NÚMERO BENEFICIO O LEGAJO</span></div>
            <div className="position:absolute;left:28.42px;top:533.37px" className="cls_002"><span className="cls_002">CERTIFICACIÓN DE FIRMA, CARGO Y APORTES PARA EL PERSONAL EN ACTIVIDAD DEPENDIENTE DE LOS PODERESEJECUTIVO,</span></div>
            <div className="position:absolute;left:472.63px;top:543.83px" className="cls_002"><span className="cls_002">Y PENSIONADOS DE</span></div>
            <div className="position:absolute;left:27.75px;top:543.78px" className="cls_002"><span className="cls_002">LEGISLATIVO Y JUDICIAL, ORGANISMOS DE LA CONSTITUCIÓN, MUNICIPALIDADES ADHERIDAS Y JUBILADOS</span></div>
            <div className="position:absolute;left:27.84px;top:554.24px" className="cls_002"><span className="cls_002">LAS CAJAS DE LA PROVINCIA DE BUENOS AIRES</span></div>
            <div className="position:absolute;left:28.20px;top:570.19px" className="cls_010"><span className="cls_010">AGENTES EN ACTIVIDAD</span></div>
            <div className="position:absolute;left:215.47px;top:573.60px" className="cls_011"><span className="cls_011">CERTIFICO que la  rma que antecede es auténtica y pertenece a (Nombres y Apellido)</span></div>
            <div className="position:absolute;left:278.27px;top:587.70px" className="cls_011"><span className="cls_011">M.I. o C.I.</span></div>
            <div className="position:absolute;left:465.57px;top:589.57px" className="cls_011"><span className="cls_011">q uie n presta servicios en</span></div>
            <div className="position:absolute;left:28.26px;top:601.48px" className="cls_011"><span className="cls_011">(Dependencia)</span></div>
            <div className="position:absolute;left:320.53px;top:602.42px" className="cls_011"><span className="cls_011">dependiente de (Ministerio, Municipalidad, Organismo, etc.)</span></div>
            <div className="position:absolute;left:293.98px;top:615.58px" className="cls_011"><span className="cls_011">habiendo sido designado como (Titular, Mensual, Jornalizado, etc.)</span></div>
            <div className="position:absolute;left:215.91px;top:627.79px" className="cls_011"><span className="cls_011">por (Decreto, Resolución, etc.)</span></div>
            <div className="position:absolute;left:443.66px;top:628.10px" className="cls_011"><span className="cls_011">Legajo Contaduría Provincia o</span></div>
            <div className="position:absolute;left:28.33px;top:641.88px" className="cls_011"><span className="cls_011">Interno Repartición N°</span></div>
            <div className="position:absolute;left:195.04px;top:641.88px" className="cls_011"><span className="cls_011">ingresó el</span></div>
            <div className="position:absolute;left:256.30px;top:641.88px" className="cls_011"><span className="cls_011">/</span></div>
            <div className="position:absolute;left:276.53px;top:641.88px" className="cls_011"><span className="cls_011">/</span></div>
            <div className="position:absolute;left:298.86px;top:641.88px" className="cls_011"><span className="cls_011">y cesará el</span></div>
            <div className="position:absolute;left:360.03px;top:641.88px" className="cls_011"><span className="cls_011">/</span></div>
            <div className="position:absolute;left:382.36px;top:641.88px" className="cls_011"><span className="cls_011">/</span></div>
            <div className="position:absolute;left:188.80px;top:660.95px" className="cls_012"><span className="cls_012">Al nombrado se le efectúan sobre sus haberes los descuentos y aportes determinados</span></div>
            <div className="position:absolute;left:27.66px;top:670.20px" className="cls_013"><span className="cls_013">por Ley en concepto de cuota </span><span className="cls_014">a liatoria.</span></div>
            <div className="position:absolute;left:27.47px;top:718.70px" className="cls_015"><span className="cls_015">LUGAR Y FECHA</span></div>
            <div className="position:absolute;left:276.06px;top:720.89px" className="cls_007"><span className="cls_007">SELLO REPART.</span></div>
            <div className="position:absolute;left:397.71px;top:725.01px" className="cls_007"><span className="cls_007">FIRMA Y SELLO FUNCIONARIO CERTIFICANTE</span></div>
            <div className="position:absolute;left:28.22px;top:744.02px" className="cls_016"><span className="cls_016">JUBILADOS Y PENSIONADOS DE LAS CAJAS DE LA PROVINCIA DE BUENOS AIRES</span></div>
            <div className="position:absolute;left:237.07px;top:761.12px" className="cls_018"><span className="cls_018">quien es JUBILADO (  ) o PENSIONADO (  ) N°</span></div>
            <div className="position:absolute;left:28.10px;top:776.21px" className="cls_018"><span className="cls_018">de la CAJA</span></div>
            <div className="position:absolute;left:74.95px;top:813.48px" className="cls_007"><span className="cls_007">LUGAR Y FECHA</span></div>
            <div className="position:absolute;left:256.01px;top:813.52px" className="cls_007"><span className="cls_007">FIRMA Y SELLO FUNCIONARIO CERTIFICANTE</span></div>
            <div className="position:absolute;left:477.24px;top:813.41px" className="cls_007"><span className="cls_007">FIRMA DEL AFILIADO</span></div>
        </div>
    );
  }
}

export default FormEstudiante;
