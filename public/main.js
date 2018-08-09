const form = document.getElementById('vote-form');
form.addEventListener('submit', (event)=>{
    const choice = document.querySelector
    ('input[name=got]:checked').value;
    const data = {got:choice};

    fetch('http://localhost:3000/poll', {
        method:'post',
        body:JSON.stringify(data),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
        .then();
    event.preventDefault();
})