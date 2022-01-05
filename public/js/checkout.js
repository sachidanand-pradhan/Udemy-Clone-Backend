console.log("checkout.js file is running");
async function makePayment() {

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

  let name_error = document.getElementById("name_error");
  let num_error = document.getElementById("num_error");
  let month_error = document.getElementById("month_error");
  let year_error = document.getElementById("year_error");
  let sec_error = document.getElementById("sec_error");
  let country_error = document.getElementById("country_error");
  let state_error = document.getElementById("state_error");

  try {
    let res = await fetch(`https://aqueous-fortress-78543.herokuapp.com/checkout`, {
      method: "POST",
      body: JSON.stringify(missprint),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);

    let cardCount = 0;
    let nameCount = 0;
    let yearCount = 0;
    let secCount = 0;
    let monthCount = 0;
    let countryCount = 0;
    let stateCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].name) {
        console.log("empty");
        name_error.innerText = "* " + data[i].name;
        nameCount++;
      }
      if (data[i].card) {
        console.log("empty");
        num_error.innerText = "* " + data[i].card;
        cardCount++;
      }
      if (data[i].month) {
        console.log("empty");
        month_error.innerText = "* " + data[i].month;
        monthCount++;
      }
      if (data[i].security) {
        console.log("empty");
        sec_error.innerText = "* " + data[i].security;
        secCount++;
      }
      if (data[i].year) {
        console.log("empty");
        year_error.innerText = "* " + data[i].year;
        yearCount++;
      }
      if (data[i].country) {
        console.log("empty");
        country_error.innerText = "* " + data[i].country;
        countryCount++;
      }
      if (data[i].state) {
        console.log("empty");
        state_error.innerText = "* " + data[i].state;
        stateCount++;
      }
    }
    if (nameCount == 0) {
      name_error.innerText = null;
    }
    if (cardCount == 0) {
      num_error.innerText = null;
    }
    if (yearCount == 0) {
      year_error.innerText = null;
    }
    if (monthCount == 0) {
      month_error.innerText = null;
    }
    if (secCount == 0) {
      sec_error.innerText = null;
    }
    if (countryCount == 0) {
      country_error.innerText = null;
    }
    if (stateCount == 0) {
      state_error.innerText = null;
    }
    if (
      cardCount == 0 &&
      nameCount == 0 &&
      yearCount == 0 &&
      secCount == 0 &&
      monthCount == 0 &&
      countryCount == 0 &&
      stateCount == 0
    ) {
      alert("Payment is Successfully paid");
      window.location.href = "/home";
    } else {
      alert(
        "Please filled all the valid details Otherwise your payment is not completed"
      );
    }
  } catch (e) {
    console.log(e);
  }
}
