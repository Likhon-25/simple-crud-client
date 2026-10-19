import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

const UpdateUser = ({ user }) => {
  const router = useRouter()
  const handleUpdateUser = async (e) => {
    console.log("form submitted")
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updateUser = Object.fromEntries(formData.entries())
    console.log("update u ser", updateUser)

    const res = await fetch(`http://localhost:5000/user/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })

    const result = await res.json()
    console.log("restult from server", result)
    if (result.modifiedCount > 0) {
      console.log("User updated successfully")
      router.refresh();
    }
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger
          className="mx-3"
          render={<Button variant="outline">Edit</Button>}
        />
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleUpdateUser}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input
                  id="name-1"
                  name="name"
                  type="text"
                  defaultValue={user.name}
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">Email</Label>
                <Input
                  id="email-1"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <DialogClose render={<Button type="submit">Save changes</Button>} />             
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateUser
