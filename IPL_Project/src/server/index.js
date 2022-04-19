const csvtojson = require('csvtojson')
const fs=require('fs')
const {matchesPerYear, numberOfMatchesWon, extraRuns, economicBowler, numberOFwins} = require('./ipl.js');

const convertToJson = async()=>{

const filepath = "../data/deliveries.csv"
const deliveries = await csvtojson().fromFile(filepath)

const filepath2 = "../data/matches.csv"
const matches = await csvtojson().fromFile(filepath2)

const numberOfMatchesPlayedPerYear = matchesPerYear(matches);
fs.writeFileSync("../public/output/numberOfMatchesPlayedPerYear.json", JSON.stringify(numberOfMatchesPlayedPerYear));

const numberOfMatchesWonPerTeam = numberOfMatchesWon(matches);
fs.writeFileSync("../public/output/numberOfMatchesWonPerTeam.json",  JSON.stringify(numberOfMatchesWonPerTeam));

const extraRunsPerTeam = extraRuns(matches, deliveries);
fs.writeFileSync("../public/output/extraRunsPerTeam.json", JSON.stringify(extraRunsPerTeam));

const topEconomicaBowlers = economicBowler(matches, deliveries);
fs.writeFileSync("../public/output/topEconomicBowlers.json", JSON.stringify(topEconomicaBowlers));

const numberOFwons = numberOFwins(matches, deliveries);
fs.writeFileSync("../public/output/numberOFwons.json",JSON.stringify(numberOFwons));

}
convertToJson();
