$(document).ready(function() {
    $("#getDataButton").click(function() {
        $.ajax({
            url: "http://127.0.0.1:5501/codeweb.html", // Thay thế bằng địa chỉ URL của máy chủ và đường dẫn dữ liệu
            type: "GET",
            success: function(data) {
                $("#dataDisplay").text("Heart rate: " + data); // Hiển thị dữ liệu nhận được lên trang web
            },
            error: function(xhr, status, error) {
                console.log("Error: " + error); // Xử lý lỗi nếu có
            }
        });
    });
});