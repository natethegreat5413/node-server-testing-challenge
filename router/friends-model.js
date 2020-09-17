const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add,
    remove,
}

function find(){
    return db('friends')
        .select('id', 'name')
        .orderBy('id')
}

function findById(id){
    return db('friends')
        .where({id})
        .first()
}

function add(friend){
    return db('friends')
        .insert(friend, 'id')
        .then(([id]) => {
            return findById(id)
        })
}

function remove(id){
    return db('friends')
        .del()
        .where({id})
}