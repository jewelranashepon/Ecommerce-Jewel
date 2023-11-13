import React from 'react'

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-BD",{
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(price);
  
}

export default FormatPrice