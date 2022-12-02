const COLUMN_DATA = [
  { id: "d1", value: 10, region: "Austria" },
  { id: "d2", value: 15, region: "Germany" },
  { id: "d3", value: 12, region: "Slovenia" },
  { id: "d4", value: 6, region: "Italy" },
  { id: "d5", value: 8, region: "Slovakia" },
];

const container = d3.select("#d3column").classed("container", true);

const xScale = d3
  .scaleBand()
  .domain(COLUMN_DATA.map((data) => data.region))
  .range([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 20]).range([200, 0]);

container
  .selectAll(".bar")
  .data(COLUMN_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", xScale.bandwidth())
  .attr("height", (data) => 200 - yScale(data.value))
  .attr("x", (data) => xScale(data.region))
  .attr("y", (data) => yScale(data.value))
  .text((data) => data.region);

container
  .selectAll("text")
  .data(COLUMN_DATA)
  .enter()
  .append("text")
  .attr("x", (data) => xScale(data.region))
  .attr("y", (data) => yScale(data.value) - 10)
  .text((data) => data.region)
  .style("font-size", "10");
