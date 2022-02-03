const d = document;

const $hdos = d.createElement("h3");

$hdos.setAttribute("id", "h3id");

const ageToDays = (btnClick, btnReset, classDiv) => {
  const contenedor = d.querySelector(classDiv);
  function validation() {
    const pro = prompt("Tu edad:");
    const regex = new RegExp(`^[1-9]*$`);
    //     const pattern = new RegExp(`^[a-z]{2}[0-9]{7}$`);
    if (pro === "") {
      return (contenedor.appendChild($hdos).innerHTML = "no se permite una edad vacia");
    }
    if (!regex.test(pro)) {
      return (contenedor.appendChild($hdos).innerHTML = "solo se permiten numeros");
    }
    let proToNumber = Number(pro);
    if (proToNumber < 0 || proToNumber > 120) {
      return (contenedor.appendChild($hdos).innerHTML = "solo numeros entre 1 y 120");
    }
    return proToNumber;
  }

  d.addEventListener("click", evt => {
    if (evt.target.matches(btnClick)) {
      const edadNumber = validation();
      //  console.log(typeof edadNumber);

      if (typeof edadNumber === "number") {
        let tuEdad = edadNumber * 12 * 30.4;
        contenedor.appendChild($hdos).innerHTML = "Tienes: " + tuEdad.toFixed() + " dias de edad";
      }
    }
    if (evt.target.matches(btnReset)) {
      d.getElementById("h3id").remove();
    }
  });
};

export { ageToDays };
