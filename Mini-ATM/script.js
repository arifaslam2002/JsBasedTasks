let InitialBalance = 500;
let option;

console.log("--- ATM Transaction History ---");

while (true) {
    option = Number(
        prompt(
            "Choose the number for the Menu:\n1 - Check Balance\n2 - Deposit Money\n3 - Withdraw Money\n4 - Exit"
        )
    );

    if (option === 1) {
        alert(`Your Current Balance is $${InitialBalance}`);
    }

    else if (option === 2) {
        let DepositAmount = Number(prompt("Enter the Amount For Deposit"));

        InitialBalance += DepositAmount;

        console.log("[Deposit] Success: +$" + DepositAmount);

        alert(`Your Current Balance is $${InitialBalance}`);
    }

    else if (option === 3) {
        let withdrawAmount = Number(prompt("Enter the Amount For Withdraw Amount"));

        if (withdrawAmount > InitialBalance) {
            alert("Insufficient Funds!");
        } else {
            InitialBalance -= withdrawAmount;

            console.log("[Withdraw] Success: -$" + withdrawAmount);

            alert(`Your Current Balance is $${InitialBalance}`);
        }
    }

    else if (option === 4) {
        break;
    }

    else {
        alert("Invalid Option! Please choose 1, 2, 3, or 4.");
    }
}

console.log("-------------------------------");
console.log("Thank you for using our ATM.");
console.log("Your Final Closing Balance is: $" + InitialBalance.toFixed(2));