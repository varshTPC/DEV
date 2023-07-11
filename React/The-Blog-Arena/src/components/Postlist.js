import Post from './Post'
import Newpost from './Newpost'
import classes from './Postlist.module.css'
import { useState, useEffect } from 'react'
import Modal from './Modal'
import loading from '../loading.gif'
import PostDetails from './PostDetails'

function Postlist({modalIsVisible, onStopPosting, onClickedPost, viewPost}) {
    const [enteredAuthor, setenteredAuthor] = useState("")
    const [enteredContent, setenteredContent] = useState("")
    const [postlist, setpostlist] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        async function fetchPosts() {
            // console.log("entered fetchposts")
            setisLoading(true)
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            // console.log(resData.posts)
            setpostlist(resData.posts)
            setisLoading(false)
            // console.log(postlist)
        }
        fetchPosts();
    }, [])
    
    function authorChangeHandler(event) {
        setenteredAuthor(event.target.value)
        // console.log(enteredAuthor)
    }

    function contentChangeHandler(event) {
        setenteredContent(event.target.value)
        // console.log(enteredContent)
    }

    function formSubmitHandler(event) {
        event.preventDefault(); // prevents browser to generate and send http req which results in reloading of page
        const postdata = {author: enteredAuthor, content: enteredContent}
        setpostlist([postdata, ...postlist])
        onStopPosting();

        // sending postdata to backend
        fetch('http://localhost:8080/posts', {method: 'POST', body: JSON.stringify(postdata), 
            headers: {
                'Content-Type': 'application/json'
            }}
        )
    }

    return (
        <>
            { onClickedPost && !modalIsVisible && 
                (<Modal onBackdropClick={onStopPosting}>
                    <PostDetails />
                </Modal>)
            }
            { modalIsVisible && 
                (<Modal onBackdropClick={onStopPosting}>
                    <Newpost onClose={onStopPosting} onClickSubmit={formSubmitHandler} onAuthorChange={authorChangeHandler} 
                        onContentChange={contentChangeHandler} />
                </Modal>)
            }
            { postlist.length > 0 && (!isLoading) &&
                <ul className={classes.posts}>
                    {postlist.map((post)=><Post author={post.author} content={post.content} onViewPost={viewPost}/>)}
                </ul>
            }
            {isLoading && 
                <div style={{color: 'white', textAlign: 'center'}}>
                    <img src={loading} alt="Loading..." />
                </div>
            }
            { postlist.length === 0 && (!isLoading) &&
                <div style={{color: 'white', textAlign: 'center'}}>
                    <h2>No Posts Yet...</h2>
                    <p>Start Adding Yours!</p>
                </div>
            }
        </>
    )
}

export default Postlist