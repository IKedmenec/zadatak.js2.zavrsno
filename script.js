function isVeci(prvi, drugi) {
  if (!isNumber(prvi)) {
    return getreturnObject(true, `Prvi broj '${prvi}' nije broj`);
  }
  if (!isNumber(drugi))
    getreturnObject(true, `Drugi broj '${drugi}' nije broj`);

  if (prvi === drugi) return getreturnObject(false, `Oba su broja jednaka`); //"Oba su broja jednaka";
  if (prvi > drugi) {
    return getreturnObject(false, `Prvi broj je veći od drugog`);
  } else {
    return getreturnObject(false, `Drugi broj je veći od drugog`);
  }
}

function getreturnObject(greska, poruka) {
  return { isGreska: greska, mesage: poruka };
}

function isNumber(val) {
  // negative or positive
  return /^[-]?\d+$/.test(val);
}

function onClickButton() {
  let prvi = document.querySelector("#prvi").value;
  let drugi = document.getElementById("drugi").value;

  let result = isVeci(prvi, drugi);
  let elemResult = document.getElementById("treci");
  elemResult.value = result.mesage;
  if (result.isGreska) {
    elemResult.classList.add("crvena");
    elemResult.classList.remove("zelena");
  } else {
    elemResult.classList.add("zelena");
    elemResult.classList.remove("crvena");
  }
}

function onClickRandomButton() {
  let rnd = Math.floor(Math.random() * 100) + 1;
  console.log("1. Random vrijednost= " + rnd);
  if (rnd > 50) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
    document.querySelector("#prvi").value = "rnd";
  } else {
    document.querySelector("#prvi").value = rnd;
  }

  rnd = Math.floor(Math.random() * 100) + 1;
  console.log("2. Random vrijednost= " + rnd);
  document.getElementById("drugi").value = rnd;

  onClickButton();
}
