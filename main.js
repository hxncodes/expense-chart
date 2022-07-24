const expenseBlock = document.createElement("div");
expenseBlock.classList.add("expense-block");
const chart = document.querySelector(".expenses-chart");

async function getData() {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
}

let expenseData = {};

getData().then((data) => {
  data.map((expense) => {
    expenseBlock.style.height = `${expense.amount * 3}px`;
    expenseBlock.title = `$${expense.amount}`;
    expenseBlock.id = `${expense.day}`;
    chart.innerHTML += expenseBlock.outerHTML;
    console.log(expenseBlock.style.height);
  });
});
