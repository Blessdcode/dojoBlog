import { Link } from "react-router-dom"
import { not_found_1, not_found_2 } from '../assets'



function NotFound() {
  return (
    <div className='not_found'>
      <h3>Sorry, page not found!!!</h3>
      <img src={not_found_2} alt="not_found" />
      <div className='flex'>
        <Link to='/'>Homepage</Link>
      </div>
    </div>
  )
}

export default NotFound
