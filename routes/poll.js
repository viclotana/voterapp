const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '575181',
    key: '0af8bb55b80a7fecbf5a',
    secret: '2fcde39e0afccb216e68',
    cluster: 'eu',
    encrypted: true
  });
router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req,res) =>{
    pusher.trigger('got-poll', 'got-vote', {
        points: 1,
        got:req.body.got
      });
      return res.json({success:true,
    message:'Thanks for voting'});
});
module.exports = router;