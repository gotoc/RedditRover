$(function () {

    $(document).ready(function () {

        var options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                renderTo: 'plugin-share',
                height: 300
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '<b>{point.y:.f} submissions</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            credits: {
                enabled: false
            },
            series: [{}]
        };

        $.getJSON('./_data/post_list.json', function (data) {
            $.each(data, function (i, point) {
                point.y = point.data;
            });
            options.series[0].data = data;
            var chart = new Highcharts.Chart(options);
        });

    });
});
