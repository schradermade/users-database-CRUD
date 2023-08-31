import { notFound } from "next/navigation"
import UserCard from "../../../../components/UserCard";
import { getUser, getUsers } from "../../../../lib/actions/user.actions";

export async function generateStaticParams() {
    const users = await getUsers()

    return users.map((user) => ({
        id: user.id.toString()
    }))
}

const Page = async ({ params }: { params: { id: string } }) => {
    const users = await getUsers()
    const {id} = params

    if (!users.find(user => user.id.toString() === id)) notFound()

    const user = await getUser(id.toString())

    return (
        <div className="m-4">
            <UserCard user={user} />
        </div>
    )
}

export default Page;