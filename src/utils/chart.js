import * as d3 from "d3";
export const renderChart = (data) => {
    d3.select("#chart svg").remove();
    const width = 800, height = 400, margin = { top: 50, right: 30, bottom: 170, left: 100 };
    const svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);


    const xScale = d3.scaleBand()
        .domain(data.map(d => `${d.city}, ${d.country}`)) // Ensure unique labels
        .range([0, width])
        .padding(0.4);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.population)])
        .range([height, 0]);
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", "12px");

    svg.append("g")
        .call(yAxis)
        .selectAll("text")
        .style("font-size", "12px");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 50)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("City Names");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -50)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Population");

    const tooltip = d3.select("#chart")
        .append("div")
        .style("position", "absolute")
        .style("background", "lightgray")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("display", "none");

    const uniqueCountries = [...new Set(data.map(d => d.country))];
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(uniqueCountries);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => xScale(`${d.city}, ${d.country}`)) // Ensure unique X values
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(d.population))
        .attr("height", 0)
        .attr("fill", d => colorScale(d.country))
        .attr("stroke", "black")
        .attr("stroke-width", "1px")
        .on("mouseover", (event, d) => {
            tooltip.style("display", "block")
                .html(`<strong>${d.city}</strong><br>Population: ${d.population}`)
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY - 20}px`);
        })
        .on("mouseout", () => {
            tooltip.style("display", "none");
        })
        .transition()
        .duration(800)
        .attr("y", d => yScale(d.population))
        .attr("height", d => height - yScale(d.population));
      
};

