(function($) {
     "use strict" 


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	var chartBarRunning = function(){
		var options = {
	 series: [{
		name: ' سری 1 ',
	 data: [300, 200, 400, 300, 500, 300, 400, 200, 400,300]
   },],
	 chart: {
	 height: 350,
	 type: 'area',
	 fontFamily: 'iransans',
	 toolbar:{
		 show:false
	 },
   },
   dataLabels: {
	 enabled: false
   },
   grid:{
	   show:false
   },
   stroke: {
	 curve: 'smooth',
	 width:3
   },
   xaxis: {
	 type: 'Week',
	 categories: ["هفته 01", "هفته 02", "هفته 03", "هفته 04", "هفته 05", "هفته 06", "هفته 07","هفته 08","هفته 09","هفته 10"],
	 labels:{
		   show: true,
		   style:{
				colors:'#808080',
		   },
	  },
   },
	yaxis: {
	   opposite: true,
	   labels: {
			formatter: function (value) {
			 return value + " هزار ";
		   },
		   style: {
			   colors: '#787878',
			   fontSize: '13px',
			   fontWeight: 400
		   },
	   },
   },
   tooltip: {
	 x: {
	   format: 'dd/MM/yy HH:mm'
	 }
   },
   colors:['#ffab2d']
   };

   var chart = new ApexCharts(document.querySelector("#chartBarRunning"), options);
   chart.render();
   
   
}
	var chartBarRunning1 = function(){
			 var options = {
          series: [{
			name: ' سری 1 ',
          data: [300, 200, 400, 300, 500, 300, 400, 200, 400,300]
        },],
          chart: {
          height: 350,
		  type: 'area',
		  fontFamily: 'iransans',
		  toolbar:{
			  show:false
		  },
        },
        dataLabels: {
          enabled: false
        },
		grid:{
			show:false
		},
        stroke: {
          curve: 'smooth',
		  width:3
        },
        xaxis: {
          type: 'Week',
          categories: ["هفته 01", "هفته 02", "هفته 03", "هفته 04", "هفته 05", "هفته 06", "هفته 07","هفته 08","هفته 09","هفته 10"],
		  labels:{
			    show: true,
				style:{
					 colors:'#808080',
				},
		   },
        },
		 yaxis: {
			opposite: true,
			labels: {
				 formatter: function (value) {
				  return value + " هزار ";
				},
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontWeight: 400
				},
			},
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
		  }
        },
		colors:['#00ADA3']
        };

        var chart = new ApexCharts(document.querySelector("#chartBarRunning1"), options);
        chart.render();
		
		
	}
	var chartBarRunning2 = function(){
			 var options = {
          series: [{
			name: ' سری 1 ',
          data: [300, 200, 400, 300, 500, 300, 400, 200, 400,300]
        },],
          chart: {
          height: 350,
		  type: 'area',
		  fontFamily: 'iransans',
		  toolbar:{
			  show:false
		  },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
		  width:3
        },
		grid:{
			show:false
		},
        xaxis: {
          type: 'Week',
          categories: ["هفته 01", "هفته 02", "هفته 03", "هفته 04", "هفته 05", "هفته 06", "هفته 07","هفته 08","هفته 09","هفته 10"],
		  labels:{
			    show: true,
				style:{
					 colors:'#808080',
				},
		   },
        },
		 yaxis: {
			opposite: true,
			labels: {
				 formatter: function (value) {
				  return value + " هزار ";
				},
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontWeight: 400
				},
			},
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
		  }
        },
		fill:{
			type:'solid',
			opacity:0.05
		},
		colors:['#ff782c']
        };

        var chart = new ApexCharts(document.querySelector("#chartBarRunning2"), options);
        chart.render();
		
		
	}
	var chartBarRunning3 = function(){
			 var options = {
          series: [{
			name: ' سری 1 ',
          data: [300, 200, 400, 300, 500, 300, 400, 200, 400,300]
        },],
          chart: {
          height: 350,
		  type: 'area',
		  fontFamily: 'iransans',
		  toolbar:{
			  show:false
		  },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
		  width:3
        },
		grid:{
			show:false
		},
        xaxis: {
          type: 'Week',
          categories: ["هفته 01", "هفته 02", "هفته 03", "هفته 04", "هفته 05", "هفته 06", "هفته 07","هفته 08","هفته 09","هفته 10"],
		  labels:{
			    show: true,
				style:{
					 colors:'#808080',
				},
		   },
        },
		 yaxis: {
			opposite: true,
			labels: {
				 formatter: function (value) {
				  return value + " هزار ";
				},
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontWeight: 400
				},
			},
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
		  }
        },
		colors:['#374c98']
        };

        var chart = new ApexCharts(document.querySelector("#chartBarRunning3"), options);
        chart.render();
		
		
	}
	
	var handleDaterange = function(){
		
			var start = moment().subtract(0, "days");
			var end = moment().add(2, "days");

			function cb(start, end) {
				$(".input-daterange-timepicker").html(start.format("jYYYY/jMM/jDD") + " - " + end.format("jYYYY/jMM/jDD"));
			}
			cb(start, end);
			$(".input-daterange-timepicker").daterangepicker(
				{
					opens: "right",
					autoUpdateInput: true,
					alwaysShowCalendars: true,
					startDate: start,
					endDate: end,
					jalaali: true,
				},
				cb
			);

			cb(start, end);
	}
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){			
				chartBarRunning();			
				chartBarRunning1();			
				chartBarRunning2();			
				chartBarRunning3();			
				handleDaterange();			
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);