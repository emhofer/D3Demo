const DONUT_DATA = [
  { color: "#2471A3", count: 3 },
  { color: "#2980B9", count: 2 },
  { color: "#5499C7", count: 2 },
  { color: "#7FB3D5", count: 1 },
  { color: "#A9CCE3", count: 1 },
];

const container4 = d3
  .select("#d3donut")
  .classed("container", true)
  .append("g")
  .attr("transform", "translate(" + 250 / 2 + "," + 200 / 2 + ")");

const ordScale = d3.scaleOrdinal(DONUT_DATA.map((d) => d.color));

const arc = d3.arc().innerRadius(50).outerRadius(100);

const counts = DONUT_DATA.map((d) => d.count);

const pie = d3.pie();

container4
  .selectAll("section")
  .data(pie(counts))
  .enter()
  .append("path")
  .attr("fill", (d, i) => DONUT_DATA[i].color)
  .attr("d", arc);
