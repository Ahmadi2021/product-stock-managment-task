(function($) {
    "use strict"

	var dzMorris = function(){
		
		var screenWidth = $(window).width();
		
		var setChartWidth = function(){
			if(screenWidth <= 768)
			{
				var chartBlockWidth = 0;
				chartBlockWidth = (screenWidth < 300 )?screenWidth:300;
				jQuery('.morris_chart_height').css('min-width',chartBlockWidth - 31);
			}
		}
		
		var donutChart = function(){
			Morris.Donut({
				element: 'morris_donught',
				data: [{
					label: "\xa0 \xa0 فروش دانلودی \xa0 \xa0",
					value: 12,

				}, {
					label: "\xa0 \xa0 فروش فروشگاه \xa0 \xa0",
					value: 30
				}, {
					label: "\xa0 \xa0 فروش ایمیلی \xa0 \xa0",
					value: 20
				}],
				resize: true,
				redraw: true,
				colors: ['#EB8153', 'rgb(255, 92, 0)', '#6418C3'],

				//responsive:true,
				
			});
		}
		
		var lineChart = function(){
			//line chart
			let line = new Morris.Line({
				element: 'morris_line',
				resize: true,
				data: [{
						y: '1394 Q1',
						item1: 2666
					},
					{
						y: '1394 Q2',
						item1: 2778
					},
					{
						y: '1394 Q3',
						item1: 4912
					},
					{
						y: '1394 Q4',
						item1: 3767
					},
					{
						y: '1395 Q1',
						item1: 6810
					},
					{
						y: '1395 Q2',
						item1: 5670
					},
					{
						y: '1395 Q3',
						item1: 4820
					},
					{
						y: '1395 Q4',
						item1: 15073
					},
					{
						y: '1396 Q1',
						item1: 10687
					},
					{
						y: '1396 Q2',
						item1: 8432
					}
				],
				xkey: 'y',
				ykeys: ['item1'],
				labels: ['آیتم 1'],
				gridLineColor: 'transparent',
				lineColors: ['rgb(255, 62, 62)'], //here
				lineWidth: 1,
				hideHover: 'auto',
				pointSize: 0,
				axes: false
			});	
		}
		
		var lineChart2 = function(){
			//Area chart
			Morris.Area({
				element: 'line_chart_2',
				data: [{
						period: '1393',
						smartphone: 0,
						windows: 0,
						mac: 0
					}, {
						period: '1394',
						smartphone: 90,
						windows: 60,
						mac: 25
					}, {
						period: '1395',
						smartphone: 40,
						windows: 80,
						mac: 35
					}, {
						period: '1396',
						smartphone: 30,
						windows: 47,
						mac: 17
					}, {
						period: '1397',
						smartphone: 150,
						windows: 40,
						mac: 120
					}, {
						period: '1398',
						smartphone: 25,
						windows: 80,
						mac: 40
					}, {
						period: '1399',
						smartphone: 10,
						windows: 10,
						mac: 10
					}


				],
				xkey: 'period',
				ykeys: ['smartphone', 'windows', 'mac'],
				labels: ['موبایل', 'ویندوز', 'مک'],
				pointSize: 3,
				fillOpacity: 0,
				pointStrokeColors: ['#FF3E3E', '#6418C3', '#EB8153'],
				behaveLikeLine: true,
				gridLineColor: 'transparent',
				lineWidth: 3,
				hideHover: 'auto',
				lineColors: ['rgb(255, 62, 62)', 'rgb(0, 171, 197)', '#EB8153'],
				resize: true

			});
		}
		
		var barChart = function(){
			if(jQuery('#morris_bar').length > 0)
			{
			//bar chart
				Morris.Bar({
					element: 'morris_bar',
					data: [{
						y: '1393',
						a: 100,
						b: 90,
						c: 60
					}, {
						y: '1394',
						a: 75,
						b: 65,
						c: 40
					}, {
						y: '1395',
						a: 50,
						b: 40,
						c: 30
					}, {
						y: '1396',
						a: 75,
						b: 65,
						c: 40
					}, {
						y: '1397',
						a: 50,
						b: 40,
						c: 30
					}, {
						y: '1398',
						a: 75,
						b: 65,
						c: 40
					}, {
						y: '1399',
						a: 100,
						b: 90,
						c: 40
					}],
					xkey: 'y',
					ykeys: ['a', 'b', 'c'],
					labels: ['الف', 'ب', 'پ'],
					barColors: ['#EB8153', '#6418C3', '#ff9f00'],
					hideHover: 'auto',
					gridLineColor: 'transparent',
					resize: true,
					barSizeRatio: 0.25,
				});	
			}
		}
		
		var barStalkChart = function(){
			//bar chart
			Morris.Bar({
				element: 'morris_bar_stalked',
				data: [{
					y: 'س',
					a: 66, 
					b: 34
				}, {
					y: 'م',
					a: 75, 
					b: 25
				}, {
					y: 'ت',
					a: 50, 
					b: 50
				}, {
					y: 'و',
					a: 75, 
					b: 25
				}, {
					y: 'ت',
					a: 50, 
					b: 50
				}, {
					y: 'ف',
					a: 16, 
					b: 84
				}, {
					y: 'س',
					a: 70, 
					b: 30
				}, {
					y: 'س',
					a: 30, 
					b: 70
				}, {
					y: 'م',
					a: 40, 
					b: 60
				}, {
					y: 'ت',
					a: 29, 
					b: 71
				}, {
					y: 'و',
					a: 44, 
					b: 56
				}, {
					y: 'ت',
					a: 30, 
					b: 70
				}, {
					y: 'ف',
					a: 60, 
					b: 40
				}, {
					y: 'گ',
					a: 40, 
					b: 60
				}, {
					y: 'س',
					a: 46, 
					b: 54
				}],
				xkey: 'y',
				ykeys: ['a', 'b'],
				labels: ['الف', 'ب'],
				barColors: ['#EB8153', "#F1F3F7"],
				hideHover: 'auto',
				gridLineColor: 'transparent',
				resize: true,
				barSizeRatio: 0.25,
				stacked: true, 
				behaveLikeLine: true,
				//redraw: true
				
				// barRadius: [6, 6, 0, 0]
			});
		
		}
		
		var areaChart = function(){
			//area chart
			Morris.Area({
				element: 'morris_area',
				data: [{
						period: '1393',
						smartphone: 0,
						windows: 0,
						mac: 0
					}, {
						period: '1394',
						smartphone: 90,
						windows: 60,
						mac: 25
					}, {
						period: '1395',
						smartphone: 40,
						windows: 80,
						mac: 35
					}, {
						period: '1396',
						smartphone: 30,
						windows: 47,
						mac: 17
					}, {
						period: '1397',
						smartphone: 150,
						windows: 40,
						mac: 120
					}, {
						period: '1398',
						smartphone: 25,
						windows: 80,
						mac: 40
					}, {
						period: '1399',
						smartphone: 10,
						windows: 10,
						mac: 10
					}


				],
				lineColors: ['#EB8153', 'rgb(16, 202, 147)', 'rgb(255, 92, 0)'],
				xkey: 'period',
				ykeys: ['smartphone', 'windows', 'mac'],
				labels: ['موبایل', 'ویندوز', 'مک'],
				pointSize: 0,
				lineWidth: 0,
				resize: true,
				fillOpacity: 0.95,
				behaveLikeLine: true,
				gridLineColor: 'transparent',
				hideHover: 'auto'

			});
		}
		
		var areaChart2 = function(){
			if(jQuery('#morris_area_2').length > 0)
			{
			//area chart
				Morris.Area({
					element: 'morris_area_2',
					data: [{
							period: '2010',
							SiteA: 0,
							SiteB: 0,

						}, {
							period: '1394',
							SiteA: 130,
							SiteB: 100,

						}, {
							period: '1395',
							SiteA: 80,
							SiteB: 60,

						}, {
							period: '1396',
							SiteA: 70,
							SiteB: 200,

						}, {
							period: '2014',
							SiteA: 180,
							SiteB: 150,

						}, {
							period: '2015',
							SiteA: 105,
							SiteB: 90,

						},
						{
							period: '2016',
							SiteA: 250,
							SiteB: 150,

						}
					],
					xkey: 'period',
					ykeys: ['SiteA', 'SiteB'],
					labels: ['Site A', 'Site B'],
					pointSize: 0,
					fillOpacity: 0.6,
					pointStrokeColors: ['#b4becb', '#00A2FF'], //here
					behaveLikeLine: true,
					gridLineColor: 'transparent',
					lineWidth: 0,
					smooth: false,
					hideHover: 'auto',
					lineColors: ['rgb(0, 171, 197)', 'rgb(0, 0, 128)'],
					resize: true

				});	
			}
		}
		
		
		/* Function ============ */
		return {
			init:function(){
				setChartWidth();
				donutChart();
				lineChart();
				lineChart2();
				barChart();
				barStalkChart();
				areaChart();
				areaChart2();
			},
			
			
			resize:function(){
				screenWidth = $(window).width();
				setChartWidth();
				donutChart();
				lineChart();
				lineChart2();
				barChart();
				barStalkChart();
				areaChart();
				areaChart2();
			}
		}
		
	}();

	jQuery(document).on('ready' , function(){
		dzMorris.init();
		dzMorris.resize();
	
	});
		
	jQuery(window).on('load',function(){
		dzMorris.init();
	});
		
	jQuery( window ).resize(function() {
		dzMorris.resize();
		dzMorris.init();
	});
   
})(jQuery);