import classes from './Post.module.css'

function Post({author, content, onViewPost}) {
    return (
        <div className={classes.post} onClick={onViewPost}>
            <p className={classes.author}>{author}</p>
            <p className={classes.content}>{content}</p>
        </div>
    )
    
}

export default Post;