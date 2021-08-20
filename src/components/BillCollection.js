import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({ bills, onAddBill, onFireBill }) {
  // Your code here
  const billsCollection = bills.map(bill => (
    <BillCard 
    key={bill.id}
    bill={bill}
    onBillClick={onAddBill}
    onFireBill={onFireBill}
    />
  ))
  return (
    <div className="ui four column grid">
      <div className="row">
        {billsCollection}
      </div>
    </div>
  );
}
