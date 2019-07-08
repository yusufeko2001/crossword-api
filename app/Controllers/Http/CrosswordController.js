'use strict'
const Crossword = use('App/Models/Crossword')
const User = use('App/Models/User')
class CrosswordController {
    async show ({params, response}) {
        // const user = await User.find(params.id)
        // if (!user) {
        //     return response.status(404).json({data: 'Resource not found'})
        // }
        // const user = await User.find(params.id)
        const crosswords = await User
            .query()
            .with('crosswords', (builder) => {
                builder.where('user_id', params.id)
            })
            .fetch()
        // const crosswords = await user
        //     .crosswords()
        //     .wherePivot('user_id', params.id)
        //     .fetch()
        return response.json(crosswords)
    }
}

module.exports = CrosswordController
