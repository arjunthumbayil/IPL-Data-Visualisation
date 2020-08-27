const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear")
const matchesWonByTeam = require("./ipl/matchesWonByTeam")
const extraRunsConceded2016 = require("./ipl/extraRunsConceded2016") 
const topEconomicalBowlers = require("./ipl/topEconomicalBowlers")

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      const result = {};
      result.matchesPlayedPerYear = matchesPlayedPerYear(matches);
      result.matchesWonByTeam = matchesWonByTeam(matches);
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          result.extraRunsConceded2016 = extraRunsConceded2016(matches, deliveries);
          result.topEconomicalBowlers = topEconomicalBowlers(matches, deliveries);
          saveData(result);
        });
    });
}

function saveData(result) {
  const jsonData = result;
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main()