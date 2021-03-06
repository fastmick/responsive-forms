(function() {
    $("button").click(function() {
        // console.log('button click')
        var browser = $("html").attr("data-browser"),
            counter = 1;

        // counter for invalidFields must be start with 0
        if (browser == "edge") {
            counter = 0;
        }

        var invalidFields = $("form :invalid"),
            errorMessages = $("form .error-message"),
            errorMessage = invalidFields[counter].validationMessage;

        // console.log('errorMessages: ' + errorMessages.length);

        // -> show and delete only one error message
        // delete error message
        // var parentTagErrorMessage = $(errorMessages[0]).parent();
        // parentTagErrorMessage.children('.error-message').remove();

        // // create error message
        // var parentTagInvalidInput = $(invalidFields[counter]).parent();
        // parentTagInvalidInput.append(
        //     "<div class='error-message bubble with-border bubble__arrow-top bubble__arrow-pos-x-12'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>" +
        //     errorMessage +
        //     "</div>"
        // );

        // -> show and delete all error messages
        for (var i = 0; i < errorMessages.length; i++) {
            // console.log('remove: '+errorMessages.length);
            var parentTag = $(errorMessages[i]).parent();
            parentTag.children(".error-message").remove();
        }

        for (var i = counter; i < invalidFields.length; i++) {
            // console.log('invalidField in for (jquery): '+invalidFields[ i ]);
            var parentTag = $(invalidFields[i]).parent();
            var errorMessage = invalidFields[i].validationMessage;
            parentTag.append(
                "<div class='error-message bubble with-border bubble__arrow-top bubble__arrow-pos-x-12'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>" +
                errorMessage +
                "</div>"
            );
        }

        // if (invalidFields.length > 0) {
        //     console.log('form errors: ' + invalidFields.length);
        // }
    });


    var nachname = document.querySelector('input[name="nachname"]');
    var vorname = document.querySelector('input[name="vorname"]');

    nachname.setCustomValidity('Bitte geben Sie Ihren Nachnamen ein!');
    nachname.addEventListener('input', function() {
        // Note: if (this.checkValidity()) won't work
        // as setCustomValidity('with a message') will set
        // the field as invalid.
        if (this.value.trim() === '') {
            this.setCustomValidity('Bitte geben Sie Ihren Nachnamen ein!');
        } else {
            this.setCustomValidity('');
        }
    }, false);

    // nachname.addEventListener('invalid', function () {
    //     if (this.value.trim() !== '') {
    //         this.setCustomValidity("'" + this.value + "' ist kein valider Name!");
    //     }
    // }, false);



    vorname.setCustomValidity('Bitte geben Sie Ihren Vornamen ein!');
    vorname.addEventListener('input', function() {
        if (this.value.trim() === '') {
            this.setCustomValidity('Bitte geben Sie Ihren Vornamen ein!');
        } else {
            this.setCustomValidity('');
        }
    }, false);


})();