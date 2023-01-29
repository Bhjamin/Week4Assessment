let list = [ { text: 'Pizza', id: 1}, { text: 'Soup', id: 2}, { text: 'Sock on a stick', id: 3}]
let id = 4
let displayList = []


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Don't wake up at 2:07AM for extreme wealth", "Maybe the real coding was the friends you made along the way", "Leave your shoe untied and see where life takes you", "Try not to stress because that makes things stressful", "Become 404 and skip town for a vacation or something"]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },
    createItem: (req, res) => {
        let newitem = {
            text: req.body.value,
            id: id
        }
        id++
        list.push(newitem)
        res.status(200).send()
    },
    getAllItems: (req, res) => {
        displayList = []
        for(let i = 0; i < list.length; i++){
            displayList.push(`${list[i].text} - ID ${list[i].id}`)
        }
        res.status(200).send(displayList)
    },
    getItemById: (req, res) => {
        let id = req.query.id
        res.status(200).send(list[id - 1])
    }
}