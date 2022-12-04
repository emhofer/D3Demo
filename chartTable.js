const TABLE_DATA = [
  { id: "d1", value: 3, region: "Vienna" },
  { id: "d2", value: 6, region: "Salzburg" },
  { id: "d3", value: 9, region: "Upper Austria" },
  { id: "d4", value: 12, region: "Lower Austria" },
  { id: "d5", value: 15, region: "Tyrol" },
  { id: "d6", value: 17, region: "Vienna" },
  { id: "d7", value: 4, region: "Carinthia" },
  { id: "d8", value: 23, region: "Burgenland" },
  { id: "d9", value: 5, region: "Vorarlberg" },
  { id: "d10", value: 11, region: "Upper  Austria" },
  { id: "d11", value: 2, region: "Styria" },
  { id: "d12", value: 17, region: "Salzburg" },
  { id: "d13", value: 22, region: "Salzburg" },
  { id: "d14", value: 8, region: "Upper Austria" },
  { id: "d15", value: 10, region: "Lower Austria" },
];

const titles = Object.keys(TABLE_DATA[0]);

const scrollDiv = d3.select("#d3table").style("overflow", "scroll");

const containerTable = d3
  .select("#d3table")
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
