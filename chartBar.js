const buildBar = (DASHBOARD_DATA, size) => {
  const { width, height } = size;

  const dataMaxBar = Math.max(...DASHBOARD_DATA.map((d) => d.value));

  const marginBar = { top: 0, right: 5, bottom: 0, left: 20 };
  const marginTitle = { top: 20, left: 10 };

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
    .domain(DASHBOARD_DATA.map((data) => data.region))
    .range([marginTitle.top + 5, height])
    .padding(0.1);

  containerBar
    .selectAll(".bar")
    .data(DASHBOARD_DATA)
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
    .data(DASHBOARD_DATA)
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
};

export default buildBar;
