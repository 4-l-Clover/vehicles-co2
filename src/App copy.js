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
          <div>??????</div>
          <div>????????????</div>
          <div>??????</div>
        </div>
      </div>
      <div className="tokyo-tower">??????????????? 332.9m</div>
      <div className="tokyo-tower-co2 bebas-font">CO2 6000 KG</div>
      <img src={OverlayImg} alt="down-bg" style={{ width: '100%', position: 'absolute', left: 0, bottom: '13.9%' }} />
      <div className="mid-wrapper">???????????????????????????????????????????????????????????????????????????????????????</div>
      <div className="forest-wrapper">
        <div className="donut-wrapper">
          <div className="ring-wrapper">
            <div className="donut-text-wrapper">
              <div className="">2013?????????</div>
              <div className="">2020????????????</div>
              <div className="">
                <span>12,000</span>??????
              </div>
              <div className="">?????????????????????</div>
              <div className="">???????????????</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="inner-wrapper">
            <h2>?????????????????????????????????????????????</h2>
            <p>2013??????2020????????????????????????????????????????????????????????????????????????????????????????????????4000kg ?????????</p>
            <p>
              ??????????????????60kg??????????????????/?????????????????????1??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
