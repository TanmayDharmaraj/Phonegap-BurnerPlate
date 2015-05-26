$( document ).delegate("#galleria", "pageinit", function() {
				$('#gallery').imageflip()
});

$(document).ready(function(){
			
			/*Code to make content height 100%*/
			var screen = $.mobile.getScreenHeight();
			var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();
			var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
			var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
			var content = screen - header - footer - contentCurrent;
			$(".ui-content").height(content);
			/*End code to make content height 100%*/
			window.mySwipe = new Swipe(document.getElementById('slider'),{
											  startSlide:0,
											  speed: 400,
											  auto: 3000,
											  continuous: true,
											  disableScroll: false,
											  stopPropagation: false,
											  callback: function(index, elem) {},
											  transitionEnd: function(index, elem) {}
											});
			var header_tpl = Handlebars.compile($('#header_tpl').html());
			$('div[data-role="page"]').prepend(header_tpl());
			var ctxProjectList = {
				projects:[
					{
						url:"#",
						srcImage:"assets/project1.jpg",
						projectName:"Pristine"
					},
					{
						url:"#",
						srcImage:"assets/project2.jpg",
						projectName:"Elegance"
					},
					{
						url:"#",
						srcImage:"assets/project3.jpg",
						projectName:"Willows"
					},
					{
						url:"#",
						srcImage:"assets/project4.jpg",
						projectName:"Ivy Terrace"
					},
					{
						url:"#",
						srcImage:"assets/project5.jpg",
						projectName:"Urban Ville"
					},
					{
						url:"#",
						srcImage:"assets/project6.jpg",
						projectName:"Oasis"
					},
					{
						url:"#",
						srcImage:"assets/project7.jpg",
						projectName:"Picadilly Green"
					}
				]
			};
			var projectList = Handlebars.compile($("#project_tpl").html());
			var html = projectList(ctxProjectList);
			$("#prjList").html(html);
			$('div[data-role="page"]').trigger('create');
});