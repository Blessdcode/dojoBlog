import { Link } from "react-router-dom"
// import{idea} from '../assets/idea.png'



const Navbar = () => {

  return (
    <nav className='navbar'>
      <h1>The Idea Blog</h1>
      <div className='links'>
        <Link to="/" style={{
           color: 'hsl(0, 0%, 95%)',
           backgroundColor: 'hsl(342, 100%, 50%)',
           borderRadius: '8px'
        }}>Home</Link>
        <Link to="/create">New Blog</Link>
      </div>

    </nav>
  )
}

export default Navbar
