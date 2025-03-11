function StrokeSettings() {
	// Default stroke style and width
	let strokeStyle = 'black';
	let strokeWidth = 1;

	// Function to populate stroke settings options in the UI
	function populateOptions() {
		// Insert HTML for stroke width range input and stroke style dropdown
		select(".strokeSettings").html(
			'<div id="strokeWidthDiv" tooltip="Drag to Change Stroke Width">Width: <input type="range" id="strokeWidth" min="1" max="20" value="1" oninput="this.nextElementSibling.value = this.value"><output> 1</output></div>'
		);

		// Event listener for stroke width input change
		select("#strokeWidth").input(function() {
			strokeWeight(this.value()); // Set stroke weight based on input value
		});}

	// Initialize options on creation
	populateOptions();
}

// TODO: Add more functions to StrokeSettings class to handle stroke style and width changes. e.g. 