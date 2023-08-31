"use server";

export const getUsers = async () => {
    const response = await fetch('http://127.0.0.1:50000/users', { cache: 'no-store' })
    const users = await response.json();
    return users.data;
}

export const getUser = async (id: string) => {
    const response = await fetch(`http://127.0.0.1:50000/user/${id}`)
    const user = await response.json();
    return user.data;
}