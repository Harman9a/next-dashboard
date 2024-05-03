"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [rowClass, setRowClass] = useState(
    "grid items-center grid-cols-12 sheetRow"
  );

  const [showToast, setShowToast] = useState(false);

  const saveData = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);

    console.log("save");
  };

  const MyInput = () => {
    return (
      <div>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered input-xs w-full max-w-xs rounded-none focus:outline-none text-end"
        />
      </div>
    );
  };

  const InputRow = ({ no, title }: any) => {
    return (
      <div className={rowClass}>
        <div>{no}</div>
        <div className="col-span-3">{title}</div>
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
      </div>
    );
  };

  const InputRowTotal = ({ mystyle, title }: any) => {
    return (
      <div className={rowClass} style={mystyle}>
        <div></div>
        <div className="col-span-3">
          <span style={{ fontSize: "13px", fontWeight: "600" }}>{title}</span>
        </div>
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
      </div>
    );
  };

  const HeadingRow = ({ no, title }: any) => {
    return (
      <div className={rowClass} style={{ margin: "10px 0" }}>
        <div>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>{no}</span>
        </div>
        <div className="col-span-3">
          <span style={{ fontSize: "15px", fontWeight: "500" }}>{title}</span>
        </div>
        <div>Mar, 2023</div>
        <div>Mar, 2024</div>
        <div>Mar, 2025</div>
        <div>Mar, 2026</div>
        <div>Mar, 2027</div>
        <div>Mar, 2028</div>
        <div>Mar, 2029</div>
      </div>
    );
  };

  return (
    <div className="mt-6">
      <HeadingRow no="1)" title="CURRENT LIABILITIES" />
      <InputRow no="a" title="Short Term Borrowings from Banks" />
      <InputRow no="b" title="Bank Loan Installments (Due in Next 1 Yr)" />
      <InputRow no="c" title="Short Term Borrowings from Others" />
      <InputRow no="d" title="Trade Creditors" />
      <InputRow no="e" title="Advance Payments from Customers" />
      <InputRow no="f" title="Taxes Payable" />
      <InputRow no="g" title="Accrued Expenses to be paid" />
      <InputRow no="h" title="Other Current Liabilities" />
      <InputRowTotal title="TOTAL CURRENT LIABILITIES" />

      <HeadingRow no="2)" title="MEDIUM & LONG TERM LIABILITIES" />
      <InputRow no="a" title="Bank Term Loans (Outstanding)" />
      <InputRow no="b" title="Loans from Directors" />
      <InputRow no="c" title="Loans from Friends and Relatives" />
      <InputRow no="d" title="Employee Benefits- Accumulated Funds" />
      <InputRow no="e" title="Other Medium & Long Term Liabilities" />
      <InputRowTotal title="TOTAL MED & LONG TERM LIABILITIES" />

      <HeadingRow no="3)" title="CAPITAL & RESERVE" />
      <InputRow no="a" title="Share Capital" />
      <InputRow no="b" title="General Reserves" />
      <InputRow no="c" title="Retained Earnings : Surplus / Deficit" />
      <InputRow no="d" title="Other" />
      <InputRowTotal title="TOTAL CAPITAL & RESERVES" />

      <InputRowTotal title="TOTAL LIABILITIES" />

      <HeadingRow no="4)" title="CURRENT LIABILITIES" />
      <InputRow no="a" title="Cash in hand" />
      <InputRow no="b" title="Bank Balances" />
      <InputRow no="c" title="Trade Debtors" />
      <InputRow no="d" title="Short Term Investments" />
      <InputRow no="e" title="Stocks / Inventory" />
      <InputRow no="f" title="Prepaid Expenses" />
      <InputRow no="g" title="Advance to Suppliers" />
      <InputRow no="h" title="Other Current ASSETS" />
      <InputRowTotal title="TOTAL CURRENT ASSETS" />

      <HeadingRow no="5)" title="FIXED ASSETS AND NON-CURRENT ASSETS" />
      <InputRow no="a" title="Fixed Assets ( Net Block )" />
      <InputRow no="b" title="Long Term Investments" />
      <InputRow no="c" title="Other Non-Current Assets" />
      <InputRowTotal title="TOTAL FIXED ASSETS" />

      <HeadingRow no="6)" title="INTANGIBLE ASSETS" />
      <InputRow no="a" title="Goodwill" />
      <InputRow no="b" title="Preliminary Expenses" />
      <InputRow no="c" title="Other Intangible Assets" />
      <InputRowTotal title="TOTAL INTANGIBLE ASSETS" />

      <InputRowTotal title="TOTAL ASSETS" />

      <InputRowTotal
        title="BALANCING"
        mystyle={{ marginTop: "20px", color: "black" }}
      />

      <div className="flex justify-center m-6">
        <button className="btn btn-neutral btn-sm px-10" onClick={saveData}>
          Save
        </button>
      </div>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Data Saved</span>
          </div>
        </div>
      )}
    </div>
  );
}
