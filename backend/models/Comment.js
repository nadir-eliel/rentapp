var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = Schema({
    comment: {
        type: String
    },
    created_at: {
        type : Date, 
        default: Date.now 
    },
    update_at: {
        type : Date, 
        default: Date.now 
    },
    user : {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    apartament : {
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }
});


module.exports = mongoose.model('Comment', CommentSchema);