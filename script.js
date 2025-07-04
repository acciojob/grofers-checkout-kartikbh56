const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove previous total row if it exists
  const oldTotalRow = document.getElementById("total-row");
  if (oldTotalRow) oldTotalRow.remove();

  // Get all price elements
  const prices = document.querySelectorAll(".price");

  // Convert NodeList to Array and calculate total
  let total = 0;
  prices.forEach(cell => {
    total += Number(cell.textContent);
  });

  // Create new row
  const newRow = document.createElement("tr");
  newRow.setAttribute("id", "total-row");

  // Create one cell spanning two columns with total
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;

  newRow.appendChild(totalCell);

  // Append new row to the table
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
