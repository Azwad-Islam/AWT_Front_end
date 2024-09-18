import Link from "next/link";

export default function Navigation() {
  return (<>
  <table>
    <tbody>
    <tr>
      <td>
          <p>footer</p>
      </td>
    </tr>     
    <tr>
      <td><Link href="about"> About </Link></td>
      <td> Contact</td>
      <td> <Link href="form"> Registration </Link></td>
    </tr>
    </tbody>
  </table>
  </>
  )
}