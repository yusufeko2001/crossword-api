'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crossword extends Model {
    users () {
        return this.belongsToMany('App/Models/User').pivotTable('users_crosswords')
    }
}

module.exports = Crossword
