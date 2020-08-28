function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByTeam(data.matchesWonByTeam);
  visualizeExtraRunsConceded2016(data.extraRunsConceded2016);
  visualizetopEconomicalBowlers(data.topEconomicalBowlers);

  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}


function visualizeMatchesWonByTeam(matchesWonByTeam) {
  const seriesData = [];
  for (let winner in matchesWonByTeam) {
    seriesData.push([winner, matchesWonByTeam[winner]]);
  }

  Highcharts.chart("matches-won-by-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Won By Teams"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Wins"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}


function visualizeExtraRunsConceded2016(extraRunsConceded2016) {
  const seriesData = [];
  for (let year in extraRunsConceded2016) {
    seriesData.push([year, extraRunsConceded2016[year]]);
  }
  Highcharts.chart("extra-runs-conceded-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}


function visualizetopEconomicalBowlers(topEconomicalBowlers) {
  const seriesData = [];
  for (let year in topEconomicalBowlers) {
    seriesData.push([year, topEconomicalBowlers[year]]);
  }

  Highcharts.chart("top-economical-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top Economical Bowlers"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Value"
      }
    },
    series: [
      {
        name: "Name",
        data: seriesData
      }
    ]
  });
}