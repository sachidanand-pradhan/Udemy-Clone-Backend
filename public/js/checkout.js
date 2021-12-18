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

  let name_error = document.getElementById("name_error")
  let num_error = document.getElementById("num_error")
  let month_error = document.getElementById("month_error")
  let year_error = document.getElementById("year_error")
  let sec_error = document.getElementById("sec_error")
  let country_error= document.getElementById("country_error");
  let state_error= document.getElementById("state_error");

  name_error.innerHTML = "";
  num_error.innerHTML = "";
  month_error.innerHTML = "";
  year_error.innerHTML = "";
  sec_error.innerHTML = "";
  country_error.innerHTML = "";
  state_error.innerHTML = "";

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



    for(k of data){
      for(key in k){
         console.log(key,k[key]);
        if(key === "name"){
          name_error.innerText = "* "+k[key]
        }
        // else{name_error.innerText = }
        if(key === "card"){
          num_error.innerText = "* "+k[key]
        }
        if(key === "month"){
          month_error.innerText = "* "+k[key]
        }
        if(key === "year"){
          year_error.innerText = "* "+k[key]
        }
        if(key === "security"){
          sec_error.innerText = "* "+k[key]
        }
        if(key === "country"){
          country_error.innerText = "* "+k[key]
        }
        if(key === "state"){
          state_error.innerText = "* "+k[key]
        }
      }
    }

  } catch (e) {
    console.log(e);
  }
}

  