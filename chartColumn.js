const COLUMN_DATA = [
  { id: "d1", value: 10, region: "Austria" },
  { id: "d2", value: 15, region: "Germany" },
  { id: "d3", value: 12, region: "Slovenia" },
  { id: "d4", value: 6, region: "Italy" },
  { id: "d5", value: 8, region: "Slovakia" },
];

const width = 300;
const height = 200;

const marginColumn = { top: 0, right: 0, bottom: 30, left: 0 };

const containerColumn = d3.select("#d3column").classed("container", true);

const xScaleColumn = d3
  .scaleBand()
  .domain(COLUMN_DATA.map((data) => data.region))
  .range([0, width])
  .padding(0.1);

const yScaleColumn = d3
  .scaleLinear()
  .domain([0, 20])
  .range([height - marginColumn.bottom, 0]);

containerColumn
  .selectAll(".bar")
  .data(COLUMN_DATA)
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
  .selectAll("text")
  .data(COLUMN_DATA)
  .enter()
  .append("text")
  .attr("x", (data) => xScaleColumn(data.region) + xScaleColumn.bandwidth() / 2)
  .attr("y", (height - marginColumn.bottom - 5))
  .text((data) => data.value)
  .style("font-size", "10")
  .style("fill", "white")
  .attr("text-anchor", "middle");

const containerColumnAxes = containerColumn
  .append("g")
  .attr("transform", `translate(0,${height - marginColumn.bottom})`);

const xAxisColumn = d3.axisBottom(xScaleColumn);

containerColumnAxes.call(xAxisColumn);
