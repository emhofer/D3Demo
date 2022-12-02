const TABLE_DATA = [
  { id: "d1", value: 3, region: "Vienna" },
  { id: "d2", value: 6, region: "Salzburg" },
  { id: "d3", value: 9, region: "Upper Austria" },
  { id: "d4", value: 12, region: "Lower Austria" },
  { id: "d5", value: 15, region: "Tyrol" },
];

const containerTable = d3
  .select("#d3table")
  .append("div")
  .style("padding", "10px");

containerTable
  .append("tr")
  .selectAll("th")
  .data(Object.keys(TABLE_DATA[0]))
  .enter()
  .append("th")
  .text((d) => d)
  .style("text-transform", "capitalize");

const rows = containerTable
  .selectAll("tr")
  .data(TABLE_DATA)
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
