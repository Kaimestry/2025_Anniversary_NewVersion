const letter_continue_btn = document.getElementById('letter_continue_btn');
const letter_container = document.getElementById('letter_container');
const dnd_container = document.getElementById('do-not-cross');
const warning = document.getElementById('warning');
const paom_hint = document.getElementById('paom_hint')

letter_continue_btn.addEventListener('click', async () => {
    fadeOutAndHide(letter_container);
    //show the container
    await delay(400);
    fadeInEffect(dnd_container);

    await delay(3000);
    fadeInEffect(warning);

    await delay(2000);
    fadeInEffect(paom_hint);
});

const input = document.getElementById('input_password');

document.getElementById('form_password').addEventListener('submit', (e)=>{
    e.preventDefault();

    if(input.value == 'euri'|| input.value =='Euri' || input.value =='Eurika' || input.value=='eurika'){
        fadeOutAndHide(document.getElementById('password_container'))
    } else if(input.value === ''){
        alert('Baby you need to enter something... -Ann-')
    } else {
        alert("Uh oh, that's not correct -Paok-");
        input.value = '';
    }
});


// TESTER 
function TestAtPassword(){
    fadeOutAndHide(letter_container);
    fadeInEffect(dnd_container);
    fadeInEffect(warning);
    fadeInEffect(paom_hint);
}

fadeInEffect(letter_container);
//TestAtPassword()
