(function ($) {
    "use strict"
	
jQuery(".form-valide").validate({
    rules: {
        "val-username": {
            required: !0,
            minlength: 3
        },
        "val-email": {
            required: !0,
            email: !0
        },
        "val-password": {
            required: !0,
            minlength: 5
        },
        "val-confirm-password": {
            required: !0,
            equalTo: "#val-password"
        },
        "val-select2": {
            required: !0
        },
        "val-select2-multiple": {
            required: !0,
            minlength: 2
        },
        "val-suggestions": {
            required: !0,
            minlength: 5
        },
        "val-skill": {
            required: !0
        },
        "val-currency": {
            required: !0,
            currency: ["$", !0]
        },
        "val-website": {
            required: !0,
            url: !0
        },
        "val-phoneus": {
            required: !0,
            phoneUS: !0
        },
        "val-digits": {
            required: !0,
            digits: !0
        },
        "val-number": {
            required: !0,
            number: !0
        },
        "val-range": {
            required: !0,
            range: [1, 5]
        },
        "val-terms": {
            required: !0
        }
    },
    messages: {
        "val-username": {
            required: "لطفا یک نام کاربری وارد کنید",
            minlength: "نام کاربری شما باید حداقل از 3 کاراکتر تشکیل شده باشد"
        },
        "val-email": "لطفا یک آدرس ایمیل معتبر وارد کنید",
        "val-password": {
            required: "لطفا رمز عبور بدهید",
            minlength: "رمز عبور شما باید حداقل 5 کاراکتر باشد"
        },
        "val-confirm-password": {
            required: "لطفا رمز عبور بدهید",
            minlength: "رمز عبور شما باید حداقل 5 کاراکتر باشد",
            equalTo: "لطفا رمز عبور مشابه بالا را وارد کنید"
        },
        "val-select2": "لطفا یک مقدار را انتخاب کنید!",
        "val-select2-multiple": "لطفا حداقل 2 مقدار را انتخاب کنید!",
        "val-suggestions": "برای بهتر شدن چه کنیم؟",
        "val-skill": "لطفا یک مهارت را انتخاب کنید!",
        "val-currency": "لطفا قیمت را وارد کنید",
        "val-website": "لطفا وب سایت خود را وارد کنید!",
        "val-phoneus": "لطفا یک تلفن ایالات متحده وارد کنید!",
        "val-digits": "لطفا فقط اعداد را وارد کنید!",
        "val-number": "لطفا یک عدد وارد کنید!",
        "val-range": "لطفا عددی بین 1 تا 5 وارد کنید!",
        "val-terms": "شما باید با شرایط خدمات موافقت کنید!"
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function(e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});


jQuery(".form-valide-with-icon").validate({
    rules: {
        "val-username": {
            required: !0,
            minlength: 3
        },
        "val-password": {
            required: !0,
            minlength: 5
        }
    },
    messages: {
        "val-username": {
            required: "لطفا یک نام کاربری وارد کنید",
            minlength: "نام کاربری شما باید حداقل از 3 کاراکتر تشکیل شده باشد"
        },
        "val-password": {
            required: "لطفا رمز عبور بدهید",
            minlength: "رمز عبور شما باید حداقل 5 کاراکتر باشد"
        }
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function(e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-valid")
    }




});

})(jQuery);