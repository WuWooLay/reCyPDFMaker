$(document).ready(function() {
	$('#ButtonToSave').click(function() {
		// Download Pdf
		getCanvas();
	});

	var getCanvas = function() {
		// Image Array Each Pdf Slides
		// container_bar_one
		var image = [];
		var marginX = 40;
		var marginY = 0;

		// First Page Start
		html2canvas($('#container_bar_one')[0]).then(function(canvas) {
			// First Page Done With CallBack
			image.push(canvas.toDataURL('image/png'));

			// Second Page Start
			html2canvas($('#container_bar_two')[0]).then(function(canvas) {
				// Second Page Done With CallBack
				image.push(canvas.toDataURL('image/png'));

				// Third Page Start
				html2canvas($('#container_bar_three')[0]).then(function(canvas) {
					// Third Page Done With CallBack
					image.push(canvas.toDataURL('image/png'));

					// Forth Page Start
					html2canvas($('#container_bar_four')[0]).then(function(canvas) {
						// Forth Page Done With CallBack
						image.push(canvas.toDataURL('image/png'));

						// Fifth Page Start
						html2canvas($('#container_bar_five')[0]).then(function(canvas) {
							// Fifth Page Done With CallBack
							image.push(canvas.toDataURL('image/png'));

							// Sixth Page Start
							html2canvas($('#container_one')[0]).then(function(canvas) {
								// Sixth Page Done With CallBack
								image.push(canvas.toDataURL('image/png'));

								// Seventh Page Start
								html2canvas($('#container_two')[0]).then(function(canvas) {
									// Seventh Page Done With CallBack
									image.push(canvas.toDataURL('image/png'));

									// Eight Page Start
									html2canvas($('#container_three')[0]).then(function(canvas) {
										// Eight Page Done With CallBack
										image.push(canvas.toDataURL('image/png'));
										var doc = new jsPDF({
											orientation: 'landscape'
										});

										image.map(function(img, index) {
											doc.addImage(img, 'PNG', marginX, marginY);
											if (index === image.length - 1) return;
											doc.addPage();
										});

										doc.save('Test.pdf');
									});
								});
							});
						});
					});
				});
			});
		});
	};
});

// var doc = new jsPDF({
// 	orientation: 'landscape'
// });

// image.map(function(img, index) {
// 	doc.addImage(img, 'PNG', marginX, marginY);
// 	if (index === image.length - 1) return;
// 	doc.addPage();
// });

// doc.save('Test.pdf');

// var doc = new jsPDF({
//     orientation: 'landscape'
// });
// doc.addImage(image[0], 'PNG', 40, 0);
// doc.addPage();
// doc.addImage(image[1], 'PNG', 40, 0);
// doc.save('Test.pdf');
