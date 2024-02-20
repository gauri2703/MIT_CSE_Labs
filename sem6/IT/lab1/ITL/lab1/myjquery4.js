$(document).ready(function(){
    $('#bill').click(function(){
        var brand_name=$('#brand-choice').val();
        var quan=$('#quantity').val();
        let amt=0;
        let price=0;
        if (brand_name == 'HP') {

            if ($('#laptop').prop("checked") == true) {

                price = 80000;

            }

            else {

                price = 14000;

            }

        }

        else if (brand_name == 'Nokia') {

            if ($('#laptop').prop("checked") == true) {

                price = 60500;

            }

            else {

                price = 8000;

            }

        }

        else if (brand_name == 'Samsung') {

            if ($('#laptop').prop("checked") == true) {

                price = 70000;

            }

            else {

                price = 21500;

            }

        }

        else if (brand_name == 'Motorola') {

            if ($('#laptop').prop("checked") == true) {

                price = 50000;

            }

            else {

                price = 32000;

            }

        }

        else {

            if ($('#laptop').prop("checked") == true) {

                price = 140000;

            }

            else {

                price = 21000;

            }

        }
        let n = parseInt(quan);

        amt = n * price;

        alert(amt);

    });

        
    
})