document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('studentName').value;
  const math = parseFloat(document.getElementById('math').value);
  const science = parseFloat(document.getElementById('science').value);
  const english = parseFloat(document.getElementById('english').value);

  const average = ((math + science + english) / 3).toFixed(2);

  const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${math}</td>
    <td>${science}</td>
    <td>${english}</td>
    <td>${average}</td>
  `;

  document.getElementById('studentForm').reset();
});
