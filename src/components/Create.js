import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
     const [title, setTitle] = useState('')
     const [body, setBody] = useState('')
     const [author, setAuthor] = useState('')

const navigate = useNavigate()


     const handleSubmit = (e) => {
          e.preventDefault();
          const blog = { title, body, author }
          fetch('http://localhost:8000/blogs', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(blog)
          }).then(() => {
               // console.log('added');
               navigate('/')
          })
     }

     return (
          <div className="create">
               <h2>Add new blog</h2>
               <form onSubmit={handleSubmit}>
                    <label >Blog title:</label>
                    <input type="text" required
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                    />

                    <label >Blog boby:</label>
                    <textarea required
                         value={body}
                         onChange={(e) => setBody(e.target.value)}
                    ></textarea>

                    <label >Blog author:</label>
                    <input type="text" required
                         value={author}
                         onChange={(e) => setAuthor(e.target.value)}
                    />
                    {/* <select
                         value={author}
                         onChange={(e) => setAuthor(e.target.value)}
                    >
                         <option value="mario">mario</option>
                         <option value="yoshi">yoshi</option>
                    </select> */}
                    <button>Add a Blog</button>


               </form>
          </div>
     );
}

export default Create; 