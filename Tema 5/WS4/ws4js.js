google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Diputados', 'Grupos'],
        ['PP', 119],
        ['PSOE', 89],
        ['PODEMOS', 65],
        ['CIUDADANOS', 40],
        ['ERC', 9],
        ['DL (convergencia)', 8],
        ['EAJ-PNV', 6],
        ['Grupo mixto', 14]
    ]);

    var options = {
        title: 'REPRESENTACION CONGRESO DE LOS DIPUTADOS'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 82600000],
        ['United States', 75600000],
        ['Spain', 75600000],
        ['China', 59300000],
        ['Italy', 52400000],
        ['UK', 35800000],
        ['Germany', 35600000],
        ['Mexico', 35000000],
        ['Tailand', 32600000],
        ['Turkey', 29000000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}