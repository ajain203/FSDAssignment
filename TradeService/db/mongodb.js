"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class mongoDB{
	constructor(){
	console.log("in mongodb constructor");
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
		this.mongoURL = `mongodb://127.0.0.1:27017/metallica`;
	}

	onConnect(callback){
		console.log("connecting to mongo...");
		this.mongoClient.connect(this.mongoURL, (err, db) => {
			if(err)
				callback(err);
			else
				callback(null, db, this.ObjectID);
		});
	}
}

module.exports = new mongoDB();