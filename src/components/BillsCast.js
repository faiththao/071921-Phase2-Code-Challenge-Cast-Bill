import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({ bills, onRemoveBill, onFireBill }) {
  const billCast = bills.map(bill => (
    <BillCard key={bill.id} 
    bill={bill} 
    onBillClick={onRemoveBill} 
    onFireBill={onFireBill} />
  ))
  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {billCast}
        </div>
      </div>
    </div>
  );
}

