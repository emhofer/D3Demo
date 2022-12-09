const buildLine = (DASHBOARD_DATA, size) => {
  const { width, height } = size;

  const dataMaxLine = {
    y: Math.max(...DASHBOARD_DATA.map((d) => d.value)),
  };

  const marginLine = { top: 10, right: 10, bottom: 25, left: 25 };
  const marginTitle = { top: 20, left: 10 };

  const containerLine = d3.select("#d3line").classed("container", true);

  containerLine
    .append("text")
    .text("Title")
    .attr("transform", `translate(${marginTitle.left},${marginTitle.top})`);

  const xScaleLine = d3
    .scaleBand()
    .domain(DASHBOARD_DATA.map((data) => data.id))
    .range([marginLine.left, width - marginLine.right]);

  const yScaleLine = d3
    .scaleLinear()
    .domain([0, dataMaxLine.y])
    .range([height - marginLine.bottom, marginLine.top + marginTitle.top + 5]);

  const linePath = d3
    .line()
    .x((d) => xScaleLine(d.id))
    .y((d) => yScaleLine(d.value));

  containerLine
    .append("path")
    .classed("line", true)
    .data(DASHBOARD_DATA)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", linePath(DASHBOARD_DATA));

  const containerLineXAxis = containerLine
    .append("g")
    .attr("transform", `translate(${0 + "," + (height - marginLine.bottom)})`);

  const containerLineYAxis = containerLine
    .append("g")
    .attr("transform", `translate(${marginLine.left + "," + 0})`);

  const xAxisLine = d3.axisBottom(xScaleLine);
  const yAxisLine = d3.axisLeft(yScaleLine);

  containerLineXAxis.call(xAxisLine);
  containerLineYAxis.call(yAxisLine);
};

export default buildLine;
