// --------------------------------------------------------------------------------------------------------------------
// pie chart

let xValues = ["Accounts", "Production", "shares", "Clients", "Orders"];
let yValues = [55, 49, 44, 24, 15];
let barColors = [
  "#3B3B98",
  "#F97F51",
  "#009432",
  "#EA2027",
  "#FFC312"
];


new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }],

  },
  options: {
    title: {
      display: true,
      text: "",
      position : 'bottom'
    },
  }
});


// ---------------------------------------------------------------------------------------------------------
// line chart

var xValues1 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "brown",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,3000],
      borderColor: "orange",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});