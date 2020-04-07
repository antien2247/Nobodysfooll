/**
 * Created by Techcare on 4/7/2020.
 */
$(document).ready(function () {
    $('#btn-next').click(function () {
        var slide_sau = $('.active').next();
        console.log(slide_sau.length);
        if(slide_sau.length!=0){
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd',function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd',function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
    });
});
$(document).ready(function () {
    $('#btn-next').click(function () {
        var slide_truoc = $('.active').prev();
        console.log(slide_truoc.length);
        if(slide_truoc.length!=0){
            $('.active').addClass('bien-ben-trai').one('webkitAnimationEnd',function (event) {
                $('.bien-ben-trai').removeClass('bien-ben-trai').removeClass('active');
            });
            slide_truoc.addClass('active').addClass('di-ben-phai').one('webkitAnimationEnd',function (event) {
                $('.di-ben-phai').removeClass('di-ben-phai');
            });
        }else {
            $('.active').addClass('bien-ben-trai').one('webkitAnimationEnd',function (event) {
                $('.bien-ben-trai').removeClass('bien-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-ben-phai').one('webkitAnimationEnd',function (event) {
                $('.di-ben-phai').removeClass('di-ben-phai');
            });
        }
    });
});