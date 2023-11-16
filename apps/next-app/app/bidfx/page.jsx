import React, { useState, useMemo } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const initialisePriceBook = (callback) => {
  let subs = [];
  let interval;

  interval = setInterval(() => {
    subs.forEach((id) => {
      callback({
        id,
        bid: Math.random().toFixed(2),
        ask: Math.random().toFixed(2)
      });
    });
  }, 500);

  const endConnection = () => {
    clearInterval(interval);
  };

  const addPriceSub = (id) => {
    subs.push(id);
  };

  const removePriceSub = (id) => {
    subs = subs.filter((s) => s !== id);
  };

  return {
    endConnection,
    addPriceSub,
    removePriceSub
  };
};

const App = () => {
    //state for subs + state for id
  const [sub, setSub] = useState([]);
  const [subId, setSubID] = useState();

  const {endConnection,
    addPriceSub,
    removePriceSub} = useMemo(() => initialisePriceBook((price) => setSub((prev) => [...prev.filter((i) => i.id !== price.id), price])),[])

  // [{id: 1}, {id: 2}]
  // {id: 2}

  // function to get sub
  const getSub = () => {

    addPriceSub(subId);
  };

  //function to remove sub
  const removeSub = (id) => {
    setSub(sub.filter((i) => i.id !== id))
    removePriceSub(id)
  };


  return (
    <div>
      <input placeholder="Enter price sub ID" onChange={(e) => setSubID(e.target.value)} value={subId} />
      <button onClick={getSub}>Add Price Sub</button>

      <table>
         <tr>
                  <th>ID</th>
                  <th>bid</th>
                  <th>ask</th>
                  <th>spread</th>
                  <th />
                </tr>
        {sub &&
          sub.map((item) => {
            return (
              <>

                <tr>

                  <td>{item.id}</td>
                  <td>{item.bid}</td>
                  <td>{item.ask}</td>
                  <td>{(item.bid - item.ask).toFixed(2)}</td>
                  <td>

                    <button onClick={() => removeSub(item.id)}>Remove Price Sub</button>
                  </td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
