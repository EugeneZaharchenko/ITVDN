(function() {
    var me = {};
    var form = document.querySelector('.form-container');
    var openButton = document.querySelector('.btn-down')
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
        form.classList.remove('is-hidden');
        // openButton.classList.remove("btn-down");
        openButton.classList.toggle("colorOnOpen");
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose)
    };

    me.close = function() {
        form.classList.add('is-hidden');
        // openButton.classList.add("btn-down");
    };

    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllCompleted(requiredFields)) {
            alert('Заполните пожалуйста все необходимые поля');
            return false;
        } else if (!ITVDN.validation.isEmail(emailValue)) {
            alert('Неверно введен email');
            return false;
        } else if (!ITVDN.validation.isNumber(numberValue)) {
            alert('Неверно введен номер');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!ITVDN.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    ITVDN.form = me;
}());