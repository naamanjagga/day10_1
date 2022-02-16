var globalArray = [];
$(document).ready(function() {
	$('#btn3').hide();
	$('#btn1').on('click', function() {
		add();
	});
	$('#btn5').on('click', function() {
		display();
	});
	$('#btn2').on('click', function() {
		$('#btn2').hide();
		$('#btn3').show();
		edit();
	});
	$('#btn3').on('click', function() {
		$('#btn2').show();
		$('#btn3').hide();
		update();
	});
    $('#btn4').on('click', function() {
		
		Delete();
	});
	$('#btn6').on('click', function() {
		clearform();
	});
});
function add() {
	//alert('naman');
	var id = document.getElementById('Id').value;
	var name = document.getElementById('Name').value;
	var price = document.getElementById('Price').value;
	var quantity = document.getElementById('Quantity').value;

	var obj = {
		id: id,
		name: name,
		price: price,
		quantity: quantity
	};
	globalArray.push(obj);
	//console.log(obj);
}
function edit() {
	var e_id = document.getElementById('Id').value;

	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == e_id) {
			$('#Name').val(globalArray[i].name);
			$('#Price').val(globalArray[i].price);
			$('#Quantity').val(globalArray[i].quantity);
		}
	}
}
function update() {
	var u_id = document.getElementById('Id').value;
	console.log(u_id);
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == u_id) {
			globalArray[i].name = document.getElementById('Name').value;
			globalArray[i].price = document.getElementById('Price').value;
			globalArray[i].quantity = document.getElementById('Quantity').value;
			console.log(globalArray[i].name);
			console.log(globalArray[i].price);
			//console.log(globalArray[i].name );
		}
	}
	//display();
}
function Delete() {
	var d_id = document.getElementById('Id').value;
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == d_id) {
            if (confirm('Are you sure you want to delete'+ globalArray[i].id +' row')) {
                   globalArray.splice(i,1)
            }
		}
	}
}
function display() {
	alert('naman');
	var dis = '<table><tr><th>Id</th><th>Name</th><th>Price</th><th>Quantity</th></tr>';
	for (var i = 0; i < globalArray.length; i++) {
		dis +=
			'<tr><td>' +
			globalArray[i].id +
			'</td><td>' +
			globalArray[i].name +
			'</td><td>' +
			globalArray[i].price +
			'</td><td>' +
			globalArray[i].quantity +
			'</td></tr>';
	}

	dis += '</table>';
	document.getElementById('display').innerHTML = dis;
	//console.log(dis);
	//document.getElementById('#display').innerHTML = dis;
}
function clearform() {
	$('#Id').val('');
	$('#Name').val('');
	$('#Price').val('');
	$('#Quantity').val('');
}
