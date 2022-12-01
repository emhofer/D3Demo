const BAR_DATA = [
  { id: "d1", value: 3, region: "Vienna" },
  { id: "d2", value: 6, region: "Salzburg" },
  { id: "d3", value: 9, region: "Upper Austria" },
  { id: "d4", value: 12, region: "Lower Austria" },
  { id: "d5", value: 15, region: "Tyrol" },
];

const container2 = d3.select("#d3bar").classed("container", true);

const xScale2 = d3.scaleLinear().domain([0, 20]).range([0, 250]);
const yScale2 = d3
  .scaleBand()
  .domain(BAR_DATA.map((data) => data.region))
  .range([0, 200])
  .padding(0.1);

container2
  .selectAll(".bar")
  .data(BAR_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", (data) => xScale2(data.value))
  .attr("height", yScale2.bandwidth())
  .attr("x", 0)
  .attr("y", (data) => yScale2(data.region))
  .text((data) => data.region);
