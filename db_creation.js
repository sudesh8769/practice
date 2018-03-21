
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'botmysqlerb.mysql.database.azure.com',
    user: 'nirmalaagash@botmysqlerb',
    password: 'bigdata1234T',
    port: '3306',
    ssl: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 

    /*Created database:*/
    con.query("drop DATABASE imal_db", function (err, result) {
		if (err) throw err;
	  console.log("Database deleted"); });
	 con.query("CREATE DATABASE imal_db", function (err, result) {
		if (err) throw err;
	  console.log("Database created"); });
	  
	  con.query("use imal_db",function (err, result) {
	  if (err) throw err; 
	  console.log("usning imal_db"); }); 
				   
      consol.log(list_of_sem());
});

function list_of_sem() {
    con.query("create table list_of_sem(id INT NOT NULL AUTO_INCREMENT,rcm varchar(50),sitecore varchar(50),sap varchar(),bfsi varchar(50), primary key(id))", function (err, result) {
		if (err) throw err; }); 
    con.query("insert into list_of_sem values('tarun','medha','subhu','ashish')", function (err, result) {
		if (err) throw err; });  
    con.query("insert into list_of_sem values('shravya','shradha','ruchika','abhishek')", function (err, result) {
        if (err) throw err; });  
    con.query("insert into list_of_sem values('manmohan','pooja','niharika','ashish')", function (err, result) {
       if (err) throw err; });  
    con.query("insert into list_of_sem values('prem','shradha',null,'ashish')", function (err, result) {
    if (err) throw err; }); 
    con.query("insert into list_of_sem values('avnish','kowsalya',null,'shrunga')", function (err, result) {
        if (err) throw err; });  
    con.query("insert into list_of_sem values('vivek',null,null,'ragini')", function (err, result) {
        if (err) throw err; });      
    
return "table list_of_sem created";
}


