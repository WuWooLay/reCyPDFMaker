$(document).ready(function() {
	// Bar Chart Labels You Can Add MOre
	var barChartLabels = [ 'Cans', 'Plastics', 'Paper' ];
	// BarChartList Show or Not
	var barChartListShow = true;
	// I can't show Legend
	var barChartOption = {
		scales: {
			yAxes: [ { ticks: { beginAtZero: true } } ]
		},
		legend: {
			display: false
		}
	};

	var barChartType = 'horizontalBar'; // "horizontalBar" || "bar"

	// @desc Making BarChart Functino
	// @params {id} is STRING @container Id <div id={id}> STRING
	// @params {_date} is STRING '11.5.2018'
	// @params {cansPlasticPaperArray} must Be = [ Number ] Serial [ 'Cans', 'Plastic', 'Paper' ]
	// @params {description} must Be [ String ]
	var makeBarChart = function(id, _date, cansPlasticPaperArray, description = []) {
		// Set The Date
		Object.keys($('#' + id + '_date')).length !== 0 ? $('#' + id + '_date').html(_date || 'XX') : false;

		// Set List
		cansPlasticPaperArray.map(function(data, index) {
			if (barChartListShow)
				$('#' + id + '_list').append('<li class="text-left">' + barChartLabels[index] + ' ' + data + '</li>');
		});

		// Description Set
		if (description.constructor === Array && description.length !== 0) {
			description.map(function(des) {
				makeDescriptionText(des).appendTo('#' + id + '_Container');
			});
		}

		return {
			newChart: new Chart(document.getElementById(id), {
				type: barChartType,
				data: {
					labels: barChartLabels,
					datasets: [
						{
							label: 'Total',
							data: cansPlasticPaperArray,
							fill: false,
							backgroundColor: 'rgba(75, 192, 192, 0.2)',
							borderColor: 'rgb(75, 192, 192)',
							borderWidth: 1
						}
					]
				},
				options: barChartOption
			})
		};
	};

	// @desc Make Description Text
	// @params {text} text'll be STRING
	var makeDescriptionText = function(text) {
		return $('<h6>', { class: 'text-left ListHeader' }).append(text);
	};

	var egBarChartArray = [
		{
			id: 'BarChart1',
			date: '(May, 2018)',
			cansPlasticPaperArray: [ 0.8, 1.3, 2.3 ],
			description: [
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?'
			]
		},
		{
			id: 'BarChart2',
			date: '(May, 2018)',
			cansPlasticPaperArray: [ 1, 1.3, 3.15 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart3',
			date: '(June, 2018)',
			cansPlasticPaperArray: [ 1.5, 0.9, 4.12 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart4',
			date: '(June, 2018)',
			cansPlasticPaperArray: [ 1.455, 1.035, 3.2 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart5',
			date: '(July, 2018)',
			cansPlasticPaperArray: [ 4.5, 1.2, 6.2 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart6',
			date: '(July, 2018)',
			cansPlasticPaperArray: [ 0.05, 1.63, 0.43 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart7',
			date: '(August, 2018)',
			cansPlasticPaperArray: [ 1.65, 1.78, 10.74 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart8',
			date: '(August, 2018)',
			cansPlasticPaperArray: [ 2.8, 1.93, 22.78 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart9',
			date: '(September, 2018)',
			cansPlasticPaperArray: [ 1.3, 1.2, 3.8 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		},
		{
			id: 'BarChart10',
			date: '(September, 2018)',
			cansPlasticPaperArray: [ 15.055, 12.325, 56.72 ],
			description: [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. gni totam animi?' ]
		}
	];

	egBarChartArray.map(function(data) {
		makeBarChart(data.id, data.date, data.cansPlasticPaperArray, data.description);
	});
	// makeBarChart('BarChart1', '', [ 0.8, 1.3, 2.3 ]);
});
