import Link from "next/link";

export default function Home() {
  return (
    <>
      <h3>Non Authentication</h3>
      <ul>
        <li>
          <Link href={"/auth_page"}>auth_page</Link>
        </li>
      </ul>
    </>
  );
}
