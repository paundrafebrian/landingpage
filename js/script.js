// kondisi tombol diklik akan hilang
$(document).ready(function(){
    $("#tombol").on('click', function(){
        $("#tombol").attr("hidden",true)
    });
});