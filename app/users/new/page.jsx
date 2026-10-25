"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const NewUserPage =  () => {
  const handleAddNewUser = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser);

    const res = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newUser),
    })
    console.log('response from server', res);
    const afterSubmit = await res.json();
    console.log("after Submit", afterSubmit);
    if(afterSubmit.insertedId){
        console.log('User Added Successfully');
        redirect("/users")
    }
  }
  return (
    <form onClick={handleAddNewUser}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input
            id="fieldgroup-name"
            name="name"
            placeholder="Enter Your Name"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default NewUserPage
