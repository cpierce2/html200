const deposits = [];
const withdrawals = [];
let balance = 100;

document.getElementById("acct-balance").innerHTML = ("Balance $" + balance);

function bankApp() {

     let userInput = prompt('Please select from the following:\n\nB = Balance\nD = Deposit\nW = Withdraw\nQ = Quit');

     if (userInput == 'q') {
          return;
     } else if (userInput == 'w') {
          withdraw();
     } else if (userInput == 'd') {
          deposit();
     } else if (userInput == 'b') {
          accountBalance();
     } else {
          alert('Invalid Selection');
     }
     bankApp();
     balanceUpdater();

     function balanceUpdater() {
          document.getElementById("acct-balance").innerHTML = ("Balance $" + balance);
     }

     function accountBalance() {
          if (balance < 100) {
               alert('Warning! Your balance is low\n\n$' + balance);
          } else {
               alert("Balance $" + balance);
          }
     }

     function deposit() { 

          let depositAmount = Number(prompt("How much would you like to deposit?"));
     
          if (depositAmount < 0.01 || depositAmount > 50000) {
               alert('Deposits must be $0.01 not to exceed $50,000');
          } else {
               deposits.push(Number(depositAmount));
               balance += Number(depositAmount);
               alert("Deposit Amount $" + depositAmount);
          }
     }

     function withdraw() {
          let lowBalance = balance - 300;

          let withdraw = Number(prompt("How much would you like to withdraw?"));
     
          if (withdraw > balance) {
               alert('Insufficent Funds');
          } else if (withdraw < lowBalance) {
               over();
          } else {
               under();
          }

          function under() {
               alert('This amount will leave your balance under $300')
               let choice = prompt('Are you sure you want to withdraw $' + withdraw + '\n\nY = Yes\nN = No');
          
               if (choice == 'n') {
                    alert('Transaction cancelled')
               } else if (choice == 'y') {
                    withdrawals.push(Number(withdraw));
                    balance -= (Number(withdraw));
                    alert("Withdrawal Amount $" + withdraw);
               } else {
                    alert('Invalid Selection');
               }
               return;
          }

          function over() {
               withdrawals.push(Number(withdraw));
               balance -= (Number(withdraw));
               alert("Withdrawal Amount $" + withdraw);
          }
     }
}
