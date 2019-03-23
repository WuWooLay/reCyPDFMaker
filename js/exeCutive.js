$(document).ready(function() {
	// Executive Summary JS
	var exeCutiveObj = {
		Purpose:
			'The purpose of the waste management report was to identify, quantify and analyze the composition of the waste stream generated from Silk Road to Asia Travelbuilding and areas around to ensure compliance with the requirements suggested by the ISO 14001-2015 requirement, Travelife:committed to sustainabilityrequirement, YCDC and regional environmental agencies in South East Asia.',
		'Audit Methodology':
			'To collect an appropriate sample of waste for the audit, bins of waste were collected from designated area such as front office bins for bins of paper, plastics and cansfor more than five months, which were predetermined prior.',
		'Waste Audit Results':
			'The information contained in this report was gathered from the on-site point of generation waste audit that has been performed for five months, and an analysisof the current waste management handling practices used on site at the building. The figures below displays the total waste categories asrepresented from the materials analyzed in the audit.',
		'Summary of Findings': [
			'Silk Road Travel produced and recycled in total of 84.1 KG of recyclable waste. A significant amount of office used paper are found in paper recycling bins.',
			'Low level of mixed waste showed that Silk Road to Asia is doing right in segregation and separation. However, occasionally items are mixed in the bins.',
			'The most commonly found recycle item is office used paper and the least commonly found item is PET bottles.'
		],
		Recommendataion: [
			'Paper waste can be significantly reduced with a good awareness in mind and people only print what they absolutely need',
			'Online paperless system such as Asana, Slack, Trello ,etc maybe used to reduce the office paper.',
			'Silk Road has a visionary leader who really care for the environment and thus Silk Road Travel should maintain its excellent practice and leadership'
		]
	};

	Object.keys(exeCutiveObj).map(function(objName) {
		checkExec(exeCutiveObj[objName], objName);
	});

	function checkExec(data, name) {
		if (typeof data === 'string' && data.trim().length !== 0) {
			console.log('STRING');

			$('<div>').append($('<h6>').html(name)).append($('<p>').append(data)).appendTo('#exe_sum');
			return;
		}

		if (data.constructor === Array && data.length !== 0) {
			console.log('Array');
			$('<div>')
				.append($('<h6>').html(name))
				.append(
					$('<ul>').append(
						data.map(function(dt) {
							return '<li>' + dt + '</li>';
						})
					)
				)
				.appendTo('#exe_sum');
			return;
		}
	}
});
