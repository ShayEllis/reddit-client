import './post.css'
import lightChatIcon from '../../../assets/post/comment-icon-512px-black.png'
import lightShareIcon from '../../../assets/post/share-icon-512px-black.png'
import lightSaveIcon from '../../../assets/post/save-icon-512px-black.png'


const Post = () => {
    return (
        <article className='post-container'> {/* Generate with Reddit API */}
            <div id='post-header'>
                <div id='vote-container'>
                    <a className='up-arrow' >
                        <img alt='up vote arrow' />
                    </a>
                    <span>{53}</span>    {/* replace with number from Reddit API */}
                    <a className='down-arrow' >
                        <img alt='down vote arrow' />
                    </a >
                </div>
            </div>
            <div id='post-content'>

            </div>
            <menu id='post-footer'>
                <li className='footer-link comment-button-container'>
                    <a>
                        <img alt='comment icon' />
                        <span>{156} Comments</span> {/* Add current number of comments */}
                    </a>
                </li>
                <li className='footer-link share-button-container'>
                    <a>
                        <img alt='share icon' />
                        <span>Share</span>
                    </a>
                </li>
                <li className='footer-link save-button-container'>
                    <a>
                        <img alt='saveIcon' />
                        <span>Save</span>
                    </a>
                </li>
            </menu>
        </article>
    )
}

export default Post