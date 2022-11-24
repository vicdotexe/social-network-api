const router = require('express').Router();
const thoughts = require('../../controllers/thoughtController');

// get all thoughts
router.get('/', thoughts.getAllThoughts);

//get thought by id
router.get('/:id', thoughts.getSingleThought);

//create new thought (push thought to user)
router.post('/', thoughts.createThought);

//update existing thought by id
router.put('/:id', thoughts.updateThought);

//delete thought by id (remove user's thoughts when deleted)
router.delete('/:id', thoughts.deleteThought)

/* ------ */

//create a reaction to a thought
router.post('/:id/reactions', thoughts.createReaction)

//delete a reaction by it's id from a specific thought
router.delete('/:thoughtId/reactions/:reactionId', thoughts.deleteReaction)

module.exports = router;