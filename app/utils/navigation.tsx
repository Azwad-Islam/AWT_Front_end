import Link from "next/link";

export default function Navigation() {
  return (<>
  <table>
    <tbody>
    <tr>
      <td><Link href="/"> Home </Link> </td>
      <td>
      </td>
      <td> <Link href="form"> Registration </Link></td>
    </tr>
    </tbody>
  </table>
  </>
  )
}