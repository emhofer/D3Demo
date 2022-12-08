const buildColumn = (DASHBOARD_DATA, size) => {
  const { width, height } = size;

  const dataMaxColumn = Math.max(...DASHBOARD_DATA.map((d) => d.value));

  const marginColumn = { top: 0, right: 0, bottom: 30, left: 0 };

  const marginTitle = { top: 20, left: 10 };

  const containerColumn = d3.select("#d3column").classed("container", true);

  containerColumn
    .append("text")
    .text("Title")
    .attr("transform", `translate(${marginTitle.left},${marginTitle.top})`);

  const xScaleColumn = d3
    .scaleBand()
    .domain(DASHBOARD_DATA.map((data) => data.region))
    .range([0, width])
    .padding(0.1);

  const yScaleColumn = d3
    .scaleLinear()
    .domain([0, dataMaxColumn])
    .range([height - marginColumn.bottom, marginTitle.top + 5]);

  containerColumn
    .selectAll(".bar")
    .data(DASHBOARD_DATA)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", xScaleColumn.bandwidth())
    .attr(
      "height",
      (data) => height - marginColumn.bottom - yScaleColumn(data.value)
    )
    .attr("x", (data) => xScaleColumn(data.region))
    .attr("y", (data) => yScaleColumn(data.value))
    .text((data) => data.region);

  containerColumn
    .selectAll("label")
    .data(DASHBOARD_DATA)
    .enter()
    .append("text")
    .attr(
      "x",
      (data) => xScaleColumn(data.region) + xScaleColumn.bandwidth() / 2
    )
    .attr("y", height - marginColumn.bottom - 5)
    .text((data) => data.value)
    .style("font-size", "10px")
    .style("fill", "white")
    .attr("text-anchor", "middle");

  const containerColumnAxes = containerColumn
    .append("g")
    .attr("transform", `translate(0,${height - marginColumn.bottom})`);

  const xAxisColumn = d3.axisBottom(xScaleColumn);

  containerColumnAxes.call(xAxisColumn);
};

export default buildColumn;
