import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import { useState } from "react";
import { userInfo } from "os";

export default function Home() {

  const [displayMode, setDisplayMode] = useState<'table' | 'form'>('table')
  const [customer, setCustomer] = useState<Customer>(Customer.empty())

  const customers = [
    new Customer('Everton', 32, '1'),
    new Customer('Emily', 21, '2'),
    new Customer('Gabriel', 34, '3')
  ]

  function customerSelected(customer) {
    setCustomer(customer)
    setDisplayMode('form')
  }

  function customerDeleted(customer) {
    console.log(`Deleting... ${customer.name}`)
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    setDisplayMode('form')
  }
  function saveCustomer(customer) {
    console.log(customer)
    setDisplayMode('table')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {displayMode === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={() => newCustomer()}>
                New Customer</Button>
            </div>
            <Table customers={customers}
              customerSelected={customerSelected}
              customerDeleted={customerDeleted}></Table>
          </>
        ) : (
          <Form customer={customer}
            cancelled={() => setDisplayMode('table')}
            customerChanged={saveCustomer}
          />
        )}
      </Layout>
    </div>
  )
}
