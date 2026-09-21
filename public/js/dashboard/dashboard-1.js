(function($) {
    "use strict"


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	var marketChart = function(){
		 var options = {
          series: [{
          name: ' سری 1 ',
          data: [200, 400, 300, 400, 200, 400, 200,300, 200, 300]
        }, {
          name: ' سری 2 ',
          data: [500, 300, 400, 200, 500, 200, 400, 300, 500, 200]
        }],
          chart: {
          height: 300,
		  type: 'area',
		  fontFamily: 'iransans',
		  toolbar:{
			  show:false
		  }
		},
		colors:["#FFAB2D","#00ADA3"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
		  width:4
        },
		legend:{
			show:false,
		},
		grid:{
			show:false,
			strokeDashArray: 6,
			borderColor: '#dadada',
		},
		yaxis: {
		  labels: {
			style: {
				colors: '#B5B5C3',
				fontSize: '12px',
				fontWeight: 400,
				
			},
			formatter: function (value) {
			  return value + " هزار ";
			}
		  },
		},
        xaxis: {
          categories: ["هفته 01","هفته 02","هفته 03","هفته 04","هفته 05","هفته 06","هفته 07","هفته 08","هفته 09","هفته 10"],
		  labels:{
			  style: {
				colors: '#B5B5C3',
				fontSize: '12px',
				fontFamily: 'iransans',
				fontWeight: 400
				
			},
		  }
        },
		fill:{
			type:'solid',
			opacity:0.05,
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
		  },
		  style: {
			fontFamily: 'iransans',
		},
        },
        };

        var chart = new ApexCharts(document.querySelector("#marketChart"), options);
        chart.render();
	}
	var currentChart = function(){
		 var options = {
          series: [85, 60, 67, 50],
          chart: {
          height: 315,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
				startAngle:-90,
			   endAngle: 90,
            dataLabels: {
              name: {
				fontSize: '22px',
				fontFamily: 'iransans',
              },
              value: {
				fontSize: '16px',
              },
            }
          },
        },
		stroke:{
			 lineCap: 'round',
		},
        labels: ['درآمد', 'درآمد', 'درآمد', 'درآمد'],
		 colors:['#ec8153', '#70b944','#498bd9','#6647bf'],
        };

        var chart = new ApexCharts(document.querySelector("#currentChart"), options);
        chart.render();
	}
	
	var recentContact = function(){
		jQuery('.testimonial-one').owlCarousel({
			loop:true,
			autoplay:true,
			margin:20,
			nav:false,
			rtl:true,
			dots: false,
			navText: ['', ''],
			responsive:{
				0:{
					items:3
				},
				450:{
					items:4
				},
				600:{
					items:5
				},	
				991:{
					items:5
				},			
				
				1200:{
					items:7
				},
				1601:{
					items:5
				}
			}
		})
	}
	
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
					marketChart();
					currentChart();
					recentContact();
					
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