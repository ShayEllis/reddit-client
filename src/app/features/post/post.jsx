import './post.css'

const Post = () => {
    return (
        <article className='post-container'> {/* Generate with Reddit API */}
            <div id='post-header'>
                <div id='vote-container'>

                </div>
            </div>
            <div id='post-content'>

            </div>
            <div id='post-footer'>

            </div>
        </article>
    )
}

export default Post