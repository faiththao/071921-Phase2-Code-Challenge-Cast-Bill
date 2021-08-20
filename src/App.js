import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';
import SortBar from './components/SortBar';

const API = 'http://localhost:8002/bills'

export default function App() {
  const [bills, setBills] = useState([]);
  const [billAdded, setBillAdded] = useState([]);
  const [sortBy, setSortBy] = useState(true);

  const sortedBills = [...bills].sort((bill1, bill2) => {
    if (sortBy === "rating") {
      return bill2.rating - bill1.rating
    } else {
      return bill1 - bill2
    }
  })

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(bills => setBills(bills))
  }, [])

  function addBill(billToAdd) {
    const billInCast = billAdded.find(
      bill => bill.id === billToAdd.id
    );
    if (!billInCast) {
      setBillAdded([...billAdded, billToAdd])
    }
  }

  function removeBill(billToFire) {
    setBillAdded((billAdded) => 
    billAdded.filter((bill) => bill.id !== billToFire.id))
  }

  function fireBill(removeBill) {
    setBills(bills =>
      bills.filter(bill => bill.id !== removeBill.id))
  }

  return (
    <div>
      <SortBar 
      bills={bills}
      sortBy={sortBy}
      setSortBy={setSortBy} 
      />
      <BillsCast bills={billAdded} 
      onRemoveBill={removeBill} 
      onFireBill={fireBill}
      />
      <BillCollection bills={sortedBills} 
      onAddBill={addBill} 
      onFireBill={fireBill}
      />
    </div>
  );
}
