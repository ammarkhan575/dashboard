const chart = document.querySelector('#chart').getContext('2d');


new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
            'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33474, 28382, 34783, 41345, 12899, 23323, 25678, 33765, 19001, 22098],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [33374, 12474, 19382, 31113, 21345, 19009, 16323, 29678, 35165, 37001, 30098],
                borderColor: 'blue',
                borderWidth: 2
            }

        ]
    },
    options: {
        responsive: true
    }
})