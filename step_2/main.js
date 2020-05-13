$(document).ready(function(){


  $.ajax ({
    url: "server.php",
    method: "GET",
    success: function (data) {
      var fatturato = data.fatturato;
      var type = fatturato.type;
      var data = fatturato.data;
      console.log(data);
      var ctx = $('#canvas');
      var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets: [{
                label: 'Vendite',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
    },
    error: function(err) {
      alert ('è avvenuto un errore')
    }
  })

  $.ajax ({
    url: "server.php",
    method: "GET",
    success: function (data) {
      var fatturato_by_agent = data.fatturato_by_agent;
      var type_pie = fatturato_by_agent.type;
      var data_agent = fatturato_by_agent.data;
      console.log(data);
      var ctx = $('#grafico');
      var myChart = new Chart(ctx, {
        type: type_pie,
        data: {
            labels: names,
            datasets: [{
                label: 'Vendite',
                data: data_agent,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
    },
    error: function(err) {
      alert ('è avvenuto un errore')
    }
  })
})
