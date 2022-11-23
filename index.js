const margin = { top: 50, right: 100, bottom: 50, left: 50 };
const width = 500;
const height = 200;

let prices = [];

let res = d3
  .csv("TSLA.csv", (d) => {
    return {
      date: d3.timeParse("%Y-%m-%d")(d.Date),
      upper: +d.High,
      close: +d.Close,
    };
  })
  .then((data) => {
    prices = data;
  })
  .then(() => everythingElse());

const everythingElse = () => {
  // Add X axis --> it is a date format
  var x = d3
    .scaleTime()
    .domain(
      d3.extent(prices, function (d) {
        return d.date;
      })
    )
    .range([0, width]);

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(prices, function (d) {
        return d.close;
      }),
    ])
    .range([height, 0]);

  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.close));

  const svg = d3
    .select("#d3")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg
    .append("path")
    .datum(prices)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.date);
        })
        .y(function (d) {
          return y(d.close);
        })
    );
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));
};
