const BAR_DATA = [
  { id: "d1", value: 3, region: "Vienna" },
  { id: "d2", value: 20, region: "Salzburg" },
  { id: "d3", value: 9, region: "Upper Austria" },
  { id: "d4", value: 12, region: "Lower Austria" },
  { id: "d5", value: 15, region: "Tyrol" },
];

const dataMaxBar = Math.max(...BAR_DATA.map((d) => d.value));


const marginBar = { top: 0, right: 5, bottom: 0, left: 75 };

const containerBar = d3.select("#d3bar").classed("container", true);

containerBar
  .append("text")
  .text("Title")
  .attr("transform", `translate(${marginTitle.left},${marginTitle.top})`);

const xScaleBar = d3
  .scaleLinear()
  .domain([0, dataMaxBar])
  .range([0, width - marginBar.left - marginBar.right]);

const yScaleBar = d3
  .scaleBand()
  .domain(BAR_DATA.map((data) => data.region))
  .range([marginTitle.top + 5, height])
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
  .selectAll("label")
  .data(BAR_DATA)
  .enter()
  .append("text")
  .attr("x", marginBar.left + 5)
  .attr("y", (data) => yScaleBar(data.region) + yScaleBar.bandwidth() / 2 + 3)
  .text((data) => data.value)
  .style("font-size", "10px")
  .style("fill", "white");

const containerBarAxes = containerBar
  .append("g")
  .attr("transform", `translate(${marginBar.left},0)`);

const yAxisBar = d3.axisLeft(yScaleBar);

containerBarAxes.call(yAxisBar);
