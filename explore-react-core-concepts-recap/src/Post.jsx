import './Post.css'
export default function Post({postProp}){
    console.log(postProp);
    const {title, body, id, userId} = postProp;
    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p>{body}</p>

        </div>
    )
}