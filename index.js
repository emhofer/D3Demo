const margin = { top: 40, bottom: 10, left: 120, right: 20 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Creates sources <svg> element
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

// Group used to enforce margin
const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Global variable for all data
const data = [66.38, 21.51, 23.37, 34.17, 36.21];

const bar_height = 50;

/////////////////////////
// TODO bind our data items to rects in our group `g`
// such that
// height = bar_height
// width = d*7
// y = i*(bar_height+5)

const rects = d3
  .select("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("height", bar_height)
  .attr("width", (d, i) => d * 7)
  .attr("y", (d, i) => i * (bar_height + 5));

// Render the chart with new data

// DATA JOIN

// ENTER
// new elements

// ENTER + UPDATE
// both old and new elements

// EXIT
