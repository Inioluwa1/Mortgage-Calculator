let notcalculated = document.getElementById("notcalculated")
let calculated = document.getElementById("calculated")
let Mortgageamount = document.getElementById("Mortgageamount")
let Mortgagetermamount = document.getElementById("Mortgageterm");
let Interesratemamount = document.getElementById("Interestrate");
let mrepayment = document.getElementById("mrepayment");
let trepayment = document.getElementById("trepayment");
let Amount2 = document.getElementById("amount2")
let Amount2p = document.getElementById("amount2p")
let Mterm2 = document.getElementById("mterm2")
let Mterm2p = document.getElementById("mtermp")
let Irate2 = document.getElementById("irate2")
let Irate2p = document.getElementById("iratep")

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

var Mortagetype;

//handling clearing the form
function handleClear(){
  notcalculated.style.display = "flex";
  calculated.style.display = "none";

  Mortgageamount.value = ""
  Mortgagetermamount.value = ""
  Interesratemamount.value = ""

  Amount2.style.background = "rgb(228, 244, 252)"
  Amount2.style.borderColor = "black"
  Amount2p.style.color = "black"

  Mterm2.style.background = "rgb(228, 244, 252)"
  Mterm2.style.borderColor = "black"
  Mterm2p.style.color = "black"

  Irate2.style.background = "rgb(228, 244, 252)"
  Irate2.style.borderColor = "black"
  Irate2p.style.color = "black"

  

  error1.innerHTML = ""
  error2.innerHTML = ""
  error3.innerHTML = ""
  error4.innerHTML = ""
}

//handling submitting the form
function handleSubmit(){
 console.log("pressed") 
 if(Mortgageamount.value == "" || Mortgagetermamount.value == "" || Interesratemamount.value == "" || Mortagetype == null){
  notcalculated.style.display = "flex";
  calculated.style.display = "none"; 
 } else {
  notcalculated.style.display = "none";
  calculated.style.display = "block";
 }
 
  handleError();
  mortgagecalculator();
  // console.log(Mortagetype)
}

//the calculation of the mortgage itself
function mortgagecalculator(){
  let Repayment;
  let prerepayment;

  let rate = Interesratemamount.value / 100;
  let time = Mortgagetermamount.value * 12;
  let principal = Mortgageamount.value;
  let nrate = rate /12;

  prerepayment = (nrate) / (1 - (1 + nrate)**(-time))
  Repayment = principal * prerepayment;


  mrepayment.innerHTML = `$${Repayment.toFixed(2)}`
  trepayment.innerHTML = `$${(Repayment * time).toFixed(2)}`
}

function handleError(){

  //handling error from Mortgage Amount
  if(Mortgageamount.value == ""){
    error1.innerHTML = "This field is required"
    Amount2.style.background = "red"
    Amount2.style.borderColor = "red"
    Amount2p.style.color = "white"
  } else{
    error1.innerHTML = ""
    Amount2.style.background = "rgb(228, 244, 252)"
    Amount2.style.borderColor = "black"
    Amount2p.style.color = "black"
  }

  //handling error from Mortgage Term
  if(Mortgagetermamount.value == ""){
    error2.innerHTML = "This field is required"
    Mterm2.style.background = "red"
    Mterm2.style.borderColor = "red"
    Mterm2p.style.color = "white"
  } else{
    error2.innerHTML = ""
    Mterm2.style.background = "rgb(228, 244, 252)"
    Mterm2.style.borderColor = "black"
    Mterm2p.style.color = "black"
  }

  //handling error from Interest Rate
  if(Interesratemamount.value == ""){
    error3.innerHTML = "This field is required"
    Irate2.style.background = "red"
    Irate2.style.borderColor = "red"
    Irate2p.style.color = "white"
  } else{
    error3.innerHTML = ""
    Irate2.style.background = "rgb(228, 244, 252)"
    Irate2.style.borderColor = "black"
    Irate2p.style.color = "black"
  }

  //handling error from type
  if(Mortagetype == null){
    error4.innerHTML = "This field is required"
  } else {
    error4.innerHTML = ""
  }
}

//handling knowing which radio element was chosen
document.getElementById("mtypeform").addEventListener('change', 
  (event) => {
    if(event.target.type === 'radio' && event.target.name === "plans"){
      let selectedvalue = event.target.value;
      Mortagetype = selectedvalue
    }
  } 
)

