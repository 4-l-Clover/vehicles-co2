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
  '2020': [51.1, 39.2],
  '2019': [50, 39.6],
  '2018': [51.1, 40],
  '2017': [50.7, 39.8],
  '2016': [50.2, 40.2],
  '2015': [49.3, 40.4],
  '2014': [49, 39.7],
  '2013': [50, 41],
  '2012': [49.5, 40],
  '2011': [49, 42]
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
    config: { duration: 800 }
  });

  return (
    <div className="main-wrapper">
      <img src={TopBackground1} alt="background" className="top-bg-1" />
      <div className="year-wrapper">
        <Select
          value={year}
          onChange={handleChangeYear}
          className="year-select"
          dropdownClassName="year-select-dropdown"
        >
          {new Array(10).fill(0).map((_, index) => (
            <Option key={index} value={2020 - index}>
              {2020 - index}年
            </Option>
          ))}
        </Select>
        <Select defaultValue={8} className="year-select" dropdownClassName="year-select-dropdown" disabled>
          <Option value={8}>8月</Option>
        </Select>
      </div>
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
        <div className="bar bar-tower" />
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
      <div className="tokyo-tower-co2 bebas-font">CO2 532,640 M3</div>
      <div className="year-text-before bebas-font">{year - 7}</div>
      <div className="year-text-after bebas-font">{year}</div>
      <img src={OverlayImg} alt="down-bg" className="overlay-img" />
      <div className="mid-wrapper">
        成長中の樹木は二酸化炭素を吸収し蓄積します。新しいクルマに乗り換え、二酸化炭素排出量を削減していくことは、植林を進めていくことと同じように温暖化を抑制する効果があります。
      </div>
      <div className="forest-wrapper">
        <div className="donut-wrapper">
          <div className="ring-wrapper">
            <div className="donut-text-wrapper">
              <div className="">{`${year - 7}年8月から`}</div>
              <div className="">{`${year}年8月までに`}</div>
              <div className="">
                <span>5,216,742</span>本の
              </div>
              <div className="">植林を実施した</div>
              <div className="">ことに相当</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="inner-wrapper">
            <h2>新しいクルマに乗り換えることにより、二酸化炭素排出量の削減を目指します</h2>
            <p>
              二酸化炭素排出量を60kg削減することは、郊外/都市部にイロハモミジを1本植えることと等しい効果があるとされています。(*)
            </p>
            <p>
              {`${year - 7}年8月と${year}年8月の新車販売実績に基づいて10万台あたりの二酸化炭素排出量を計算すると、
              イロハモミジ5,216,742本を植林するのと同等の効果があると考えられます。`}
            </p>
            <p>
              (*){' '}
              <a
                href="https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references
              </a>
            </p>
            <div className="car-logo-wrapper">
              <img src={ToyotaImg} alt="toyota" className="toyota-img" />
              <img src={MitsubishiImg} alt="mitsubishi" className="mitsubishi-img" />
              <img src={HondaImg} alt="honda" className="honda-img" />
              <img src={NissanImg} alt="nissan" className="nissan-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
