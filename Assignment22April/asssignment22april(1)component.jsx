import react, { useState, Fragment } from "react";
const CalculatorComponent = () => {
  let [res, setResult] = useState("");
  const handleClick = (evt) => {
    setResult(res.concat(evt.target.value));
  };
  const clear = (evt) => {
    setResult("");
  };
  const clearBackspace = () => {
    setResult(res.splice(0, res.length - 1));
  };
  const calculate = () => {
    try {
      setResult(eval(res).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  const calculateSin = (evt) => {
    let val = evt.target.value;
    if (val === "Sin") {
      console.log(res + "Math.sin(parseInt(res)) " + Math.sin(parseInt(res)));
      setResult("SIN(" + res + ") = " + Math.sin(parseInt(res)));
    } else if (val === "Cos") {
      setResult("COS(" + res + ") = " + Math.cos(parseInt(res)));
    } else if (val === "Tan") {
      setResult("TAN(" + res + ") = " + Math.tan(parseInt(res)));
    } else if (val === "Cosec") {
      setResult("COSEC(" + res + ") = " + (1/(Math.sin(res))));
    } else if (val === "Cot") {
      setResult("COT(" + res + ") = " + (1/(Math.tan(res))));
    } else if (val === "Sec") {
      setResult("SEC(" + res + ") = " + (1/(Math.cos(res))));
    }else{
      setResult(Math.PI);
    }
  };

  return (
    <Fragment>
      <div>
        <h1>Calculator Assignment</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input
                type="text"
                id="res1"
                value={res}
                onChange={(evt) => setResult(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1" id="one" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="2" id="two" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="3" id="three" onClick={handleClick} />
            </td>
            <td>
              <input
                type="button"
                value="+"
                id="btnplus"
                onClick={handleClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" id="four" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="5" id="five" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="6" id="six" onClick={handleClick} />
            </td>
            <td>
              <input
                type="button"
                value="-"
                id="btnminus"
                onClick={handleClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" id="seven" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="8" id="eight" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="9" id="nine" onClick={handleClick} />
            </td>
            <td>
              <input
                type="button"
                value="*"
                id="btnmul"
                onClick={handleClick}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="/"
                id="btndiv"
                onClick={handleClick}
              />
            </td>
            <td>
              <input type="button" value="0" id="zero" onClick={handleClick} />
            </td>
            <td>
              <input type="button" value="Sin" onClick={calculateSin} />
            </td>
            <td>
              <input type="button" value="Cos" onClick={calculateSin} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="%"
                id="btnmod"
                onClick={handleClick}
              />
            </td>
            <td>
              <input type="button" value="C" id="clr" onClick={clear} />
            </td>
            <td>
              <input
                type="button"
                value="="
                id="btnequal"
                onClick={calculate}
              />
            </td>
            <td>
              <input type="button" value="Tan" onClick={calculateSin} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="Sec" onClick={calculateSin} />
            </td>
            <td>
              <input type="button" value="Cosec" onClick={calculateSin} />
            </td>
            <td>
              <input type="button" value="Cot" onClick={calculateSin} />
            </td>
            <td>
              <input type="button" value="PI" onClick={calculateSin} />
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default CalculatorComponent;
