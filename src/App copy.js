import React, { useLayoutEffect, useRef } from 'react';
// import React from 'react';
import './App.less';
import TopBackground1 from './assets/02-Landing-c.png';
import ToyotaImg from './assets/toyota.png';
import MitsubishiImg from './assets/mitsubishi.png';
import NissanImg from './assets/nissan.png';
import HondaImg from './assets/honda.png';

import OverlayImg from './assets/overlay.png';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

function App() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create('chartdiv', am4charts.XYChart3D);

    x.paddingRight = 20;

    // let data = [];
    // let visits = 10;

    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
    // }

    // x.data = data;

    // let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    // let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = x.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = 'date';
    // series.dataFields.valueY = 'value';
    // series.tooltipText = '{valueY.value}';
    // x.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    // chart.current = x;
    x.data = [
      {
        'country': 'USA',
        'visits': 4025
      },
      {
        'country': 'Japan',
        'visits': 1809
      }
    ];

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    // categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = 'right';
    categoryAxis.tooltip.label.verticalCenter = 'middle';

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Countries';
    // valueAxis.title.fontWeight = 'bold';

    // Create series
    let series = x.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.name = 'Visits';
    series.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.5;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color('#FFFFFF');

    columnTemplate.adapter.add('fill', function (fill, target) {
      return x.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add('stroke', function (stroke, target) {
      return x.colors.getIndex(target.dataItem.index);
    });

    x.cursor = new am4charts.XYCursor();
    // x.cursor.lineX.strokeOpacity = 0;
    // x.cursor.lineY.strokeOpacity = 0;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div className="main-wrapper">
      <img src={TopBackground1} alt="background" className="top-bg-1" />
      <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
      {/* <div className="chart-container">
        <div className="bar bar-before"></div>
        <div className="bar bar-after"></div>
      </div> */}
      <div className="top-left-text-wrapper">
        <div className="co2 bebas-font">
          CO<sub className="bebas-font">2</sub>
        </div>
        <div className="text-wrapper">
          <div>車の</div>
          <div>販売台数</div>
          <div>より</div>
        </div>
      </div>
      <div className="tokyo-tower">東京タワー 332.9m</div>
      <div className="tokyo-tower-co2 bebas-font">CO2 6000 KG</div>
      <img src={OverlayImg} alt="down-bg" style={{ width: '100%', position: 'absolute', left: 0, bottom: '13.9%' }} />
      <div className="mid-wrapper">二酸化炭素排出量の削減はさらなる植林と同等の効果があります</div>
      <div className="forest-wrapper">
        <div className="donut-wrapper">
          <div className="ring-wrapper">
            <div className="donut-text-wrapper">
              <div className="">2013年から</div>
              <div className="">2020年までに</div>
              <div className="">
                <span>12,000</span>本の
              </div>
              <div className="">植林を実施した</div>
              <div className="">ことに相当</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="inner-wrapper">
            <h2>より燃料効率のいい車が救う森林</h2>
            <p>2013年と2020年を比較して、最新の車を販売することにより、二酸化炭素の排出量を4000kg 削減。</p>
            <p>
              二酸化炭素が60kg減れば、郊外/都市部に樹木を1本植えることに等しくなります。より新しく、燃料効率の良い車を運転することで、環境に優しい暮らしを実現します。
            </p>
            <div className="car-logo-wrapper">
              <img src={MitsubishiImg} alt="mitsubishi" />
              <img src={HondaImg} alt="honda" />
              <img src={NissanImg} alt="nissan" />
              <img src={ToyotaImg} alt="toyota" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
