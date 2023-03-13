import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { selectChildren, selectStatus, selectAfter, selectSubmittedSearchValue, selectLoadMoreStatus, selectChartValue, loadMoreRedditPosts } from '../../features/searchbar/searchbarSlice'
import './board.css'
import Post from '../../features/post/post'

const Board = () => {
    const dispatch = useDispatch()
    const searchResults = useSelector(selectChildren)
    const searchStatus = useSelector(selectStatus)
    const searchAfter = useSelector(selectAfter)
    const submittedSearchValue = useSelector(selectSubmittedSearchValue)
    const chartValue = useSelector(selectChartValue)
    const loadMoreStatus = useSelector(selectLoadMoreStatus)
    const board = useRef(null)

    useEffect(() => {
        board.current.scrollTo(0, 0)
    }, [submittedSearchValue, chartValue])

    const handleLoadMorePosts = () => {
        if (searchAfter) {
            if (submittedSearchValue) {
                dispatch(loadMoreRedditPosts({searchStr: submittedSearchValue, after: searchAfter}))
            } else {
                dispatch(loadMoreRedditPosts({chart: chartValue, after: searchAfter}))
            }
        }
    }

    return (
        <main id='board-container' ref={board}>
            {searchStatus === 'fulfilled' 
                ? 
                searchResults.map((post) => {
                    return <Post key={post.id} post={post} />
                })
                :
                <>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                    <div id='board-loader'></div>
                </>}
            {loadMoreStatus === 'fulfilled'
                ?
                    searchAfter && <div id='load-posts-button'><span onClick={handleLoadMorePosts}>Load More</span></div>
                :
                    <div id='more-loader-container'><span id='more-loader'></span></div>}
        </main>
    )
}

export default Board