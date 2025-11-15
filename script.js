function addEntry() {
    const date = document.getElementById('dateInput').value;
    const amount = document.getElementById('amountInput').value;
    const reason = document.getElementById('reasonInput').value;

    if (!date || !amount) {
        alert("Please enter at least the date and amount.");
        return;
    }

    const table = document.querySelector("#wasteTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${date}</td>
        <td>${amount} kg</td>
        <td>${reason || '-'}</td>
    `;

    table.appendChild(row);

    // Clear inputs
    document.getElementById('dateInput').value = "";
    document.getElementById('amountInput').value = "";
    document.getElementById('reasonInput').value = "";
}
