"use client"
import TitleBar from "./components/titlebar";
import Footer from "./utils/footer";
import Header from "./utils/header";
import Logo from "./utils/logo";
import Navigation from "./utils/navigation";
import { useRouter } from "next/navigation";

export default
  function Home() {
    const router = useRouter()
    return (
      <>
          <TitleBar title="Home" />
          <table style={{ width: '50%' }}>
              <tbody>
                  <tr>
                      <td style={{ border: '1px solid black' }}><Logo /></td>
                      <td style={{ border: '1px solid black' }}><Navigation /></td>
                  </tr>
                  <tr>
                      <td colSpan={2} style={{ textAlign: 'center', border: '1px solid black' }}>
                          <div>Header/Banner: <Header/></div>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan={2} style={{ textAlign: 'center', border: '1px solid black' }}>
                          <p>Intro Text Area</p>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan={2} style={{ border: '1px solid black' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                              <button type="button" onClick={() => router.push('/box/1')}>Box 1</button>
                              <button type="button" onClick={() => router.push('/box/2')}>Box 2</button>
                              <button type="button" onClick={() => router.push('/box/3')}>Box 3</button>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan={2} style={{ border: '1px solid black' }}>
                          <Footer />
                      </td>
                  </tr>
              </tbody>
          </table>
      </>
  );
}