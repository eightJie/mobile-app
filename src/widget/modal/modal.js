var Handlebars = require('../../extend/handlebars');
var _zIndexBegin = 1000;
var _modalList = [];

function Modal(params) {
	this.options = $.extend({
		content: '',
		hasClose: false
	}, params);

	this.open();
}

Modal.prototype = {
	_tmpl: require('./modal.tpl.js')(Handlebars),
	constructor: Modal,
	open: function() {
		var options = this.options;
		var $el = $(this._tmpl({
			hasClose: options.hasClose,
			zIndex: _zIndexBegin
		}));

		$(document.body).append($el);
		this.$el = $el;
		this.$mask = $el.find('.modal-mask');
		this.$close = $el.find('.modal-close');
		this.$content = $el.find('.modal-content');

		this._addEvent();

		this.$content.html($(options.content));

	},

	_addEvent: function() {
		var self = this;

		self.$close.on('click', function() {
			self.close();
		});
	},

	close: function() {
		this.$el.remove();
	}
};

function open(params) {
	var modal;

	_modalList.push(modal = new Modal(params));
	_zIndexBegin++;
	return modal;
}

function close() {
	var lastModal = _modalList.pop();
	lastModal.close();
}


module.exports = {
	open: open,
	close: close
};