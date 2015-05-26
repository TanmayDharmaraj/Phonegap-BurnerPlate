// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
	var header_tpl = Handlebars.compile($('#header_tpl').html());
	/* --------------------------------- Event Registration -------------------------------- */
	
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		renderMasterView();
		if (navigator.notification) { // Override default HTML alert with native dialog
			window.alert = function (message) {
				navigator.notification.alert(
					message,    // message
					null,       // callback
					"Workshop", // title
					'OK'        // buttonName
				);
			};
		}
	}, function(){alert("Failed")});
    
	/* ---------------------------------- Local Functions ---------------------------------- */
	function renderMasterView(){
			$( ".ico-website" ).click(function() {
				window.location.href="#"
			});
			$( ".ico-meeting" ).click(function() {
				window.location.href="#"
			});
			$( ".ico-contact" ).click(function() {
				window.location.href="#contact"
			});
			$( ".ico-project" ).click(function() {
				window.location.href="#projects"
			});
    
			/*Code to make content height 100%*/
			var screen = $.mobile.getScreenHeight();
			var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();
			var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
			var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
			var content = screen - header - footer - contentCurrent;
			$(".ui-content").height(content);
			/*End code to make content height 100%*/
			window.mySwipe = new Swipe(document.getElementById('slider'),{
											  startSlide:2,
											  speed: 400,
											  auto: 3000,
											  continuous: true,
											  disableScroll: false,
											  stopPropagation: false,
											  callback: function(index, elem) {},
											  transitionEnd: function(index, elem) {}
											});
			
		$('div[data-role="page"]').prepend(header_tpl());
		$('div[data-role="page"]').trigger('create');
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
			$("#prjList").trigger('create');
	}
}());