import Link from "next/link";

export interface UserProps {
    user: {
        id: number,
        registered: string,
        firstName: string,
        middleName?: string,
        lastName: string,
        email: string,
        phoneNumber?: string,
        address?: string,
        adminNotes?: string,
    }
}

const UserCard = ({user: {id, firstName, middleName, lastName, registered, email, phoneNumber, address, adminNotes}}: UserProps) => {
    const regDate = new Date(registered).toLocaleDateString('en-us', {  year:"numeric", month:"short"}) 

    return (
        <>
        <Link className="rounded font-semibold w-fit bg-slate-600 hover:bg-slate-700 text-white drop-shadow-xl mb-4 p-2 pb-4" href={'/'}>&#x2190; Back to users</Link>
        <div className="flex flex-col gap-4 justify-start items-start bg-slate-100 p-4 drop-shadow-xl rounded h-fit">
            <p className="text-xl font-bold">
                {`${firstName} ${middleName?.charAt(0) || ''} ${lastName}`}
            </p>
            <p>
                ID: {id}
            </p>
            <p>
                Register Date: {regDate}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Phone: {phoneNumber}
            </p>
            <p>
                Address: {address}
            </p>
            <p>
                Email: {email}
            </p>
            <p>Admin Notes: {adminNotes}</p>
        </div>
        </>
    )
}

export default UserCard;
