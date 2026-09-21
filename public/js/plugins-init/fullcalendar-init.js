$(document).ready(function() {
		
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2021-02-12',
		navLinks: true, // can click day/week names to navigate views
		selectable: true,
		selectHelper: true,
		select: function(start, end) {
			var title = prompt('عنوان رویداد:');
			var eventData;
			if (title) {
				eventData = {
					title: title,
					start: arg.start,
					end: arg.end,
					allDay: arg.allDay
				};
				$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
			}
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		isJalaali : true,
		isRTL : true,
		lang : "fa",
		events: [
			{
				title: 'رویداد کامل',
				start: '2021-02-01'
			},
			{
				title: 'رویداد طولانی',
				start: '2021-02-07',
				end: '2021-02-10',
				className: "bg-danger"
			},
			{
				id: 999,
				title: 'رویداد',
				start: '2021-02-09T16:00:00'
			  },
			  {
				id: 999,
				title: 'رویداد',
				start: '2021-02-16T16:00:00'
			  },
			  {
				title: 'کنفرانس',
				start: '2021-02-11',
				end: '2021-02-13',
				className: "bg-danger"
			  },
			  {
				title: 'ملاقات',
				start: '2021-02-12T10:30:00',
				end: '2021-02-12T12:30:00',
				className:"bg-info"
			  },
			  {
				title: 'ناهار',
				start: '2021-02-12T12:00:00'
			  },
			  {
				title: 'ملاقات',
				start: '2021-04-12T14:30:00'
			  },
			  {
				title: 'جشن',
				start: '2021-07-12T17:30:00'
			  },
			  {
				title: 'شام',
				start: '2021-02-12T20:00:00',
				className: "bg-warning"
			  },
			  {
				title: 'جشن تولد',
				start: '2021-02-13T07:00:00',
				className: "bg-secondary"
			  },
			  {
				title: 'کلیک برای گوگل',
				url: 'http://google.com/',
				start: '2021-02-28'
			  }
		]
	});
	
});