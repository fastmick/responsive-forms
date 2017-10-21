(function () {
    
    $("button").click(function () {
        var invalidFields = $('form :invalid');
        var errorMessages = $('form .error-message');
        // console.log('invalidFields (jquery): '+invalidFields.length);
        // console.log('errorMessages (jquery): '+errorMessages.length);
        // console.log('invalidField 1 (jquery): '+invalidFields[ 1 ].validationMessage);
        // var elems = $('form').find(':invalid');

        for (var i = 0; i < errorMessages.length; i++) {
            // console.log('remove: '+errorMessages.length);
            var parentTag = $(errorMessages[i]).parent();
            parentTag.children('.error-message').remove();
        }

        for (var i = 1; i < invalidFields.length; i++) {
            // console.log('invalidField in for (jquery): '+invalidFields[ i ]);
            var parentTag = $(invalidFields[i]).parent();
            var errorMessage = invalidFields[i].validationMessage;
            parentTag.append("<div class='error-message bubble with-border bubble__arrow-top bubble__arrow-pos-x-12'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>" + errorMessage + "</div>");
        }

        if (invalidFields.length > 0) {
            console.log('form errors: ' + invalidFields.length);
        }
    });



})();