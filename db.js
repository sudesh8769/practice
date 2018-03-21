var db= require("./config.js");

var getData=function(callback){
    db.con.getConnection(function(err,connection){
    
        connection.query('select from * converse_db',function(err, results){
            if (!err) {
                if (results != null) {
                    callback(null, results);
                    console.log(results);
                    } else {
                    callback(err, null);
                }
            } else {
                callback(err, null);
            }
            //release
            connection.release();
        });
    
    });
};
module.exports.getData = getData;