// Require express router
const router = require('express').Router();

const { 
    getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');


router.route('/').get(getAllThought).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought); 
router.route('/:userId').put(createThought);
router.route('/:thoughtId/reaction').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;