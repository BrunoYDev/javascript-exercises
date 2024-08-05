const findTheOldest = function(people) {

    let oldestPerson = people.reduce((previousPerson, person) => {
        let previousPersonBirth = previousPerson.yearOfBirth;
        let previousPersonDeath = previousPerson.yearOfDeath;

        let personBirth = person.yearOfBirth;
        let personDeath = person.yearOfDeath;

        if(typeof previousPersonDeath != "number"){
            if(previousPersonBirth > personBirth){
                return person;
            }

            return previousPerson;
        }

        if(previousPersonDeath - previousPersonBirth > personDeath - personBirth){
            return previousPerson;
        }

        return person;
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
