$(document).ready(function() {
	//  @desc    After Callback
	//  U only need to Create New Chart
	//  makeChart(id, plasticPaperCansArray)

	
	var chartDataListArr = [ 'Paper', 'Plastics', 'Cans' ]; // Chart Data
	var chartDataColor = [ '#74b9ff', '#ff7675', '#55efc4' ]; // Chart Color
	var boxWidth = 11;	// Chart DataSet Box Width
	var boxFontSize = 11; // Chart Font Size
	var listShow = true;  // Percentage Of List Show or Hide

	// PaperPlasticCans Options
	// @parms {data} must be Array [ Number ]
	// @return Object
	var paperPlasticCansOption = function(data) {
		return {
			datasets: [
				{
					data: data,
					backgroundColor: chartDataColor
				}
			],
			labels: chartDataListArr
		};
	};

	// Percentage Option
	var percentageOption = {
		callbacks: {
			label: function(tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
				});
				var currentValue = dataset.data[tooltipItem.index];
				var percentage = Math.floor(currentValue / total * 100 + 0.5);
				return percentage + '%';
			}
		}
	};

	// Legend Option
	var legendOption = {
		labels: {
			// This more specific font property overrides the global property
			fontColor: 'black',
			boxWidth: boxWidth,
			fontSize: boxFontSize
		},
		position: 'bottom'
	};

	// PieChart Option
	// @desc All PieChart Options
	var pieChartOption = {
		responsive: true,
		tooltips: percentageOption,
		legend: legendOption
	};

	// @desc Making Chart
	// @params {id} is container Id <div id={id}>
	// @params {_date} is STRING '11.5.2018'
	// @params {plasticPaperCansArray} muse Be = [ Number ] Serial [ Plastic, Paper, Cans ]
	var makeChart = function(id, _date, plasticPaperCansArray, description = []) {
		// Set The Date
		$('#' + id + '_date').html(_date);

		// Set List
		plasticPaperCansArray.map(function(data, index) {
			if (listShow)
				$('#' + id + '_list').append(
					'<li class="text-left">' + chartDataListArr[index] + ' ' + data + '%</li>'
				);
		});

		// Description Set
		if (description.constructor === Array && description.length !== 0) {
			description.map(function(des) {
				makeDescriptionText(des).appendTo('#' + id + '_Container');
			});
		}
		

		return {
			newChart: new Chart(document.getElementById(id).getContext('2d'), {
				type: 'pie',
				data: paperPlasticCansOption(plasticPaperCansArray),
				options: pieChartOption
			})
		};
	};

	// Example Making Chart Array
	var egMakeChartArray = [
		{
			id: 'myChart1',
			paperPlasticCansOption: [ 52, 30, 18 ],
			date: '11.5.2018'
		},
		{
			id: 'myChart2',
			paperPlasticCansOption: [ 57, 25, 18 ],
			date: '25.5.2018'
		},
		{
			id: 'myChart3',
			paperPlasticCansOption: [ 63, 14, 23 ],
			date: '15.6.2018'
		},
		{
			id: 'myChart4',
			paperPlasticCansOption: [ 56, 18, 26 ],
			date: '29.6.2018'
		},
		{
			id: 'myChart5',
			paperPlasticCansOption: [ 52, 10, 38 ],
			date: '13.7.2018'
		},
		{
			id: 'myChart6',
			paperPlasticCansOption: [ 20, 78, 2 ],
			date: '26.7.2018'
		},
		{
			id: 'myChart7',
			paperPlasticCansOption: [ 20, 78, 2 ],
			date: '10.8.2018'
		},
		{
			id: 'myChart8',
			paperPlasticCansOption: [ 83, 7, 10 ],
			date: '24.8.2018'
		},
		{
			id: 'myChart9',
			paperPlasticCansOption: [ 83, 7, 10 ],
			date: '24.8.2018'
		},
		{
			id: 'myChart10',
			paperPlasticCansOption: [  18, 67, 15 ],
			date: '24.8.2018',
			description:
				'In total 84.1 KG: 67% of paper and 18% ofCans and 15 % of plastics have been recycledwith the commitment and dedication from SilkRoad Trave'
		}
	];

	// ToMakeCharts
	egMakeChartArray.map(function(chart, index) {
		makeChart(chart.id, chart.date, chart.paperPlasticCansOption);

		// Set Final Description if is there ( Description )
		if (egMakeChartArray.length === index + 1 && egMakeChartArray[index].description !== undefined) {
			Object.keys($('#' + chart.id + '_Final')).length !== 0
				? $('#' + chart.id + '_Final').html(egMakeChartArray[index].description)
				: false;
		}
	});
	
});
