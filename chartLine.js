const LINE_DATA = [
  { id: 0, value: 3 },
  { id: 1, value: 10 },
  { id: 2, value: 11 },
  { id: 3, value: 9 },
  { id: 4, value: 14 },
  { id: 5, value: 6 },
  { id: 6, value: 12 },
  { id: 7, value: 14 },
];

const dataMaxLine = {
  x: Math.max(...LINE_DATA.map((d) => d.id)),
  y: Math.max(...LINE_DATA.map((d) => d.value)),
};

const marginLine = { top: 10, right: 25, bottom: 25, left: 25 };

const containerLine = d3.select("#d3line").classed("container", true);

containerLine
  .append("text")
  .text("Title")
  .attr("transform", `translate(${marginTitle.left},${marginTitle.top})`);

const xScaleLine = d3
  .scaleLinear()
  .domain([0, dataMaxLine.x])
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
  .data(LINE_DATA)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2)
  .attr("d", linePath(LINE_DATA));

const containerLineXAxis = containerLine
  .append("g")
  .attr(
    "transform",
    `translate(${0 + "," + (height - marginLine.bottom)})`
  );

const containerLineYAxis = containerLine
  .append("g")
  .attr("transform", `translate(${marginLine.left + "," + 0})`);

const xAxisLine = d3.axisBottom(xScaleLine);
const yAxisLine = d3.axisLeft(yScaleLine);

containerLineXAxis.call(xAxisLine);
containerLineYAxis.call(yAxisLine);
