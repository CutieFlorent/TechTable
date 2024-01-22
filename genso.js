var symbols = [
  "Nu",
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nb",
  "Fl",
  "Mc",
  "Lf",
  "Ts",
  "Og",
];
var categories = [
  "Alkalai Metals", //0
  "Alkali earth metals", //1
  "Transition metals", //2
  "Post-transition metals", //3
  "Metaloids", //4
  "Nonmetals", //5
  "Halogen", //6
  "Noble gases", //7
  "Rare earth metals", //8
  "Actinides", //9
];
function position(n) {
  let period = 0;
  //先使用s区划分周期，例如1-2,3-4,5-12
  //i为周期分界线
  for (var i = 0; i < n; i += 2 * Math.floor((period + 1) / 2) ** 2) {
    period += 1;
  }
  //如果不是s区元素，则位于上一周期
  if (i - n >= 2) {
    period -= 1;
  }

  let spdf = 0;
  //以i为基准逆向寻找区
  //j为区分界线
  for (var j = i; j >= n; j -= 2 * (2 * spdf - 1)) {
    spdf += 1;
  }
  let group = n - j;
  return { period, spdf, group };
}
function category(n) {
  period = position(n).period;
  spdf = position(n).spdf;
  group = position(n).group;
  let res;
  switch (spdf) {
    case 1:
      {
        if (group == 1) res = 0; //"Alkalai Metals", //0
        else res = 1; //"Alkali earth metals", //1
      }
      break;
    case 2:
      {
        res = 3; //"Post-transition metals", //3
        if (period - group <= 2) res = 4; //"Metaloids", //4
        if (period - group <= 0) res = 5; //"Nonmetals", //5
        if (group == 5) res = 6; //"Halogen", //6
        if (group == 6) res = 7; //"Noble gases", //7
      }
      break;
    case 3:
      {
        res = 2; //"Transition metals", //2
        if (group == 1) res = 8; //"Rare earth metals", //8
      }
      break;
    case 4:
      {
        if (period == 6) res = 8;
        else res = 9; //"Actinides", //9
      }
      break;
  }
  if (n == 1) res = 5;
  if (n == 13) res = 3;
  if (n == 103) res = 9;
  return res;
}
