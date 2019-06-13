document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    var serviceName = getParameterByName('selected');
    if(serviceName) {
        var selectElement = document.getElementById('serviceSelect');
        selectElement.value = serviceName;
        M.FormSelect.init(elems, {});
        serviceSelection();
    } else {
        M.FormSelect.init(elems, {});
    }
});

function serviceSelection() {
    var select = document.querySelector('#serviceSelect');
    fetch('/api/services?id=' + select.value)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            
            // Examine the text in the response
            response.json().then(function(data) {
                var services = data.service.services;
                var childElements = [];
                var ul = document.createElement('ul');
                ul.className = 'collection';
                services.forEach(function(instructions) {
                    var li = document.createElement('li');
                    li.className = 'collection-item';
                    li.innerHTML = '<i class="check material-icons">check_box</i>' + instructions;
                    ul.appendChild(li);
                    childElements.push(li);
                });
                var ins = document.querySelector('#service-instruction')
                
                ins.innerHTML = '';
                ins.appendChild(ul);
                if(data.service.otherInstructions) {
                    var p = document.createElement('p');
                    p.textContent = '* ' + data.service.otherInstructions;
                    ins.appendChild(p);
                }
            });
        }
        );
    }