import classes from './PostDetails.module.css'

function PostDetails() {
    return (
        <div className={classes.maindiv}>
            <h2 className={classes.author}>Your Post:</h2>
            <p className={classes.content}>Successfully stored in our database!</p>
        </div>
    )
}

export default PostDetails;