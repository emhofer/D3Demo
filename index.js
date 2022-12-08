import buildBar from "./chartBar.js";
import buildColumn from "./chartColumn.js";
import buildDonut from "./chartDonut.js";
import buildLine from "./chartLine.js";
import buildTable from "./chartTable.js";

const buildDashboard = async () => {
  const size = { width: 300, height: 200 };
  const data = await d3.json("data.json");
  buildBar(data, size);
  buildColumn(data, size);
  buildDonut(data, size);
  buildLine(data, size);
  buildTable(data, size);
};

buildDashboard();
