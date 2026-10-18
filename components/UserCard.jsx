import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
const UserCard = ({user}) => {
    return (
        <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
      
      <CardHeader>
        <CardAction>
            <h2>No Action</h2>
        </CardAction>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
          Email: {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}>
        <Button className="w-full">View Event</Button>
        </Link>
        <Button>Edit</Button>
        <Button variant='destructive'>Delet</Button>
      </CardFooter>
    </Card>
        </div>
    );
};

export default UserCard;