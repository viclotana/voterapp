const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/Vote');
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '575181',
    key: '0af8bb55b80a7fecbf5a',
    secret: '2fcde39e0afccb216e68',
    cluster: 'eu',
    encrypted: true
  });
router.get('/', (req, res) => {
    
});

router.post('/', (req,res) =>{
    const newVote = {
        got: req.body.got,
        points: 1
    }
    new Vote(newVote).save().then(vote => {
        pusher.trigger('got-poll', 'got-vote', {
            points: parseInt(vote.points),
            got:vote.got
          });
          return res.json({success:true,
        message:'Thanks for voting'});
    });
});
module.exports = router;