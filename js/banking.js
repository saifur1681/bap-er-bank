document.getElementById("deposit-button").addEventListener("click", function () {
    // deposit site
    const userDeposit = document.getElementById("user-deposit-input");
    const userDepositValue = parseFloat(userDeposit.value);

    const depositText = document.getElementById("show-deposit-value");



    // total Deposit......
    const previousDepositAmmount = parseFloat(depositText.innerText);
    const depositTotal = previousDepositAmmount + userDepositValue;
    depositText.innerText = depositTotal;

    // total balance.....
    const defaultBalance = document.getElementById("total-balance");
    const nowBalance = parseFloat(defaultBalance.innerText);
    const newTotalBalance = nowBalance + userDepositValue;
    defaultBalance.innerText = newTotalBalance;




    userDeposit.value = "";
})


// withdraw site...
document.getElementById("withdraw-button").addEventListener("click", function () {
    // user input......
    const userWithdrawInput = document.getElementById("withdraw-input");
    const userInputText = userWithdrawInput.value;
    const userInputAmmount = parseFloat(userInputText);


    //  show withdraw total........
    const previouswithdrawAmmount = document.getElementById("show-withdraw-value");
    const previouswithdrawAmmountTest = previouswithdrawAmmount.innerText;
    const withdrawAmmount = parseFloat(previouswithdrawAmmountTest);
    const totalWithdrawAmmount = userInputAmmount + withdrawAmmount;
    previouswithdrawAmmount.innerText = totalWithdrawAmmount;

    // total balance after Withdraw............
    const previousBalanceTotal = document.getElementById("total-balance");
    const previousBalanceText = parseFloat(previousBalanceTotal.innerText);
    const newBalanceTotal = previousBalanceText - userInputAmmount;
    previousBalanceTotal.innerText = newBalanceTotal;



    userWithdrawInput.value = "";
})