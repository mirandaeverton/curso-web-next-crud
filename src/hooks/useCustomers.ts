import { useEffect, useState } from "react"
import CustomerCollecion from "../backend/db/CustomerColection"
import Customer from "../core/Customer"
import CustomerRepository from "../core/CustomerRepository"
import useToggleDisplay from "./useToggleDisplay"

export default function useCustomers() {
    const repo: CustomerRepository = new CustomerCollecion()

    const [customer, setCustomer] = useState<Customer>(Customer.empty())
    const [customers, setCustomers] = useState<Customer[]>([])

    const {
        tableIsVisible,
        displayForm,
        displayTable     
    } = useToggleDisplay()
  
    useEffect(getAll, [])
  
    function getAll() {
      repo.getAll().then(customers => {
        setCustomers(customers)
        displayTable()
      })
    }
  
    function selectCustomer(customer) {
      setCustomer(customer)
      displayForm()
    }
  
    async function deleteCustomer(customer) {
      await repo.delete(customer)
      getAll()
    }
    
    async function saveCustomer(customer) {
      await repo.save(customer)
      getAll()
    }
    
    function newCustomer() {
      setCustomer(Customer.empty())
      displayForm()
    }

    return {
        customer,
        customers,
        getAll,
        selectCustomer,
        deleteCustomer,
        saveCustomer,
        newCustomer,
        displayTable,
        tableIsVisible
    }
}