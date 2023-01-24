import './post.css'
import chatIcon from '../../../assets/chat-icon-64px.png'

const Post = () => {
    return (
        <article className='post-container'> {/* Generate with Reddit API */}
            <div id='post-header'>
                <div id='vote-container'>

                </div>
            </div>
            <div id='post-content'>

            </div>
            <menu id='post-footer'>
                <li className='footer-link'>
                    <a>
                        <img src={chatIcon} alt='comment icon' />
                        <span>{'Num'} Comments</span> {/* Add current number of comments */}
                    </a>
                </li>
                <li className='footer-link'>
                    <a>
                        <img />
                        <span>Share</span>
                    </a>
                </li>
                <li className='footer-link'>
                    <a>
                        <img />
                        <span>Save</span>
                    </a>
                </li>
            </menu>
        </article>
    )
}

export default Post