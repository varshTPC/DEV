import classes from './Newpost.module.css'

function Newpost(props) {

    return (
        <form className={classes.form} onSubmit={props.onClickSubmit} >
            <div>
                <label htmlFor="content">Text</label>
                <textarea id="content" required rows="3" onChange={props.onContentChange}></textarea>
            </div>
            <div>
                <label htmlFor="author">Your Name</label>
                <input type="text" id="author" onChange={props.onAuthorChange}/>
            </div>
            <p className={classes.actions}>
                {/* since we dont want to submit which is default we need to add type button*/}
                <button type='button' onClick={props.onClose}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default Newpost;