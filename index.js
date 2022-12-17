// Atividade sugerida sobre operadores aritméticos.

var a = 1;
var b = 2;
var c = 3;
var d = "3";
var e = false;
var f = true;

//Atividade 01
console.log("a + b ** c - c % 2 : ", a + b ** c - c % 2);

//Atividade 02
console.log("b * (c / a - a) : ", b * (c / a - a));

//Atividade 03
console.log("(c == d) != e : ", (c == d) != e);

//Atividade 04
console.log("(b >= a) == f : ", (b >= a) == f);

//Atividade 05
console.log("(c !== d) && (b % 1 == 0) : ", (c !== d) && (b % 1 == 0));

//Atividade 06
console.log("e || (b > c || f) : ", e || (b > c || f));

// OPERAÇÕES ARITMÉTICAS

// Atividade 01 (Resolução)                                               // 1 + 2 ** 3 - 3 % 2                                                      // 1 + 2³ - 3 % 2                                                          // 1 + 8 - 1                                                               // Resultado: 8

//Atividade 02 (Resolução)
// 2 * (3 / 1 - 1)
// 2 * (3-1)
// 2 * 2
// 4

// OPERAÇÕES RELACIONAIS

//Atividade 03 (Resolução)
// (c == d) != e
// (3 == "3") != false
// true != false
// true

//Atividade 04 (Resolução)
// (b >= a) == f
// (2 >= 1) == true
// (true) == true
// true

// EXPRESSÕES LÓGICAS

//Atividade 05 (Resolução)
// (c !== d) && (b % 1 == 0)
// (3 !== "3") && (2 % 1 == 0)
// true && (true)
// true

//Atividade 06 (Resolução)
// e || (b > c || f)
// false || (2 > 3 || true)
// false || (false || true)
// false || (true)
// true

