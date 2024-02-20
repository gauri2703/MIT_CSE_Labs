$(document).ready(function () {
    $('#orderForm').submit(function (event) {
        event.preventDefault();

        var formData = $(this).serializeArray();
        var tableBody = $('#orderSummary tbody');
        tableBody.empty();

        formData.forEach(function (item) {
            if (item.value !== "0") {
                tableBody.append('<tr><td>' + item.name + '</td><td>' + item.value + '</td></tr>');
            }
        });

        // Animation
        $('.moving-image').animate({ left: '100%' }, 2000);
    });
});