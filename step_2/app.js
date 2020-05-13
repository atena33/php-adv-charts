$(document).ready(function (){
  chiamataApi();
  function chiamataApi (data){
    $.ajax ({
      url: "server.php",
      method: "GET",
      success: function (data) {
        console.log(data);
        // console.log('fatturato by agent', data.fatturato_by_agent);
         fatturato(data.fatturato);
         fatturato_by_agent(data.fatturato_by_agent);
        // console.log(data.fatturato_by_agent);
      },
      error: function(err) {
        alert ('è avvenuto un errore')
      }
    })
  }

  function fatturato(data){
    var ctx = $('#canvas');
    var myChart = new Chart(ctx, {
      type: data.type,
      data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [{
            label: '# of Votes',
            data: data.data,
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
  }

  function fatturato_by_agent(data){
    var ctx = $('#grafico');
    var myChart = new Chart(ctx, {
      type: data.type,
      data: {
          labels: data.labels,
          datasets: [{
              label: '# of Votes',
              data: data.data,
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
  }

});
