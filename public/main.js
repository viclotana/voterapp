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
});

fetch('http://localhost:5000/poll')
.then(res => res.json())
        .then(data =>{
            console.log(data);
        })

let dataPoints = [
    {label: 'Ramsey Bolton', y:0},
    {label: 'Sansa Stark', y:0},
    {label: 'Denarys Tygarian', y:0},
    {label: 'John Snow', y:0}
];

const chartContainer = document.querySelector('#chartContainer');

if (chartContainer) {
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title:{
          text: 'GOT Results'
        },
        data:[
            {
                type:'column',
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('0af8bb55b80a7fecbf5a', {
      cluster: 'eu',
      encrypted: true
    });

    var channel = pusher.subscribe('got-poll');
    channel.bind('got-vote', function(data) {
      dataPoints = dataPoints.map(x => {
          if (x.label == data.got) {
              x.y += data.points;
              return x;

          } else { return x;}
      });
      chart.render();
    });
}