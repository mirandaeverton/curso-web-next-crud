import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer: Customer
}

export default function Form(props: FormProps) {
    const id = props.customer?.id
    const [name, setName] = useState(props.customer?.name ?? '')
    const [age, setAge] = useState(props.customer?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input 
                    readOnly
                    text="Code" 
                    value={id}
                    className="mb-4"
                    />
                    ) : false}
            <Input 
                text="Name"
                value={name}
                valueChanged={setName}
                className="mb-4"
            />
            <Input 
                text="Age"
                type="number"
                value={age} 
                valueChanged={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2">
                    {id ? 'Update' : 'Save'}
                </Button>
                <Button color="gray">
                    Cancel
                </Button>
            </div>
        </div>
    )
}