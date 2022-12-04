const BAR_DATA = [
  { id: "d1", value: 3, region: "Vienna" },
  { id: "d2", value: 6, region: "Salzburg" },
  { id: "d3", value: 9, region: "Upper Austria" },
  { id: "d4", value: 12, region: "Lower Austria" },
  { id: "d5", value: 15, region: "Tyrol" },
];

const marginBar = { top: 0, right: 0, bottom: 0, left: 75 };

const containerBar = d3.select("#d3bar").classed("container", true);

const xScaleBar = d3
  .scaleLinear()
  .domain([0, 20])
  .range([0, width - marginBar.left]);

const yScaleBar = d3
  .scaleBand()
  .domain(BAR_DATA.map((data) => data.region))
  .range([0, height])
  .padding(0.1);

containerBar
  .selectAll(".bar")
  .data(BAR_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", (data) => xScaleBar(data.value))
  .attr("height", yScaleBar.bandwidth())
  .attr("x", marginBar.left)
  .attr("y", (data) => yScaleBar(data.region))
  .text((data) => data.region);

containerBar
  .selectAll("text")
  .data(BAR_DATA)
  .enter()
  .append("text")
  .attr("x", marginBar.left + 5)
  .attr("y", (data) => yScaleBar(data.region) + yScaleBar.bandwidth() / 2 + 3)
  .text((data) => data.value)
  .style("font-size", "10")
  .style("fill", "white");

const containerBarAxes = containerBar
  .append("g")
  .attr("transform", `translate(${marginBar.left},0)`);

const yAxisBar = d3.axisLeft(yScaleBar);

containerBarAxes.call(yAxisBar);
