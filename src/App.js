import React, { useState } from 'react';
import './App.less';
import TopBackground1 from './assets/02-Landing-c.png';
import ToyotaImg from './assets/toyota.png';
import MitsubishiImg from './assets/mitsubishi.png';
import NissanImg from './assets/nissan.png';
import HondaImg from './assets/honda.png';
import OverlayImg from './assets/overlay.png';
import { Select } from 'antd';
import { useSpring, a } from 'react-spring';

const { Option } = Select;

const CO2_AMOUNT = {
  '2020': [41.6, 25.4],
  '2019': [41.7, 28],
  '2018': [41.8, 29.2],
  '2017': [41.9, 30],
  '2016': [42, 30.7],
  '2015': [42.1, 31],
  '2014': [42.2, 31.3],
  '2013': [42.3, 31.2],
  '2012': [42.4, 31.1],
  '2011': [42.5, 31]
};

function App() {
  const [year, setYear] = useState(2020);
  const handleChangeYear = (value) => {
    setYear(value);
  };

  const { y_before, y_after } = useSpring({
    from: { y_before: 0, y_after: 0 },
    y_before: CO2_AMOUNT[year][0],
    y_after: CO2_AMOUNT[year][1],
    config: { duration: 1000 }
  });

  return (
    <div className="main-wrapper">
      <img src={TopBackground1} alt="background" className="top-bg-1" />
      <Select value={year} onChange={handleChangeYear} className="year-select" dropdownClassName="year-select-dropdown">
        {new Array(10).fill(0).map((_, index) => (
          <Option key={index} value={2020 - index}>
            {2020 - index}
          </Option>
        ))}
      </Select>
      <div className="chart-container">
        <table>
          <tbody>
            {new Array(10).fill(0).map((_, index) => (
              <tr key={index}>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <a.div className="bar bar-before" style={{ height: y_before.to((y) => `${y}vw`) }}></a.div>
        <a.div className="bar bar-after" style={{ height: y_after.to((y) => `${y}vw`) }}></a.div>
      </div>
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
      <div className="year-text-before bebas-font">{year - 7}</div>
      <div className="year-text-after bebas-font">{year}</div>
      <img src={OverlayImg} alt="down-bg" className="overlay-img" />
      <div className="mid-wrapper">二酸化炭素排出量の削減はさらなる植林と同等の効果があります</div>
      <div className="forest-wrapper">
        <div className="donut-wrapper">
          <div className="ring-wrapper">
            <div className="donut-text-wrapper">
              <div className="">{`${year - 7}年から`}</div>
              <div className="">{`${year}年までに`}</div>
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
            <p>{`${
              year - 7
            }年と${year}年を比較して、最新の車を販売することにより、二酸化炭素の排出量を4000kg 削減。`}</p>
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
