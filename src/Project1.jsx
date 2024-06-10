import React, { useCallback, useState } from 'react';
import './index.css';  
function Project1() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [car, setCar] = useState(false);
  const [pas, setPas] = useState("");

  const passwordGenerate = useCallback(() => {
    let Password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (car) str += "~!@#$%^&()^$&%";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      Password += str.charAt(char);
    }
    setPas(Password);
  }, [length, num, car]);

  return (
    <div className="mt-5 container bg-secondary rounded-4 p-4 "  style={{
      backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/008/014/115/non_2x/tropical-leaves-background-design-summer-leaves-flat-illustration-simple-banner-with-copy-space-free-vector.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <h1 className="text-center mb-4">Password Generator</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={pas}
              placeholder="Generated password"
              readOnly
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={passwordGenerate}
            >
              Generate
            </button>
          </div>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="includeNumbers"
              checked={num}
              onChange={(e) => setNum(e.target.checked)}
            />
            <label className="form-check-label " htmlFor="includeNumbers">
              Include Numbers
            </label>
          </div>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="includeSymbols"
              checked={car}
              onChange={(e) => setCar(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="includeSymbols">
              Include Symbols
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="length" className="form-label">Password Length</label>
            <input
              type="number"
              className="form-control"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="1"
              max=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
