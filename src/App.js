import { useState } from 'react';

function App() {
  let [valueofrange, setvalueofrange] = useState(0); // input range value
  let [dateofpara, setdateofpara] = useState(new Date()); //current local date
  let [numvalue, setnumvalue] = useState(valueofrange); // total number
  let [alertarea, setalertarea] = useState(''); //alert area inner html

  function minusfoo() {
    if (valueofrange === 0) {
      setalertarea('Please select the range button');
    } else {
      var newnumvalue = Number(numvalue) - Number(valueofrange);
      setnumvalue(newnumvalue);
      setalertarea('');
    }
  }

  function plussfoo() {
    if (valueofrange === 0) {
      setalertarea('Please select the range button');
    } else {
      var newnumvalue = Number(numvalue) + Number(valueofrange);
      setnumvalue(newnumvalue);
      setalertarea('');
    }
  }

  function settingdateofparafoo() {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    if ((numvalue == "0") || (numvalue == "")) {
      var date = dateofpara.getDate();
      var year = dateofpara.getFullYear();
      var day = days[dateofpara.getDay()];
      var month = months[dateofpara.getMonth()];

      return `Today is ${day} ${month} ${date} ${year}`;
    } else {
      var todaySDate = new Date(dateofpara);
      todaySDate.setDate(todaySDate.getDate() + Number(numvalue));

      var date = todaySDate.getDate();
      var year = todaySDate.getFullYear();
      var day = days[todaySDate.getDay()];
      var month = months[todaySDate.getMonth()];

      return `${numvalue} days from today is ${day} ${month} ${date} ${year}`;
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card">
        <div className="card-header">Date Counter</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="d-flex justify-content-space-evenly align-items-center">
              <input
                type="range"
                className="form-range mx-2 mb-3"
                min="0"
                max="10"
                step="1"
                value={valueofrange}
                id="customRange1"
                onChange={(e) => {
                  setvalueofrange(e.target.value);
                }}
              />
              <p>{valueofrange}</p>
            </div>
            <p style={{ color: 'red', fontSize: 'medium' }}>{alertarea}</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <button type="button" onClick={minusfoo} className="btn btn-outline-dark">
                -
              </button>
              <input
                style={{ width: '65%' }}
                type="number"
                className="mx-2"
                onChange={(e) => {
                  setnumvalue(e.target.value);
                }}
                value={numvalue}
              />
              <button type="button" onClick={plussfoo} className="btn btn-outline-dark">
                +
              </button>
            </div>
            <p className="mt-3">{settingdateofparafoo()}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default App;
