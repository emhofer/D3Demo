const DONUT_DATA = DASHBOARD_DATA.map((d) => d).sort((a, b) =>
  a.value > b.value ? -1 : 1
);

const containerDonut = d3
  .select("#d3donut")
  .classed("container", true)
  .append("g")
  .attr(
    "transform",
    "translate(" + width / 2 + "," + (height / 2 + marginTitle.top / 2) + ")"
  );

d3.select("#d3donut")
  .append("text")
  .text("Title")
  .attr("transform", `translate(${marginTitle.left},${marginTitle.top})`);

const ordScaleDonut = d3.scaleOrdinal(DONUT_DATA.map((d) => d.id));

const arc = d3
  .arc()
  .innerRadius((height - marginTitle.top - 5) / 4)
  .outerRadius((height - marginTitle.top - 5) / 2);

const counts = DONUT_DATA.map((d) => d.value);

const pie = d3.pie();

containerDonut
  .selectAll("section")
  .data(pie(counts))
  .enter()
  .append("path")
  .classed("slice", true)
  .attr("fill", (d, i) => d3.interpolateBlues(1 - (1 / dataLength) * i))
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
  .style("font-size", "10px")
  .attr("fill", "white");
