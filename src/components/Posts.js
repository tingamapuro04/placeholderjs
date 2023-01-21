import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Post.scss'
import { getPhoto } from '../features/photoSlice';

const Posts = () => {
  const posts = useSelector(state => state.data.photos)
  const dispatch = useDispatch()

  const fetchPhoto = (id) => {
    // dispatch(getPhoto())
  }


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
                <button onClick={fetchPhoto(post.id)}>Checkout</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Posts
