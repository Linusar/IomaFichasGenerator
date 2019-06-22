import React from "react";
import ReactDOM from "react-dom";
import {
  getTipoAfiliado,
  parseSexoToNumber,
  parseEstadoCivilToInt,
  getDay,
  getMonth,
  getYear,
  getBarra,
  getDateNow,
  isTrue
} from "../utilities";

const tipoAfiliadoO = getTipoAfiliado("O");
const tipoAfiliadoC = getTipoAfiliado("C");
const tipoAfiliadoV = getTipoAfiliado("V");
const tipoAfiliadoD = getTipoAfiliado("D");
const tipoAfiliadoB = getTipoAfiliado("B");
const tipoAfiliadoNot = getTipoAfiliado("X");

const sexo1 = parseSexoToNumber("Masculino");
const sexo2 = parseSexoToNumber("Femenino");
const sexo11 = parseSexoToNumber("Hombre");
const sexo22 = parseSexoToNumber("Mujer");
const sexoFalta = parseSexoToNumber("1");

const estadoS = parseEstadoCivilToInt("Soltero");
const estadoC = parseEstadoCivilToInt("Casado");
const estadoV = parseEstadoCivilToInt("Viudo");
const estadoD = parseEstadoCivilToInt("Divorciado");
const estadoSe = parseEstadoCivilToInt("Separado legal");
const estadoSh = parseEstadoCivilToInt("Separado de hecho");
const estadoCC = parseEstadoCivilToInt("Conviviente");
const estadoFalta = parseEstadoCivilToInt("f");

const date = "11/22/3344";
const day = getDay(date);
const month = getMonth(date);
const year = getYear(date);

const numeroAfiliado = "1234567890ABC";
const barra = getBarra(numeroAfiliado);

const x = isTrue(true);
const xx = isTrue(false);

test("getTipoAfiliado: Should be an string", () => {
  expect(tipoAfiliadoO).toMatch("OBLIGATORIO");
  expect(tipoAfiliadoC).toMatch("CONVENIO");
  expect(tipoAfiliadoV).toMatch("VOLUNTARIO");
  expect(tipoAfiliadoD).toMatch("DE OTRA PROVINCIA");
  expect(tipoAfiliadoB).toMatch("BENEFICIARIO");
  expect(tipoAfiliadoNot).toMatch("No Especificado");
});

test("parseSexoToNumber: Should be an number", () => {
  expect(sexo1).toBe(1);
  expect(sexo2).toBe(2);
  expect(sexo11).toBe(1);
  expect(sexo22).toBe(2);
  expect(sexoFalta).toBe(0);
});

test("parseEstadoCivilToInt: Should be an string", () => {
  expect(estadoS).toMatch("1");
  expect(estadoC).toMatch("2");
  expect(estadoV).toMatch("3");
  expect(estadoD).toMatch("4");
  expect(estadoSe).toMatch("5");
  expect(estadoSh).toMatch("6");
  expect(estadoCC).toMatch("7");
  expect(estadoFalta).toMatch("Falta codigo");
});

test("getDay: Should be an string 'XX'", () => {
  expect(day).toMatch("11");
});

test("getMonth: Should be an string 'XX'", () => {
  expect(month).toMatch("22");
});

test("getYear: Should be an string 'XX'", () => {
  expect(year).toMatch("44");
});

test("getBarra: Should be an string 'XX'", () => {
  expect(barra).toMatch("BC");
});

test("isTrue: Should be an string 'X'", () => {
  expect(x).toMatch("X");
  expect(xx).toMatch("");
});
