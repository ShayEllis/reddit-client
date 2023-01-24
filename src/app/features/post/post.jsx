import './post.css'
import chatIcon from '../../../assets/comment-icon-512px.png'
import shareIcon from '../../../assets/share-icon-512px.png'
import saveIcon from '../../../assets/save-icon-512px.png'
import voteArrow from '../../../assets/up-down-arrow-512px.png'

const Post = () => {
    return (
        <article className='post-container'> {/* Generate with Reddit API */}
            <div id='post-header'>
                <div id='vote-container'>
                    <a className='up-arrow' >
                        <img  src={voteArrow} alt='up vote arrow' />
                    </a>
                    <span>{53}</span>    {/* replace with number from Reddit API */}
                    <a className='down-arrow' >
                        <img src={voteArrow} alt='down vote arrow' />
                    </a >
                </div>
            </div>
            <div id='post-content'>

            </div>
            <menu id='post-footer'>
                <li className='footer-link'>
                    <a>
                        <img src={chatIcon} alt='comment icon' />
                        <span>{156} Comments</span> {/* Add current number of comments */}
                    </a>
                </li>
                <li className='footer-link'>
                    <a>
                        <img src={shareIcon} alt='share icon' />
                        <span>Share</span>
                    </a>
                </li>
                <li className='footer-link'>
                    <a>
                        <img src={saveIcon} alt='saveIcon' />
                        <span>Save</span>
                    </a>
                </li>
            </menu>
        </article>
    )
}

export default Post