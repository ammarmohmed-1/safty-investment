 $(function () {

        calc();

        $('#calc_plan').on('change', calc);
        $('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

      });

      function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
        return true;
      }


      function calc() {

        var plan = $('#calc_plan').val();
        var amount = $('#inv_amount').val();
        var percent = 650;
        var min = false;

        switch (plan) {
          case '1':
          if(amount < 100) {
            min = 100;
          }
          percent = 4;
          break;

          case '2':
          if(amount < 1000) {
            min = 1000;
          }
          percent = 5;
          break;

          case '3':
          if(amount < 5000) {
            min = 5000;
          }
          percent = 8;
          break;

          case '4':
          if(amount < 50) {
            min = 50;
          }
          percent = 1150;
          break;
        }

        if(min === false) {
          var total = amount * percent / 100;
          $('#total_day').html('$'+total.toFixed(2));
		  
		  var total = amount * percent / 100*7;
          $('#total_week').html('$'+total.toFixed(2));
		  
		  var total = amount * percent / 100*30;
          $('#total_return').html('$'+total.toFixed(2));
		  
        } else {
          console.log(min);
		  $('#total_day').html('Min.: $'+ min);
		  $('#total_week').html('Min.: $'+ min);
          $('#total_return').html('Min.: $'+ min);
        }

      }

      function limitText(limitField, limitCount, limitNum) {
        if (limitField.value.length > limitNum) {
          limitField.value = limitField.value.substring(0, limitNum);
        } else {
          limitCount.value = limitNum - limitField.value.length;
        }
      }