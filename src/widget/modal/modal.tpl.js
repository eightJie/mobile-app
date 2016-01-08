module.exports = function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"modal-close\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"modal\" style=\"z-index: "
    + container.escapeExpression(((helper = (helper = helpers.zIndex || (depth0 != null ? depth0.zIndex : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"zIndex","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"modal-mask\"></div>\r\n	<div class=\"modal-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasClose : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"modal-content\"></div>\r\n	</div>\r\n</div>";
},"useData":true});

};