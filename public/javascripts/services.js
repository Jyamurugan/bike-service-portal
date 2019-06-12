document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    var instance = M.FormSelect.getInstance(elems[0]);
    console.log(instance);
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var serviceName = getParameterByName('selectedService');
    if(serviceName) {
        var selectElement = document.getElementById('serviceSelect')
        selectElement.value = serviceName;
    }
});