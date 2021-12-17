    
    import navbar from './components/header.js';
    import footerComp from './components/footer.js';


    let promise = new Promise((resolve, reject) => {
        let headerDiv = document.getElementById('header');
        let footerDiv = document.getElementById("footerPart");

        headerDiv.innerHTML = navbar();
        footerDiv.innerHTML = footerComp();

        resolve('Navbar imported');
    });
    promise.then((res) => {
        addFunctionalityToNavbar();
    })

    function makePayment() {
        setTimeout(function () {
const cardName = document.getElementById("card_name").value
const cardId = document.getElementById("card_id").value
const cardMonth = document.getElementById("card_month").value
const cardYear = document.getElementById("card_year").value
const cardSecurity = document.getElementById("card_security").value
const country = document.getElementById("country").value
const terrio = document.getElementById("terrio").value

const missprint = {cardName,cardId,cardMonth,cardYear,cardSecurity,country,terrio};
            

            alert("Congratulations! your payment is successfully paid");
            window.location.href = "home.ejs";

        }, 1000);
    }
    // if (
    //     signData.email == "" ||
    //     signData.password == "" ||
    //     signData.password_conf == "" ||
    //     signData.first_name == "" ||
    //     signData.last_name == "" 
    //   ) {
    //     alert("please fill all the madatory fields");
    //   }
    