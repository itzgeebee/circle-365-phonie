function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  // An object that contains the array of provider start codes
  const providers = {
    mtn: [`803`, `703`, `903`, `806`, `706`, `813`, `810`, `814`, `816`],
    glo: [`805`, `705`, `905`, `807`, `815`, `811`, `905`],
    etisalat: [`809`, `909`, `817`, `818`],
    airtel: [`802`, `902`, `701`, `808`, `708`, `812`]
  }
  const submitBtn = document.querySelector(`#sub-btn`); //submit button
  const telInput = document.querySelector(`#tel`); // input field
  const resultText = document.querySelector(`#result-text`); //warning text
  const providerImage = document.querySelector(`#res-img`); // 

  const colourGradients = {
    airtel:
      "linear-gradient(45deg, rgb(255, 210, 208), rgb(255, 255, 255))"
    ,
    mtn:
      "linear-gradient(45deg, rgb(254, 255, 208), rgb(255, 255, 255))"
    ,
    glo:
      "linear-gradient(45deg, rgb(186, 255, 173), rgb(255, 255, 255))"
    ,
    etisalat:
      "linear-gradient(45deg, rgb(210, 255, 208), rgb(163, 163, 163))"
  }


  const validateInput = (inp) => {
    // This function checks if the phone number is valid 
    const telInp = inp.value;
    const num = (telInp.startsWith(`0`)) ? telInp.slice(1) : telInp.slice(4);

    if (!isFinite(+num)) {
      resultText.textContent = `Not a valid number`
      resultText.style.color = 'red'
      return false
    }

    if (num.length !== 10) {
      resultText.textContent = `Number is not of the required length`
      resultText.style.color = 'red'
      return false
    }

    return true
  }

  let provider;
  const checkProvider = (inp) => {
    // This function checks if the provider is mtn

    const number = ((inp.value).startsWith(`0`)) ? (inp.value).slice(1, 4) : (inp.value).slice(4, 8);
    console.log(number)
    for (let key in providers) {
      providers[key].forEach(el => {
        number.startsWith(el) && (provider = key);
      });
    }

    render(provider);

    const correctProvider = (provider === `mtn`) ? true : false
    return correctProvider
  }

  function render(inp) {


    document.body.style.backgroundImage = colourGradients[inp];
    resultText.style.color = (inp === `mtn`) ? `green` : `red`;
    resultText.textContent = (inp === `mtn`) ? "This is a Valid MTN Number" : "This is NOT a Valid MTN Number";
    providerImage.src = (inp in providers) ? `images/${inp}.png` : 'images/spinner.svg'


  }

  submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (!validateInput(telInput)) return;
    if (!checkProvider(telInput)) return;
    telInput.value = "";
    resultText.textContent = `Phonie validated your number successfully`
  }
  )
  telInput.addEventListener(`input`, (e) => {
    let num = e.target;

    if (num.value.startsWith(`0`) && (num.value).length >= 4) {
      checkProvider(num)
    } else if (num.value.startsWith(`+`) && (num.value).length >= 8) {
      checkProvider(num)
    }
    else {
      checkProvider(num)
      validateInput(num)
    }

  })

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //