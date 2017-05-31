"use strict";

var symbolGenerator = d3.symbol()
    .size(500);

var symbolTypes = ['symbolCircle', 'symbolDiamond', 'symbolSquare', 'symbolTriangle'];

var xScale = d3.scaleLinear()
    .domain([0, symbolTypes.length])
    .range([70, 400]);

var colors = ["#F4236B", "#09C181", "#23C9F4", "yellow"];

d3.select('g')
    .selectAll('path')
    .data(symbolTypes)
    .enter()
    .append('path')
    .style('opacity', 0)
    .transition()
        .delay(function (d, i) { return i * 1000 })
        .duration(1000)
        .style('fill', function (d, i) { return colors[i] })
        .style('opacity', 1)

    .attr('transform', function (d, i) {
        return 'translate(0, ' + xScale(i) + ')';
    })
    .attr('d', function (d) {
        symbolGenerator
            .type(d3[d]);

        return symbolGenerator();
    });

d3.select('g')
    .selectAll('text')
    .data(symbolTypes)
    .enter()
    .append('text')

    .attr('transform', function (d, i) {
        return 'translate(120, ' + xScale(i) + ')';
    })
    .text(function (d) {
        return 'this is a ' + d;
    });





