"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  let { id } = useParams();
  const [showToast, setShowToast] = useState(false);
  const [yearesHeader, setYearesHeader] = useState<any>([]);
  const [totalNoOfRows, setTotalNoOfRows] = useState<any>();
  const [balancesheetData, setBalancesheetData] = useState<any>({
    clientId: "",
    current_liabilities: [],
    medium_long_term_libilities: {},
    capital_reserve: {},
    total_libilities: {},
    current_assets: {},
    fixed_assets_and_non_current_assets: {},
    intangible_assets: {},
    total_assets: {},
    balancing: {},
  });
  const [rowClass, setRowClass] = useState(
    "grid items-center grid-cols-12 sheetRow"
  );

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getClient`, { id })
      .then((res) => {
        setYearsHeader(res.data.noOfYears);
        setTotalNoOfRows(parseInt(res.data.noOfYears) + 3);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setYearsHeader = (no: Number) => {
    let yearsArr = [];
    let currentYear = new Date().getFullYear();
    yearsArr.push({ year: currentYear - 2 });
    yearsArr.push({ year: currentYear - 1 });
    yearsArr.push({ year: currentYear });

    for (let i: any = 1; i <= no; i++) {
      yearsArr.push({ year: currentYear + i });
    }

    setYearesHeader(yearsArr);
  };

  const showToastController = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };
  const MyInput = ({ no, slug, handleValueChange, sr }: any) => {
    return (
      <div>
        <input
          type="number"
          placeholder="0.00"
          className="input input-bordered input-xs w-full max-w-xs rounded-none focus:outline-none text-end"
          onChange={(e) => handleValueChange(slug, no, sr, e.target.value)}
        />
      </div>
    );
  };

  const saveData = () => {
    console.log(balancesheetData);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/saveBalancesheetData`,
        balancesheetData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValueChange = (
    slug: any,
    no: any,
    key: Number,
    value: Number
  ) => {
    let data = balancesheetData;
    if (data[slug][no] === undefined) {
      data[slug][no] = [];
      data[slug][no].push({ key, value });
    } else {
      let found = false;
      data[slug][no].map((x: any) => {
        if (x.key === key) {
          x.value = value;
          found = true;
        }
      });
      if (!found) {
        data[slug][no].push({ key, value });
      }
    }
    console.log(balancesheetData);
    console.log(data);
    setBalancesheetData(data);
  };

  const InputRow = ({ no, title, slug, handleValueChange }: any) => {
    const inputs = [];

    for (let i = 1; i <= totalNoOfRows; i++) {
      inputs.push(
        <MyInput
          key={i}
          sr={i}
          no={no}
          slug={slug}
          handleValueChange={handleValueChange}
        />
      );
    }
    return (
      <div className={rowClass}>
        <div>{no}</div>
        <div className="col-span-3">{title}</div>
        {inputs}
      </div>
    );
  };

  const InputRowTotal = ({ mystyle, title }: any) => {
    const inputs = [];

    for (let i = 1; i <= totalNoOfRows; i++) {
      inputs.push(<MyInput key={i} />);
    }

    return (
      <div className={rowClass} style={mystyle}>
        <div></div>
        <div className="col-span-3">
          <span style={{ fontSize: "13px", fontWeight: "600" }}>{title}</span>
        </div>
        {inputs}
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
        {yearesHeader.map((x: any, i: any) => {
          return <div key={i}>Mar, {x.year}</div>;
        })}
      </div>
    );
  };

  return (
    <div className="mt-6">
      <HeadingRow no="1)" title="CURRENT LIABILITIES" />
      <InputRow
        no="a"
        title="Short Term Borrowings from Banks"
        slug="current_liabilities"
        handleValueChange={handleValueChange}
      />
      <InputRow
        no="b"
        title="Bank Loan Installments (Due in Next 1 Yr)"
        slug="current_liabilities"
        handleValueChange={handleValueChange}
      />
      <InputRow
        no="c"
        title="Short Term Borrowings from Others"
        slug="current_liabilities"
      />
      <InputRow no="d" title="Trade Creditors" slug="current_liabilities" />
      <InputRow
        no="e"
        title="Advance Payments from Customers"
        slug="current_liabilities"
      />
      <InputRow no="f" title="Taxes Payable" slug="current_liabilities" />
      <InputRow
        no="g"
        title="Accrued Expenses to be paid"
        slug="current_liabilities"
      />
      <InputRow
        no="h"
        title="Other Current Liabilities"
        slug="current_liabilities"
      />
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

      <HeadingRow no="4)" title="CURRENT ASSETS" />
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

      <InputRowTotal title="BALANCING" mystyle={{ marginTop: "20px" }} />

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
