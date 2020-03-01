
'use strict';

var expect = require('chai').expect;
var ThreadHandler = require('../controllers/threadHandler.js');
var ReplyHandler = require('../controllers/replyHandler.js');
require('dotenv').config();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = process.env.DB;

module.exports = function (app) {
  
  var threadHandler = new ThreadHandler();
  var replyHandler = new ReplyHandler();

 app.route('/api/all_boards').get((req, res )=>{
    mongo.connect(url,function(err,dbo) {
        var db = dbo.db('test');
  db.listCollections().toArray(function(err, collInfos) {
    // collInfos is an array of collection info objects that look like:
    // { name: 'test', options: {} }
    if(err) return console.log(err);
    res.json(collInfos);
    });
 });
})
  
//  app.route('/api/get_topic').get((req, res )=>{
//    let topic = req.body.topicName;
//     mongo.connect(url,function(err,dbo) {
//         var db = dbo.db('test');
        
//   db.listCollections().toArray(function(err, collInfos) {
//     // collInfos is an array of collection info objects that look like:
//     // { name: 'test', options: {} }
//     if(err) return console.log(err);
//     res.json(collInfos);
//     });
//  });
// })

  app.route('/api/threads/:board')
    .get(threadHandler.threadList)
    .post(threadHandler.newThread)
    .put(threadHandler.reportThread)
    .delete(threadHandler.deleteThread);
    
  app.route('/api/replies/:board')
    .get(replyHandler.replyList)
    .post(replyHandler.newReply)
    .put(replyHandler.reportReply)
    .delete(replyHandler.deleteReply);

};
