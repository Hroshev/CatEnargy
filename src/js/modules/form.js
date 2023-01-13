const selectionForm = document.querySelectorAll("#form__catEnergy");

if (selectionForm) {
  //Input only number
  const inputNumber = document.querySelectorAll(".onlyNumber");

  for (let i = 0; i < inputNumber.length; i++) {
    const number = inputNumber[i];

    number.oninput = function () {
      this.value = this.value.replace(/\D/g, "").substr(0, 14);
    };
  }
}
