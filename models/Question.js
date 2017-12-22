'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
      const sql = `
        CREATE TABLE IF NOT EXISTS questions (
          id INTEGER PRIMARY KEY,
          content TEXT
        )`

        console.log("Preparing to create the questions table...")

        return new promise(function(resolve){
          db.run(sql, function(){
          console.log("...questions table created!")
          resolve("Success")
        })
      })
    }


module.exports = Question;


// .	const sqlite3 = require('sqlite3').verbose()
// .	const db = new sqlite3.Database(`./db/development.sqlite`, sqlite3.OPEN_READWRITE)
// .	 
// .	class User {
// .	  static CreateTable() {
// .	    const sql = `
// .	      CREATE TABLE IF NOT EXISTS users (
// .	        id INTEGER PRIMARY KEY,
// .	        name TEXT,
// .	        age INTEGER
// .	      )
// .	    `
// .	 
// .	    console.log("Preparing to create the users table...")
// .	 
// .	    return new Promise(function(resolve){
// .	      db.run(sql, function(){
// .	        console.log("...users table created!")
// .	        resolve("Success")
// .	      })
// .	    })
// .	  }
// .	}
