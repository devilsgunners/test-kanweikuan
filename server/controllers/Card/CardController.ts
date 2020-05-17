const express = require("express");
const app = express();
//app.locals.config = require("../../config");

class CardController {
    static distributeCards() {
        return async (req,res,next) => {
            try {
                // Error handling
                let numberOfPerson = req.body.numberOfPerson ? req.body.numberOfPerson : null;
                if(numberOfPerson === null) {
                    return res.status(200).json({
                        error: "30000",
                        message: "number of person is required."
                    });
                }
                // Error handling
                if(numberOfPerson < 0) {
                    return res.status(200).json({
                        error: "30001",
                        message: "Input value does not exist or value is invalid”."
                    });
                }

                // Assign cards in array
                let cards: Array<any> = [];
                cards = ['S-A','S-2','S-3','S-4','S-5','S-6','S-7','S-8','S-9','S-X','S-J','S-Q','S-K','H-A','H-2','H-3','H-4','H-5','H-6','H-7','H-8','H-9','H-X','H-J','H-Q','H-K','C-A','C-2','C-3','C-4','C-5','C-6','C-7','C-8','C-9','C-X','C-J','C-Q','C-K','D-A','D-2','D-3','D-4','D-5','D-6','D-7','D-8','D-9','D-X','D-J','D-Q','D-K'];
                let totalCardLeft = cards.length;
                let person: Array<any> = [];
                let k = 0;
                // Loop while still have cards to be distributed
                while (totalCardLeft > 0) {    
                    for(var i=0; i<parseInt(numberOfPerson); i++) {
                        // Assign number of person to array
                        if(person.length != numberOfPerson && person.length < numberOfPerson) {
                            person.push([]);
                        }
                        // Get random card from cards array
                        let randNumber = Math.floor(Math.random() * totalCardLeft);
                        let randCard = cards[randNumber];

                        // if card not null then push the random generated card to a person
                        if(randCard) {
                            person[i].push({
                                id: k,
                                card: randCard
                            });
                        }
                        
                        // Filter out the distributed cards
                        cards = cards.filter(function(value, index, arr){ return index != randNumber;});

                        // Minus one for every distributed card
                        totalCardLeft = totalCardLeft - 1;
                        k++;
                    }
                    // Reset i=0, this is to indicate one cycle of distribution done
                    i=0;
                }
                res.app.locals.logger.info(`_distributeCards`, person)    
                return res.status(200).json(person);
                
            } catch (error) {
                res.app.locals.logger.error(`_distributeCards: Irregularity occurred - `, error)    
            }

        }
    }

}

export default CardController