let input = document.querySelector('.search');
const google = 'www.google.com/search?q=';

function runSearch(){
    document.location.replace(google + input.value);
}

