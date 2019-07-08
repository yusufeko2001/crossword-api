'use strict'
const Crossword = use('App/Models/Crossword')
const User = use('App/Models/User')
class CrosswordController {
    async show ({params, response}) {
        try {
            const user = await User.find(params.id)
            const crosswords = await user.crosswords().fetch()
            return response.send(crosswords)  
        } catch (error) {
            response.send("Not Found")
        }   
    }
}

module.exports = CrosswordController
