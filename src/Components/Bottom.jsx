import React from 'react';


function Bottom({ metrics }) {
  if (!metrics || !metrics.recentTrades) {
    return <p>Loading recent trades...</p>;
  }

  return (
    <div className="bottom-container">
      <h3>Recent 10 Trades</h3>
      <table className="trades-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Result</th>
            <th>Return (%)</th>
          </tr>
        </thead>
        <tbody>
          {metrics.recentTrades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.id}</td>
              <td>{trade.symbol}</td>
              <td>
                <span className={trade.result === "WIN" ? "win" : "loss"}>
                  {trade.result}
                </span>
              </td>
              <td className={parseFloat(trade.returnPct) >= 0 ? "positive" : "negative"}>
                {trade.returnPct}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bottom;
