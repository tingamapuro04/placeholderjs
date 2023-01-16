import React from 'react'
import { useSelector } from 'react-redux';
import './Post.scss'

const Posts = () => {
  const posts = useSelector(state => state.data.photos)
  return (
    <div>
      <ul className='items'>
        {posts.map((post) => {
          return (
            <li key={post.id} className="List-item">
              <div className="item">
                <p>{post.id}</p>
                <h2>{post.title.substr(0, 10).toUpperCase()}</h2>
                <p>{post.body.substr(0, 150)}</p>
                <button value={post.id} onClick={(e) => console.log(e.target.value)}>Checkout</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Posts