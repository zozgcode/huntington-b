import React from "react";
import style from "./style.module.scss";
import { DavidTaborTxData } from "./tXdata";

export default function DavidTabor() {
  return (
    <div className={style.transaction_history}>
      <div className={style.in_transaction_history}>
        <div className={style.title}>Last Transaction</div>
        {DavidTaborTxData.length === 0 && (
          <div className={style.no_transaction_yet}>
            No transaction yet
          </div>
        )}
        {DavidTaborTxData.map((aTxData, i) => (
          <div className={`${style.t_box} ${i === 0 ? style.firstContainer : ''}`} key={i}>
            <div className={style.s_box}>
              <div className={`${style.top} ${style.top_t}`}>{aTxData.txName}</div>
              <div className={style.bottom}>{aTxData.whatUsed}</div>
            </div>
            <div className={`${style.s_box} ${style.s_box_r}`}>
              <div className={style.top} style={{ color: aTxData.color }}>{aTxData.debit}</div>
              <div className={style.bottom}>{aTxData.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
