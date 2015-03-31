$(document).ready(function() {

});

var handle = '<div class="handle"><i class="fa fa-bars"></i></div>';
var checkYes = '<div class="button checkbox"><i class="fa fa-check"></i></div>';
var checkNo = '<div class="button check-o"><i class="fa fa-circle-o"></i></div>';
var edit = '<div class="button edit"><i class="fa fa-pencil"></i></div>';
var delButton = '<div class="button delete"><i class="fa fa-remove"></i></div>';

function addItem() {
	var itemText = $('.item-entry').val().trim();
	if (!itemText) {
		alert('Please enter text to add an item.')
	}
	else {
		var entry = createEntry(itemText);
		$('<li class="item-box"></div>').prependTo('.item-list').html(entry);
	}
}

function createEntry(itemText) {
	var entry = handle + checkYes + checkNo;
	entry += '<div class="item-display unchecked">' + itemText + '</div>';
	entry += edit + delButton;
	return entry;
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