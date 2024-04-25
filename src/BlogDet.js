import { useNavigate, useParams } from 'react-router-dom'
// import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

import useFetch from './useFetch';



const BlogDet = () => {
    const navigate = useNavigate()

    const handelClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
            // console.log('deleted');
        })
    }
    const handelBack = () => {
        navigate('/')
    }

    const { id } = useParams()
    const { data: blog, IsPending, error } = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-det">
            {IsPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button className='btn' onClick={handelClick}>Delete</button>
                    <button className='btn' onClick={handelBack}>Go to home</button>
                </article>
            )}
        </div>
    );
}

export default BlogDet