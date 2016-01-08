var Modal = require('../../widget/modal/modal');


$('.modal-open').on('click', function() {

	var $tmpl = $('<div>sdafsadf<button class="J-btn">click it</button></div>');

	Modal.open({
		content: $tmpl,
		hasClose: true
	}).$el.on('click', '.J-btn', function() {
		Modal.open({
			content: '<span>111111111111222222222</span>',
			hasClose: true
		});
	});

});


// setInterval(function(){
// 	Modal.open();
// }, 2000);