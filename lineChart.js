$(document).ready(function() {
	// @desc Making LineChart Function
	// @params {id} String eg 'LineChart1'
	// @params {obj} { name: String, id: String, data: { 'date11.4.2018' : 'value2.4' } }
	var makeLineChart = function(id, obj) {
		var dateArray = Object.keys(obj.data).map(function(key) {
			return key;
		});
		var valueArray = Object.keys(obj.data).map(function(key) {
			return obj.data[key];
        });
        

		return {
			newChart: new Chart(document.getElementById(id), {
				type: 'line',
				data: {
					labels: dateArray,
					datasets: [
						{
							label:  obj.name || '',
							data: valueArray,
							fill: false,
							borderColor: 'rgb(54, 162, 235)',
							fill: false,
                            lineTension: 0,
                            borderWidth: 1
						}
					]
				},
				options: {
					legend: {
						display: false
					}
				}
			})
		};
	};

	var LineDescription =
		'Paper recycling reached its peak in August,6plastics and cans recycling reached its peak inJuly';

	var LineChartArray = [
		{
			name: 'Paper',
			id: 'LineChart1',
			data: {
				'11.5.2018': '2.3',
				'25.5.2018': '3.15',
				'15.6.2018': '4.12',
				'29.6.2018': '3.2',
				'13.7.2018': '6.2',
				'26.7.2018': '0.43',
				'10.8.2018': '10.71',
				'24.8.2018': '22.78',
				'14.9.2018': '3.8'
			}
		},
		{
			name: 'Can',
			id: 'LineChart2',
			data: {
				'11.5.2018': '0.8',
				'25.5.2018': '1',
				'15.6.2018': '1.5',
				'29.6.2018': '1.455',
				'13.7.2018': '4.5',
				'26.7.2018': '0.05',
				'10.8.2018': '1.65',
				'24.8.2018': '2.8',
				'14.9.2018': '1.3'
			}
		},
		{
			name: 'Plastics',
			id: 'LineChart3',
			data: {
				'11.5.2018': '1.3',
				'25.5.2018': '1.35',
				'15.6.2018': '0.9',
				'29.6.2018': '1.035',
				'13.7.2018': '6.2',
				'26.7.2018': '0.63',
				'10.8.2018': '1.78',
				'24.8.2018': '1.93',
				'14.9.2018': '1.2'
			}
		}
	];

	LineChartArray.map(function(value) {
		makeLineChart(value.id, value);
    });
    
    if(typeof LineDescription === "string" &&  LineDescription.trim().length !== 0 ) {
        $('<h6>', { class: 'text-left ListHeader mt-5' }).append(LineDescription).appendTo('#LineChartDescription_Container');
    }

	// makeLineChart('LineChart', linePaperChart);

	// console.log(Object.keys(linePaperChart.data));
	// Object.keys(linePaperChart.data).map(key => {
	//     console.log(key, ":");
	//     console.log(linePaperChart.data[key]);
	// }); ;
});
