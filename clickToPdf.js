$(document).ready(function() {
	$('#ButtonToSave').click(function() {
		// Download Pdf
		getCanvas();
	});

	var getCanvas = function() {
		// Image Array Each Pdf Slides
		var image = [];

		// First Page Start
		html2canvas($('#container_one')[0]).then(function(canvas) {
			// First Page Done With CallBack
			image.push(canvas.toDataURL('image/png'));

			// Second Page Start
			html2canvas($('#container_two')[0]).then(function(canvas) {
				// Second Page Done With CallBack
				image.push(canvas.toDataURL('image/png'));

				// Third Page Start
				html2canvas($('#container_three')[0]).then(function(canvas) {
					// Third Page Done With CallBack
					image.push(canvas.toDataURL('image/png'));

					var doc = new jsPDF({
						orientation: 'landscape'
					});

					image.map(function(img, index) {
						doc.addImage(img, 'PNG', 40, 0);
						if (index === image.length - 1) return;
						doc.addPage();
					});

					doc.save('Test.pdf');
				});
			});
		});
	};
});

// var doc = new jsPDF({
//     orientation: 'landscape'
// });
// doc.addImage(image[0], 'PNG', 40, 0);
// doc.addPage();
// doc.addImage(image[1], 'PNG', 40, 0);
// doc.save('Test.pdf');
