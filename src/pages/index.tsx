import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import { useEffect, useState } from "react";
import { userInfo } from "os";
import CustomerRepository from "../core/CustomerRepository";
import CustomerCollecion from "../backend/db/CustomerColection";
import useCustomers from "../hooks/useCustomers";

export default function Home() {

  const {
    customer,
    customers,
    selectCustomer,
    deleteCustomer,
    saveCustomer,
    newCustomer,
    displayTable,
    tableIsVisible
} = useCustomers()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableIsVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={() => newCustomer()}>
                New Customer</Button>
            </div>
            <Table customers={customers}
              customerSelected={selectCustomer}
              customerDeleted={deleteCustomer}></Table>
          </>
        ) : (
          <Form customer={customer}
            cancelled={() => displayTable()}
            customerChanged={saveCustomer}
          />
        )}
      </Layout>
    </div>
  )
}
