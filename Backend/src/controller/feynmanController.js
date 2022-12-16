const Topic = require("../models/feynmanTopic");

exports.addTopics = async(req,res) =>{
    try {
        console.log(req.body);
        const data = {
            topicName: req.body.topicName,
            textArray: req.body.textArray,
            percentage: req.body.percentage
        }
        const topic = await Topic.create(data)
        if(!topic){
            return res.status(400).send({message: 'topic creation error.'});
        }
        return res.status(200).send({ message: 'Topic added successfully !!!'});
    } catch (error) {
        console.log(error);
        return res.status(500).send({error, message: 'Internal server error.'});
    }
}

exports.findTopic = async(req,res) =>{
    try {
        const topics = await Topic.find()
        if(topics.length === 0){
            return res.status(400).send({topics: [],message: 'No available topics.  '});
        }
        return res.status(200).send({topics: topics, message: 'Topics fetch successfully!!!'});
    } catch (error) {
        console.log(error);
        return res.status(500).send({error, message: 'Internal server error.'});
    }
}
