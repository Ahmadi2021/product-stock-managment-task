(function($) {
    "use strict"

    // Daterange picker
    var start = moment().subtract(0, "days");
	var end = moment().add(2, "days");

			function cb(start, end) {
				$(".input-daterange-datepicker").html(start.format("jYYYY/jMM/jDD") + " - " + end.format("jYYYY/jMM/jDD"));
			}
			cb(start, end);
			$(".input-daterange-datepicker").daterangepicker(
				{
					startDate: start,
                    endDate: end,
                    buttonClasses: ['btn', 'btn-sm'],
                    applyClass: 'btn-danger',
                    cancelClass: 'btn-inverse',
					jalaali: true,
				},
			);

    $('.input-daterange-timepicker').daterangepicker({
        timePicker: true,
        format: 'MM/DD/YYYY h:mm A',
        timePickerIncrement: 30,
        timePicker12Hour: true,
        timePickerSeconds: false,
        startDate: start,
        endDate: end,
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-danger',
        cancelClass: 'btn-inverse',
        jalaali: true,
    });
    $('.input-limit-datepicker').daterangepicker({
        startDate: start,
        endDate: end,
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-danger',
        cancelClass: 'btn-inverse',
        dateLimit: {
            days: 6
        },
        jalaali: true,
    });
})(jQuery);