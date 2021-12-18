console.log("checkout.js file is running");
// import { application } from 'express';
// import { json } from 'express/lib/response';

async function makePayment() {
  // setTimeout(function () {

  const cardName = document.getElementById("card_name").value;
  const cardId = document.getElementById("card_id").value;
  const cardMonth = document.getElementById("card_month").value;
  const cardYear = document.getElementById("card_year").value;
  const cardSecurity = document.getElementById("card_security").value;
  const country = document.getElementById("country").value;
  const terrio = document.getElementById("terrio").value;

  const missprint = {
    name: cardName,
    card: cardId,
    month: cardMonth,
    year: cardYear,
    security: cardSecurity,
    country: country,
    state: terrio,
  };
  try {
    let res = await fetch(`http://localhost:2345/checkout`, {
      method: "POST",
      body: JSON.stringify(missprint),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    // console.log(data);

    data.forEach((e) =>{
      
      let erro = Object.values(e);
      alert(erro[0])
    })

  } catch (e) {
    console.log(e);
  }
}

  