
let nameInput = document.getElementById("name");
let amountInput = document.getElementById("Amount");
let categoryInput = document.getElementById("selectCate");
let table = document.getElementById("enterinfo");
let expenses = [];

function updateTables() {
    let total = 0;
    let html = `
        <table>
    `;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
        html += `
            <tr>
                <td>${expenses[i].expense}</td>
                <td>$${expenses[i].amount}</td>
                <td>${expenses[i].category}</td>
                <td>
                    <button onclick="editExpense(${i})">Edit</button>
                    <button onclick="deleteExpense(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    html += `
        </table>
        <h3 class = "total-amount">Total: $${total}</h3>
    `;
    table.innerHTML = html;
}

function addExpense() {
    let expenseList = {
        expense: nameInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value,
    };
    expenses.push(expenseList);
    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";

    updateTables();
}


function editExpense(i) {

    let newExpense = prompt("Enter new expense name:", expenses[i].name);
    let newAmount = prompt("Enter new amount:", expenses[i].amount);
    let newCategory = prompt("Enter new category:", expenses[i].category);
    expenses[i].name = newExpense;
    expenses[i].amount = Number(newAmount);
    expenses[i].category = newCategory;

    if(newExpense === null){
        newExpense = expenses[i].name;
    }
    if(newAmount === null){
        newAmount = expenses[i].amount;
    }
    if(newCategory === null){
        newCategory = expenses[i].category;
    }
    
    updateTables();
}

//delete function
function deleteExpense(i) {
    expenses.splice(i, 1);
    updateTables();
};