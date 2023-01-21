import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPhoto } from '../features/photoSlice'

const Post = ({title, content, id}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto())
  }, [])
  return (
    <div>
      <h1>{title}</h1>
      <p>{ content }</p>
    </div>
  )
}

export default Post
