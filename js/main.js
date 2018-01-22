moire2(d3.select("#div1"));
moire2(d3.select("#div2"));


d3.select("#div2")
    .style("transform", "rotate(0deg)")
    .transition()
    .duration(100000)
    .style("transform", "rotate(359deg)")


function moire1(container) {
    var data = [];
    for (var i=0; i<401; i++) {
        data.push(i);
    }

    var svg = container
        .append("svg")
        .attr("width", 2000)
        .attr("height", 2000);

    svg
        .selectAll("rect.line1")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "line1")
        .attr("x", 0)
        .attr("y", function(d){return d * 6})
        .attr("width", 2000)
        .attr("height", 3)

    svg	
        .selectAll("rect.line2")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "line2")
        .attr("x", function(d){return d * 6})
        .attr("y", 0)
        .attr("width", 3)
        .attr("height", 2000)
}


function moire2(container) {
    var data = [];
    for (var i=0; i<501; i++) {
        data.push(i);
    }

    var svg = container
        .append("svg")
        .attr("width", 2000)
        .attr("height", 2000);

    svg
        .selectAll("rect.line1")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "line1")
        .attr("x", 0)
        .attr("y", function(d){return d * 4})
        .attr("width", 2000)
        .attr("height", 2)

    svg
        .selectAll("rect.line2")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "line2")
        .attr("x", function(d){return d * 4})
        .attr("y", 0)
        .attr("width", 2)
        .attr("height", 2000)

}