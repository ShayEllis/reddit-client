import './board.css'

const Board = () => {
    return (
        <main id='board-container'>
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
            <article className='post-container'>2</article>
            <article className='post-container'>3</article> 
            <article className='post-container'>4</article>
            <article className='post-container'>5</article>
            <article className='post-container'>6</article>
        </main>
    )
}

export default Board