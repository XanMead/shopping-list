var handle = '<div class="handle"><i class="fa fa-bars"></i></div>';
var checkYes = '<div class="button checkbox"><i class="fa fa-check"></i></div>';
var checkNo = '<div class="button check-o"><i class="fa fa-circle-o"></i></div>';
var editBox = '<input class="item-entry edit-box" id="edit" type="text">';
var edit = '<div class="button edit"><i class="fa fa-pencil"></i></div>';
var delButton = '<div class="button delete"><i class="fa fa-remove"></i></div>';

$(document).ready(function() {

	// Allow enter to trigger add button click event
	// NOT YET FUNCTIONAL
	$('.item-entry').keypress(function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			console.log(event.target.next());
			event.target.next().click();
		}
	});

	// Add button listener
	$('.add-button').on('click', function(event) {
		addItem();
	});

	// Check button listener
	$('.checkbox').on('click', function(event) {
		checkItem(event);
	});

	// Uncheck button listener
	$('.check-o').on('click', function(event) {
		uncheckItem(event);
	});
	
	// Delete button listener
	$('.delete').on('click', function(event) {
		deleteItem(event);
	});
	
	// Edit button listener
	$('.edit').on('click', function(event) {
		console.log("Edit function not yet implemented...");
	});
	
});


function addItem() {
	console.log("adding item...");
	var itemText = $('#add').val().trim();
	if (!itemText) {
		// String is empty/pure whitespace
		alert('Please enter text to add an item.')
	}
	else {
		var entry = createEntry(itemText);
		$('<li class="item-box"></div>').prependTo('.item-list').html(entry);
	}
	// Clear input
	$('#add').val('');
}

function createEntry(itemText) {
	var entry = handle + checkYes + checkNo;
	entry += '<div class="item-display unchecked">' + itemText + '</div>';
	entry += edit + delButton;
	return entry;
}

function checkItem(event) {
	console.log("Check function not yet implemented...");
}

function uncheckItem(event) {
	console.log("Uncheck function not yet implemented...");
}

function deleteItem(event) {
	console.log("Delete function not yet implemented...");
}

/*

OLD LIST STYLE

<div class="item-list">
	<ul>
		<li>
			<div class="item-box">
				<div class="handle">
					<i class="fa fa-bars"></i>
				</div>
				<div class="button checkbox">
					<i class="fa fa-check"></i>
				</div>
				<div class="button check-o">
					<i class="fa fa-circle-o"></i>
				</div>
				<div class="item-display unchecked">Bread</div>
				<input class="item-entry" type="text" placeholder="Add item...">
				<div class="button edit">
					<i class="fa fa-pencil"></i>
				</div>
				<div class="button delete">
					<i class="fa fa-remove"></i>
				</div>
			</div>
		</li>
		<li>
			<div class="item-box">
				<div class="handle">
					<i class="fa fa-bars"></i>
				</div>
				<div class="button checkbox">
					<i class="fa fa-check"></i>
				</div>
				<div class="button check-o">
					<i class="fa fa-circle-o"></i>
				</div>
				<div class="item-display unchecked">Meat</div>
				<div class="button edit">
					<i class="fa fa-pencil"></i>
				</div>
				<div class="button delete">
					<i class="fa fa-remove"></i>
				</div>
			</div>
		</li>
		<li>
			<div class="item-box">
				<div class="handle">
					<i class="fa fa-bars"></i>
				</div>
				<div class="button checkbox">
					<i class="fa fa-check"></i>
				</div>
				<div class="button check-o">
					<i class="fa fa-circle-o"></i>
				</div>
				<div class="item-display unchecked">hex bolts stainless steel 1&frac12;" - 30 x 6"</div>
				<div class="button edit">
					<i class="fa fa-pencil"></i>
				</div>
				<div class="button delete">
					<i class="fa fa-remove"></i>
				</div>
			</div>
		</li>
		<li>
			<div class="item-box">
				<div class="handle">
					<i class="fa fa-bars"></i>
				</div>
				<div class="button checkbox">
					<i class="fa fa-check"></i>
				</div>
				<div class="button check-o">
					<i class="fa fa-circle-o"></i>
				</div>
				<div class="item-display checked">Gritted Teeth</div>
				<div class="button edit">
					<i class="fa fa-pencil"></i>
				</div>
				<div class="button delete">
					<i class="fa fa-remove"></i>
				</div>
			</div>
		</li>
		<li>
			<div class="item-box">
				<div class="handle">
					<i class="fa fa-bars"></i>
				</div>
				<div class="button checkbox">
					<i class="fa fa-check"></i>
				</div>
				<div class="button check-o">
					<i class="fa fa-circle-o"></i>
				</div>
				<div class="item-display checked">Manly Spirit</div>
				<div class="button edit">
					<i class="fa fa-pencil"></i>
				</div>
				<div class="button delete">
					<i class="fa fa-remove"></i>
				</div>
			</div>
		</li>
	</ul>
</div>

*/