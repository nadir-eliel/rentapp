var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = Schema({
    comment: {
        type: String,
        require: true
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
});

module.exports = mongoose.model('Comment', CommentSchema);