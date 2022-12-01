const LINE_DATA = [
  { id: 0, value: 3 },
  { id: 1, value: 10 },
  { id: 2, value: 11 },
  { id: 3, value: 9 },
  { id: 4, value: 14 },
  { id: 5, value: 6 },
];

const container3 = d3.select("#d3line").classed("container", true);

const xScale3 = d3.scaleLinear().domain([0, 5]).range([0, 250]);
const yScale3 = d3.scaleLinear().domain([0, 20]).range([200, 0]);

const linePath = d3
  .line()
  .x((d) => xScale3(d.id))
  .y((d) => yScale3(d.value));

container3
  .append("path")
  .data(LINE_DATA)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", linePath(LINE_DATA));
