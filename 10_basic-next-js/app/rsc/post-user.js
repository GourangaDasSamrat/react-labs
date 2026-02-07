import getData from "@/lib/getData";
import Button from "../../components/button";

export default async function PostUser({ userId }) {
    const user = await getData(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {},
        3000,
    );

    return (
        <div className="border border-gray-700 p-4">
            <Button>{user.name}</Button>
        </div>
    );
}
