const width = document.querySelector("body").clientWidth;
const height = 500;
const margin = { top: 50, right: 100, bottom: 50, left: 100 };

const x_scale = d3
  .scaleBand()
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y_scale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height]);

const xAxis = d3.axisBottom(x_scale);
const yAxis = d3.axisLeft(y_scale);

d3.json("data.json").then(({ data }) => {
  data.forEach((d) => (d.Population = d.info.Population));

  // Scale the Domain
  x_scale.domain(data.map((d) => d.Name));
  y_scale.domain([0, d3.max(data, (d) => d.Population)]);

  // add the rectangles for the bar chart
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", (d) => x_scale(d.Name))
    .attr("y", (d) => y_scale(d.Population))
    .attr("width", x_scale.bandwidth())
    .attr("height", (d) => height - margin.bottom - y_scale(d.Population));

  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis);

  svg.append("g").attr("transform", `translate(${margin.left},0)`).call(yAxis);
});
