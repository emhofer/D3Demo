const DONUT_DATA = [
  { color: "#2471A3", count: 3, region: "Austria" },
  { color: "#2980B9", count: 2, region: "Germany" },
  { color: "#5499C7", count: 2, region: "Slovakia" },
  { color: "#7FB3D5", count: 1, region: "Italy" },
  { color: "#A9CCE3", count: 1, region: "Slovenia" },
];

const containerDonut = d3
  .select("#d3donut")
  .classed("container", true)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const ordScaleDonut = d3.scaleOrdinal(DONUT_DATA.map((d) => d.color));

const arc = d3
  .arc()
  .innerRadius(height / 4)
  .outerRadius(height / 2);

const counts = DONUT_DATA.map((d) => d.count);

const pie = d3.pie();

containerDonut
  .selectAll("section")
  .data(pie(counts))
  .enter()
  .append("path")
  .attr("fill", (d, i) => DONUT_DATA[i].color)
  .attr("d", arc);

containerDonut
  .selectAll("section")
  .data(pie(counts))
  .enter()
  .append("text")
  .attr(
    "transform",
    (d) => `translate(${arc.centroid(d)[0] + "," + arc.centroid(d)[1]})`
  )
  .text((d, i) => DONUT_DATA[i].region)
  .style("text-anchor", "middle")
  .style("font-size", "10")
  .attr("fill", "white");
