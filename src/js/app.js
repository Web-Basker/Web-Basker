(function(app) {

    app.initialize = function () {
        form = document.getElementById('contactForm');
        submitButton = document.getElementById('submitButton')
        submitButton.addEventListener('click', () => {
            form.reset();
        });
    }
})(window.app = window.app || {})

app.initialize();