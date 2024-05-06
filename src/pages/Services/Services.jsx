import React from 'react'
import ServicesDiv from '../../components/core/ServicesDiv'
import ProductWeUse from '../../components/common/ProductWeUse'
import ServicesProvided from "../../components/core/ServicesProvided"

const Services = () => {
  return (
    <div>
      <ServicesDiv/>
      <ServicesProvided/>
      <ProductWeUse/>
    </div>
  )
}

export default Services