const form = document.getElementById('form1');
const campos = document.querySelectorAll('.required');
const small = document.querySelectorAll('.small-required');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    nameValidate();
    numberValidate();
    numberValidate();
    monthValidate();
    yearValidate();
    cvvValidate();
});

function setError(index) {
   campos[index].style.border = '1px solid #dc6378';
   small[index].style.visibility = 'visible';

}

function removeError(index) {
    campos[index].style.border = '1px solid #6355ac';
    small[index].style.visibility = 'hidden';
}

function nameValidate() {
    if(campos[0].value.length < 3) {

        setError(0);

    } else {
        removeError(0);
    }
}

function numberValidate() {
    if(campos[1].value.length < 16) {

        setError(1);

    } else {
        removeError(1);
    }
}

function monthValidate() {
    if(campos[2].value.length < 2) {

        setError(2);

    } else {
        removeError(2);
    }
}

function cvvValidate() {
    if(campos[4].value.length < 3) {

        setError(4);

    } else {
        removeError(4);
    }
}

function setyearError(index) {
    campos[index].style.border = '1px solid #dc6378';
    small[index].style.visibility = 'hidden';
}

function removeyearError(index) {
    campos[index].style.border = '1px solid #6355ac';
}

function yearValidate() {
    if(campos[3].value.length < 2) {

        setyearError(3);

    } else {
        removeyearError(3);
    }
}

  