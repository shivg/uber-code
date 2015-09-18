<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var header = Object.keys(data[0]);
    var headRow = (document.createElement("tr"))
    header.forEach(function(head){
      var cell = document.createElement("td")
      cell.textContent = head;
      headRow.appendChild(cell);
    });
    table.appendChild(headRow);

    data.forEach(function(object){
      var dataRow = document.createElement("tr");
      header.forEach(function(head){
      var dataCell = document.createElement("th");
        dataCell.textContent = object[head];
        if (typeof object[head] == "number"){
        dataCell.style.textAlign = "right";
        }
        dataRow.appendChild(dataCell);
      });
      table.appendChild(dataRow);
    });
                 return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
  var header = Object.keys(MOUNTAINS[0]);console.log(header);
</script>
