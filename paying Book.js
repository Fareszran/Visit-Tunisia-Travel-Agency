   function validateForm() {
      // Get form elements
      var fullName = document.querySelector('input[placeholder="john deo"]');
      var email = document.querySelector('input[placeholder="example@example.com"]');
      var address = document.querySelector('input[placeholder="room - street - locality"]');
      var city = document.querySelector('input[placeholder="mumbai"]');
      var state = document.querySelector('input[placeholder="india"]');
      var zipCode = document.querySelector('input[placeholder="123 456"]');
      var nameOnCard = document.querySelector('input[placeholder="mr. john deo"]');
      var cardNumber = document.querySelector('input[placeholder="1111-2222-3333-4444"]');
      var expMonth = document.querySelector('input[placeholder="january"]');
      var expYear = document.querySelector('input[placeholder="2022"]');
      var cvv = document.querySelector('input[placeholder="1234"]');

      // Check if any field is empty
      if (
        !fullName.value ||
        !email.value ||
        !address.value ||
        !city.value ||
        !state.value ||
        !zipCode.value ||
        !nameOnCard.value ||
        !cardNumber.value ||
        !expMonth.value ||
        !expYear.value ||
        !cvv.value
      ) {
        alert("Please fill in all the information.");
      } else {
        alert("Done!");
        // You can submit the form or perform other actions here
        // For example: document.getElementById("paymentForm").submit();
      }
    }