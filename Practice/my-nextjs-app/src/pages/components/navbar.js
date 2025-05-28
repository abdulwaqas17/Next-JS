import Link from "next/link"

const Navbar = () => {
  return (
    <div style={{ padding: '10px', background: '#eee' }}>

        <Link href='/'> Home</Link>
        <Link href='/about'> About</Link>
        <Link href='/contact'> contact</Link>
      
    </div>
  )
}

export default Navbar
