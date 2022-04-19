const matchesPerYear = (matches) => {

    let seasons = []

    for (let index = 0; index < matches.length; index++) {

        seasons.push(matches[index].season) //pushing the matches seasons
    }
    const counts = {};

    seasons.forEach((x) => { //iterating over each year and counts 

        counts[x] = (counts[x] || 0) + 1;
    });
    return counts
}



const numberOfMatchesWon = (matches) => {

    let win = {};

    for (let index = 0; index < matches.length; index++) {

        win[matches[index].winner] = {} // initiating objects for each match winners
    }
    for (let i = 0; i < matches.length; i++) { // updating match wins in each season
        win[matches[i].winner][matches[i].season] = (win[matches[i].winner][matches[i].season] || 0) + 1;

    }
    return win
}


const extraRuns = (matches, deliveries) => {

    let yearIds = []

    for (let index = 0; index < matches.length; index++) { // matches ids get stored into an array

        if (matches[index].season == 2016) {
            yearIds.push(matches[index])
        }
    }

    let teams = {}

    for (let j = 0; j < yearIds.length; j++) { // matching ids from deliveries dataset and updating teams runs

        for (let i = 0; i < deliveries.length; i++) {

            if (deliveries[i]["match_id"] == yearIds[j]["id"]) {

                teams[deliveries[i]["bowling_team"]] = (teams[deliveries[i]["bowling_team"]] || 0) + parseInt(deliveries[i]["extra_runs"]);
            }
        }

    }
    return teams;

}



const economicBowler = (matches, deliveries) => {

    let teamIds = []

    for (let index = 0; index < matches.length; index++) { // matche ids are stored into an array 

        if (matches[index].season == 2015) {
            teamIds.push(matches[index])
        }
    }

    let bowlers = {}
    let ballCount = {}
    let economyOfBowler = {}

    for (let j = 0; j < teamIds.length; j++) { //  matching ids from deliveries dataset and updating bowlers
        for (let i = 0; i < deliveries.length; i++) {

            if (deliveries[i]["match_id"] == teamIds[j]["id"]) {

                ballCount[deliveries[i]["bowler"]] = (ballCount[deliveries[i]["bowler"]] || 0) + 1
                bowlers[deliveries[i]["bowler"]] = [parseInt(bowlers[deliveries[i]["bowler"]] || 0) + parseInt(deliveries[i]["total_runs"]), ballCount[deliveries[i]["bowler"]]]
            }
        }
    }
    for (const [key, value] of Object.entries(bowlers)) { //initializing economy of bowlers

        economyOfBowler[key] = (value[0] / value[1])
    }

    //sorting the bowlers and returns the top 10 bowlers
    let keysSorted = Object.keys(economyOfBowler).sort(function (a, b) {
        return economyOfBowler[a] - economyOfBowler[b]
    })

    return keysSorted.slice(0, 10)
}

//Find the number of times each team won the toss and also won the match

const numberOFwins = (matche, deliveries) => {
    matchesWon = {}
    for (i = 0; i < matche.length; i++) {
        matchesWon[matche[i].team1] = {
            'toss': 0,
            'wins': 0
        }
    }

    for (i = 0; i < matche.length; i++) {
        try {
            matchesWon[matche[i]['toss_winner']]['toss'] += 1
            matchesWon[matche[i].winner]['wins'] += 1
        } catch (TypeError) {
            continue;
        }
    }


    return matchesWon
}




module.exports = {
    matchesPerYear,
    numberOfMatchesWon,
    extraRuns,
    economicBowler,
    numberOFwins
};