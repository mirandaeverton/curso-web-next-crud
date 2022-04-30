import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {

  const customers = [
    new Customer('Everton', 32, '1'),
    new Customer('Emily', 21, '2'),
    new Customer('Gabriel', 34, '3')
  ]

  function customerSelected (customer) {
    console.log(customer.name)
  }
  
  function customerDeleted (customer) {
    console.log(`Deleting... ${customer.name}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="blue" className="mb-4">New Customer</Button>
        </div>
        <Table customers={customers} 
        customerSelected={customerSelected}
        customerDeleted={customerDeleted}></Table>
      </Layout>
    </div>
  )
}
