const form = document.getElementById('vote-form');
form.addEventListener('submit', (event)=>{
    const choice = document.querySelector('input[name=got]:checked').value;
    const data = {got:choice};

    fetch('http://localhost:5000/poll', {
        method:'post',
        body:JSON.stringify(data),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    event.preventDefault();
})

let dataPoints = [
    {label: 'Ramsey Bolton', y:0},
    {label: 'Sansa Stark', y:0},
    {label: 'Denarys Tygarian', y:0},
    {label: 'John Snow', y:0}
];

const chartContainer = document.querySelector('#chartContainer')