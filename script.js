(async () => {
    const result = await fetch('https://date.nager.at/api/v3/PublicHolidays/2025/FI');
    const data = await result.json();

    console.log('data: ', data);

    for (let i = 0; i < data.length; i++) {

        const holiday = data[i];

        const tbody = document.getElementById('my-tbody');

        const row = document.createElement('tr');

        const cellId = document.createElement('td');
        cellId.textContent = i+1;

        const nameFiCell = document.createElement('td');
        nameFiCell.textContent = holiday.localName;


        const nameEnCell = document.createElement('td');
        nameEnCell.textContent = holiday.name;
        const dateCell = document.createElement('td');
        dateCell.textContent = holiday.date;

        // Append columns to row
        row.appendChild(cellId);
        row.appendChild(nameFiCell);
        row.appendChild(nameEnCell);
        row.appendChild(dateCell);

        // Append row to table body
        tbody.appendChild(row);
    }

})();