import CardController from "./CardController"

class Card {
    static router() {
        const router = require('express').Router()

        router.post('/distributecards',
            CardController.distributeCards()
        )
        return router
    }
}

export default Card