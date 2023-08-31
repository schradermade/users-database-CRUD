import Link from "next/link";
import { getUsers } from "../../lib/actions/user.actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>
      <section className="m-8 flex justify-center items-center">
      {users?.length === 0 ? (
          <p>No users found</p>
        ) : (
            <>
              <div className="flex flex-col w-full gap-4">
                {users.map((user, index: number) => (
                  <div key={user.id}>
                    <p>{index+1}</p>
                    <Link className={"text-blue-500 underline hover:text-xl hover:text-blue-800 font-blue"} href={`/user/${user.id}`}>
                      {user.lastName}, {user.firstName}
                    </Link>
                  </div>
                ))}
              </div>
            </>
        )
}
      </section>
    </>
  );
}