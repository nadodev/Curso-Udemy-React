
export const PostCard = ({title, cover, body}) => (
        <div  className="post">  
            <img src={cover} alt={title}/>
            <div className="post-card">
                <h1 className="title">{title}</h1>
                <p className="text">{body}</p>
            </div>
        </div>
    )

