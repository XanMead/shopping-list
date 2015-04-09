var handle = '<div class="handle"><i class="fa fa-bars"></i></div>';
var checkYes = '<div class="button checkbox"><i class="fa fa-check"></i></div>';
var editBox = '<input class="item-entry edit-box" type="text">';
var edit = '<div class="button edit"><i class="fa fa-pencil"></i></div>';
var delButton = '<div class="button delete"><i class="fa fa-remove"></i></div>';

$(document).ready(function() {

	// Allow enter to trigger add button click event
	$('.item-entry').keypress(function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			// Terget the next adjacent button, i.e 'add' or 'edit'
			$(event.target).next('.button').click();
		}
	});

	// Data initialization listener
	$('.logo').on('click', function(event) { initData(); });

	// Add button listener
	$('.add-button').on('click', function(event) { addItem(); });

	// Check button listener
	$('.item-list').on('click', '.checkbox', function(event) {
		console.log(event.target);
		toggleItem(event);
	});

	// Uncheck button listener
	$('.item-list').on('click', '.check-o', function(event) { uncheckItem(event); });
	
	// Delete button listener
	$('.item-list').on('click', '.delete', function(event) { deleteItem(event); });
	
	// Edit button listener
	$('.item-list').on('click', '.edit', function(event) {
		console.log("Edit function not yet implemented...");
	});
	
	// How-to rollover listeners
	$('.how-to').mouseenter(function() {
		$('.info-panel').show();
	});

	$('.how-to').mouseleave(function() {
		$('.info-panel').hide();
	});
});

function initData() {
	resetList();
	createEntry('Meat');
	createEntry('Bread');
	createEntry('Stainless Steel Hex Bolts 1&frac12;" - 30 x 6"');
	createEntry('Gritted Teeth');
	createEntry('Manly Spirit');
}

function resetList() {
	$('.item-list').children().remove();
}

/* Fetches input from the add-box */
function addItem() {
	console.log("adding item...");
	var itemText = $('#add').val().trim();
	if (!itemText) {
		// String is empty/pure whitespace
		alert('Please enter text to add an item.')
		// Clear input
		$('#add').val('');
	}
	else if (itemText.length > 30) {
		alert('Please limit your entry to 30 characters.')
	}
	else {
		createEntry(itemText);
		// Clear input
		$('#add').val('');
	}
}

/* Creates an entry on the list */
function createEntry(itemText) {
	console.log("Creating item '" + itemText + "'...");
	var entry = handle + checkYes;
	entry += '<div class="item-display unchecked">' + itemText + '</div>';
	entry += edit + delButton;
	$('<li class="item-box"></div>').appendTo('.item-list').html(entry);
}

function toggleItem(event) {
	var parentBox = $(event.target).parents('.item-box');
	// Toggle .unchecked [off -> on] or [on -> off]
	parentBox.children('.item-display').toggleClass('unchecked');
	// Toggle .checked on [on -> off] or [off -> on]
	parentBox.children('.item-display').toggleClass('checked');
	// Toggle check-button style
	parentBox.children('.checkbox').toggleClass('button-toggled');
}

function deleteItem(event) {
	$(event.target).parents('.item-box').remove();
}