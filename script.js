const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-btn");
const amtGiven = document.querySelector(".amount-given");
const returnValue = document.querySelector("#return-table");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    nextButton.style.display="none";
    amtGiven.style.display = "block";
    // if (cashGiven.value >= billAmount.value) {
    //   const amountToBeReturned = cashGiven.value - billAmount.value;
    //   calculateChange(amountToBeReturned);
    // } else {
    //   showMessage("Do you wanna wash plates?");
    // }
  } else {
    showMessage("Invalid Bill Amount. Please enter valid bill amount");
  }
});

checkButton.addEventListener("click", () => {
    calculateChange();
    hideMessage();
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    if(billAmountValue > 0 && cashGivenValue > 0){
        if(!Number.isInteger(cashGivenValue)){
            howMessage("Please enter valid cash amount");
            return;
        }
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
          } else {
            showMessage("Do you wanna wash plates?");
            return;
          }
    }else{
        sshowMessage("Please enter valid amounts")
    }
});
function calculateChange(amountToBeReturned) {
    returnValue.style.display = "flex";
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
