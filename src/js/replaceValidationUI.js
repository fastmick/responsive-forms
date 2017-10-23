function replaceValidationUI(form) {
    // Suppress the default bubbles
    form.addEventListener("invalid", function(event) {
        event.preventDefault();
    }, true);

    // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
    // form submissions by default
    form.addEventListener("submit", function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
        }
    });


}

// Replace the validation UI for all forms
var forms = document.querySelectorAll("form");
for (var i = 0; i < forms.length; i++) {
    replaceValidationUI(forms[i]);
}