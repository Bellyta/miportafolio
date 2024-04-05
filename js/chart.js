const ctx = document.getElementById('myChart')
const numero = ['1', '2', '3', '4', '5']
const rango = [80, 90, 78, 85, 70, 100]

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: numero,
        datasets:[{
            label: 'Grafico de Barras',
            data: rango,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgb(255, 159,  64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgb(255, 159,  64, 1)'
            ],
            borderWidth: 1.5
        }]
    }
})
