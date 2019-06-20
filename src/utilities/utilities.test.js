import React from "react";
import ReactDOM from "react-dom";
import { DataAfiliado } from "../utilities";

test("Should be an object type affiliate", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
