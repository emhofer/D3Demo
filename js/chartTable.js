const buildTable = (DASHBOARD_DATA) => {
  const titles = Object.keys(DASHBOARD_DATA[0]);

  const scrollDiv = d3.select("#d3table").style("overflow", "scroll");

  const containerTable = d3
    .select("#d3table")
    .style("height", "200px")
    .append("div")
    .style("padding", "5px 10px 10px 10px");

  containerTable.append("text").text("Title");

  containerTable
    .append("tr")
    .classed("thead", true)
    .selectAll("th")
    .data(titles)
    .enter()
    .append("th")
    .text((d) => d)
    .style("text-transform", "capitalize");

  const rows = containerTable
    .selectAll("div")
    .data(DASHBOARD_DATA)
    .enter()
    .append("tr");

  const data = rows
    .selectAll("td")
    .data((d, i) => {
      return Object.values(d);
    })
    .enter()
    .append("td")
    .text((d) => d);
};

export default buildTable;
