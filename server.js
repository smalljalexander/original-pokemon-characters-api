const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'ash ketchum': {
        'age': 10,
        'info': 'The main character of the pokemon series.  He has big dreams of becoming a pokemon master and the best to ever do it.',
        'hometown': 'Pallet Town, Kanto',
        'commonPokemon': 'Pickachu',
    },
    'ash': {
        'age': 10,
        'info': 'The main character of the pokemon series.  He has big dreams of becoming a pokemon master and the best to ever do it.',
        'hometown': 'Pallet Town, Kanto',
        'commonPokemon': 'Pickachu',
    },
    'misty': {
        'age': 10,
        'info': 'Misty is the Cerulean gym leader but left the gym to her three sisters. She fishes Ash and Pikachu out of the river then he "borrows" her bike to flee from the Spearow. Misty follows Ash on his journey until he replaces the bike. They became best friends as she followed him on his journey.',
        'hometown': 'Cerulean City, Kanto',
        'commonPokemon': 'Staru, Starmi, Horsea, Psyduck',
        'gymbadge': 'Cascade Badge',
        'trainerType': 'water',

    },
    'brock': {
        'age': 15,
        'info': 'Brock is the Pewter City gym leader and rock type pokemon specialist. He has the heavy task of taking care of his family while still being a gym leader. Ash defeats him in a gym battle and decides to leave with Ash to accompany him on his adventure',
        'hometown': 'Pewter City, Kanto',
        'commonPokemon': 'Onix, Geodude, Zubat, Vulpix',
        'trainerType': 'Rock and Ground',
        'gymBadge': 'Boulder Badge',
    },
    'jessie': {
        'age': 25,
        'info': "Jessie was an aspiring pokemon nurse that failed then went to Pokemon Tech school to become a trainer.  She also failed out but met her partner in crime James there. She is the leader of the Team Rocket trio on a mission to steal Ash's Pikachu.",
        'hometown': 'Littleroot Town, Hoenn',
        'commonPokemon': 'Ekans, Arbok',
        
    },
    'james': {
        'age': 25,
        'info': 'James unlike Jessie came from a family of money. He went to the Pokemon Tech School where he met Jessie and became friends.  He and Jessie join a biker gang in Sunnytown after they both fail out of school.',
        'hometown': 'Unknown',
        'commonPokemon': 'Weezing, Koffing, Weepinbell, Victreebel',
    },
     'meowth': {
        'info': 'Meowth is the last of the Team Rocket Trio. Meowth fell in love with a female Meowth named Meowzie when he was a stray Pokemon.  Meozie told him she prefered humans and was poor. He taught himself how to walk on two legs and talk like a human to try to impress her.',
        'hometown': 'Unknown',
    },
    'gary oak': {
        'age': 10,
        'info': "Gary is Professor Oak's grandson and Ash's rival with also sharing the same dream of becoming a pokemon master.",
        'hometown': 'Pallet Town, Kanto',
        'commonPokemon': 'Blastoise, Arcanine, Umbreon',
    },
    'gary': {
        'age': 10,
        'info': "Gary is Professor Oak's grandson and Ash's rival with also sharing the same dream of becoming a pokemon master.",
        'hometown': 'Pallet Town, Kanto',
        'commonPokemon': 'Blastoise, Arcanine, Umbreon',
    },
    'lt surge': {
        'age': 34,
        'info': "The gym leader of the Vermillion City gym and specializes in electric type pokemon. He has a powerful Raichu that he uses to defend the gym.  He is also rude and arrogant and calls other trainers babies if they don't meet his standard.",
        'hometown': 'Vermillion City, Kanto',
        'commonPokemon': 'Raichu',
        'gymbadge': 'Thunder Badge',
        'trainerType': 'Electric',
    },
    'sabrina': {
        'age': 21,
        'info': 'She is the Saffron City gym leader that specializes in psychic type pokemon.',
        'hometown': 'Saffron City, Kanto',
        'commonPokemon': 'Abra, Kadabra',
        'gymbadge': 'Marsh Badge',
        'trainerType': 'Psychic',
    },
    'erika': {
        'age': 10,
        'info': 'She is the Celadon City gym leader and specializes in grass type pokemon',
        'hometown': 'Celadon City, Kanto',
        'commonPokemon': 'Gloom, Tangela, Weepingbell, Vileplume',
        'gymbadge': 'Rainbow Badge',
        'trainerType': 'Grass',
    },
        'koga': {
            'age': '40+',
            'info': 'He is the Fuchsia City gym leader and specializes in poison type pokemon',
            'hometown': 'Fuchsia City, Kanto',
            'commonPokemon': 'Venonat, Venomoth, Golbat, Voltorb, Scyther',
            'gymbadge': 'Soul Badge',
            'trainerType': 'Poison',
        },
        'blaine': {
            'age': 58,
            'info': 'He is the oldest gym leader of Cinnabar Island in the Kanto region. He is disturbed by the amount of tourist at Cinnabar Island and no serious trainers will battle him.',
            'hometown': 'Cinnabar Island, Kanto',
            'commonPokemon': 'Ninetails, Magmar, Rhydon',
            'gymbadge': 'Volcano Badge',
            'trainerType': 'Fire',
        },
        'nurse joy': {
            'age': 'Unknown',
            'info': 'Nurse Joy is a pokemon nurse in every city that works at the pokecenter.  The pokecenter is used to cure and recover sick and injured pokemon',
            'hometown': 'Every Town, Kanto',
            'commonPokemon': 'Chansey, Blissey',
            'trainerType': 'Pokemon Nurse',
        },
        'officer jenny': {
            'age': 'Unknown',
            'info': 'Officer Jenny is a police officer in every city.',
            'hometown': 'Every Town, Kanto',
            'commonPokemon': 'Growlithe, Arcanine',
            'trainerType': 'Police Officer',
        },
        'professor samuel oak': {
            'age': 50,
            'info': 'Professor Oak works at the pokemon laboratory in Pallet Town. He gives Ash and Gary a Pokedex and tells them to record as many pokemon as they can.',
            'hometown': 'Pallet Town, Kanto',
            'commonPokemon': 'Squirtle, Charmander, Bulbasaur, Pikachu',
            'trainerType': 'Researcher',
        },
        'professor oak': {
            'age': 50,
            'info': 'Professor Oak works at the pokemon laboratory in Pallet Town. He gives Ash and Gary a Pokedex and tells them to record as many pokemon as they can.',
            'hometown': 'Pallet Town, Kanto',
            'commonPokemon': 'Squirtle, Charmander, Bulbasaur, Pikachu',
            'trainerType': 'Researcher',
        },
        'giovanni':{
            'age': 'Middle Aged',
            'info': 'Giovanni is the leader of Team Rocket with the hungry for power in having a team of scientist create MewTwo from Mew DNA.',
            'hometown': 'Viridian City, Kanto',
            'commonPokemon': 'Persian, Golem, Kingler, Nidoking, Arcanine',
            'gymbadge': 'Earth Badge',
            'trainerType': 'Ground',
        },
        'unknown':{
            'age': 'unknown',
            'info': 'This Character is not in the database'
        }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    console.log(request.params.name)
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})