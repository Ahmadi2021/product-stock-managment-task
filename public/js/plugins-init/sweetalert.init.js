(function ($) {
    (document.querySelector(".sweet-wrong").onclick = function () {
        sweetAlert("اوپس...", "مشکلی پیش آمد !!", "خطا");
    }),
        (document.querySelector(".sweet-message").onclick = function () {
            swal("سلام، این یک پیام است !!");
        }),
        (document.querySelector(".sweet-text").onclick = function () {
            swal("سلام، این یک پیام است !!", "زیباست، اینطور نیست؟");
        }),
        (document.querySelector(".sweet-success").onclick = function () {
            swal("هی کار خوبه!!", "دکمه رو زدی!!", "موفقیت");
        }),
        (document.querySelector(".sweet-confirm").onclick = function () {
            swal(
                {
                    title: "مطمئنی حذف میکنی؟",
                    text: "شما نمی توانید این فایل را بازیابی کنید!!",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "بله حذف کن !!",
                    closeOnConfirm: !1,
                },
                function () {
                    swal("حذف شد !!", "سلام فایل شما حذف شده است !!", "موفقیت");
                }
            );
        }),
        (document.querySelector(".sweet-success-cancel").onclick = function () {
            swal(
                {
                    title: "مطمئنی حذف میکنی؟",
                    text: "شما نمی توانید این فایل را بازیابی کنید !!",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "بله حذف کن !!",
                    cancelButtonText: "نه حذف نکن !!",
                    closeOnConfirm: !1,
                    closeOnCancel: !1,
                },
                function (e) {
                    e ? swal("حذف شد !!", "سلام فایل شما حذف شده است !!", "موفقیت") : swal("لغو شد !!", "سلام فایل حذف فایل شما لغو شد !!", "خطا");
                }
            );
        }),
        (document.querySelector(".sweet-image-message").onclick = function () {
            swal({ title: "مطمئنید !!", text: "سلام، اینجا یک تصویر سفارشی است !!", imageUrl: "../assets/images/hand.jpg" });
        }),
        (document.querySelector(".sweet-html").onclick = function () {
            swal({ title: "مطمئنید !!", text: "سلام، شما از HTML استفاده می کنید !!"});
        }),
        (document.querySelector(".sweet-auto").onclick = function () {
            swal({ title: "بسته شدن خودکار اعلان !!", text: "سلام من 2 ثانیه دیگه میبندم !!", timer: 2e3, showConfirmButton: !1 });
        }),
        (document.querySelector(".sweet-prompt").onclick = function () {
            swal({ title: "یک ورودی وارد کنید !!", text: "یه چیز جالب بنویس !!", type: "input", showCancelButton: !0, closeOnConfirm: !1, animation: "slide-from-top", inputPlaceholder: "چیزی بنویسید" }, function (e) {
                return !1 !== e && ("" === e ? (swal.showInputError("باید چیزی بنویسی!"), !1) : void swal("سلام !!", "تو نوشتی: " + e, "موفقیت"));
            });
        }),
        (document.querySelector(".sweet-ajax").onclick = function () {
            swal({ title: "درخواست آژاکس !!", text: "برای اجرای درخواست آژاکس ارسال کنید !!", type: "info", showCancelButton: !0, closeOnConfirm: !1, showLoaderOnConfirm: !0 }, function () {
                setTimeout(function () {
                    swal("سلام، درخواست آژاکس شما تمام شد !!");
                }, 2e3);
            });
        });
})(jQuery);
