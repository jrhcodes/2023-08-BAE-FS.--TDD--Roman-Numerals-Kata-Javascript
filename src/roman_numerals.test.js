// import test from "node:test";
import { toRomanNumerals, fromRomanNumerals } from "./roman_numerals";

const romanNumeralTestCaseBase = [
    {decimal: 1, roman: "I"},
    {decimal: 2, roman: "II"},
    { roman:"CCLXXV", decimal: 275},
    { roman:"CCXXXIX", decimal: 239},
    { roman:"CCCLXI", decimal: 361},
    { roman:"DCCCVI", decimal: 806},
    { roman:"CCCXIX", decimal: 319},
    { roman:"DXVII", decimal: 517},
    { roman:"CDXCVI", decimal: 496},
    { roman:"DCCCXCIX", decimal: 899},
    { roman:"CCCV", decimal: 305},
    { roman:"CCXCV", decimal: 295},
    { roman:"DCCCXI", decimal: 811},
    { roman:"DLVI", decimal: 556},
    { roman:"DCXIV", decimal: 614},
    { roman:"CMXXXIX", decimal: 939},
    { roman:"CCLXV", decimal: 265},
    { roman:"CCCXCIX", decimal: 399},
    { roman:"CMLXXIII", decimal: 973},
    { roman:"CDLXXXIII", decimal: 483},
    { roman:"DCCLII", decimal: 752},
    { roman:"CCCXXX", decimal: 330},
    { roman:"DCLXXXI", decimal: 681},
    { roman:"CXLVII", decimal: 147},
    { roman:"CCLXXXVI", decimal: 286},
    { roman:"CCCLX", decimal: 360},
    { roman:"DXXII", decimal: 522},
    { roman:"DCCLVIII", decimal: 758},
    { roman:"DCCCXLVIII", decimal: 848},
    { roman:"CXIV", decimal: 114},
    { roman:"CDXCVI", decimal: 496},
    { roman:"CMLVII", decimal: 957},
    { roman:"DCCXCII", decimal: 792},
    { roman:"DCXXXVI", decimal: 636},
    { roman:"DCCLXXVI", decimal: 776},
    { roman:"CCC", decimal: 300},
    { roman:"CXXXII", decimal: 132},
    { roman:"DCCCLXV", decimal: 865},
    { roman:"CCCXXVI", decimal: 326},
    { roman:"DCCVII", decimal: 707},
    { roman:"CLXII", decimal: 162},
    { roman:"MDIII", decimal: 1503}
]

// romanFromDecimal tests
romanNumeralTestCaseBase.forEach(({decimal, roman}) => {
    test(`romanFromDecimal: test case ${decimal}=${roman}`, () => expect(toRomanNumerals(decimal)).toBe(roman));
});

test("toRomanNumerals() without parameters gives error", () => expect(toRomanNumerals().toThrow("romanFromDecimal: decimal value paramater required")) );
test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(-1).toThrow("romanFromDecimal: error, positive values only")) );
test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(0).toThrow("romanFromDecimal: error, positive values only")) );
test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(-234).toThrow("romanFromDecimal: error, positive values only")) );
test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals("").toThrow("romanFromDecimal: error, non-numeric value passed")) );
test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals([]).toThrow("romanFromDecimal: error, non-numeric value passed")) );
test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(3001).toThrow("romanFromDecimal: error, maximum value 3000")) );
test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(3001).toThrow("romanFromDecimal: error, maximum value 3000")) );
test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(12301).toThrow("romanFromDecimal: error, maximum value 3000")) );

// decimalFromRoman tests
romanNumeralTestCaseBase.forEach(({decimal, roman}) => {
    test(`decimalFromRoman: test case ${roman}=${decimal}`, () => expect(fromRomanNumerals(roman)).toBe(decimal));
});

test("fromRomanNumerals() without parameters gives error", () => expect(fromRomanNumerals().toThrow("romanFromDecimal: paramater required - string containing roman numerals")) );
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-1).toThrow("romanFromDecimal: error, positive values only")) );
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(0).toThrow("romanFromDecimal: error, positive values only")) );
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-234).toThrow("romanFromDecimal: error, positive values only")) );
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals("").toThrow("romanFromDecimal: error, non-numeric value passed")) );
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals([]).toThrow("romanFromDecimal: error, non-numeric value passed")) );
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrow("romanFromDecimal: error, maximum value 3000")) );
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrow("romanFromDecimal: error, maximum value 3000")) );
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(12301).toThrow("romanFromDecimal: error, maximum value 3000")) );
