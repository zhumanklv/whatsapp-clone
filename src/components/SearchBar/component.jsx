import './SearchBar.css';

export const SearchBar = () => {
    return <div className='search-bar'>
        <div className='search-bar-inner'>
            <div className='search-bar-inner__elem'>
                <div className='search-icon'>
                    <svg viewBox="0 0 24 24" width="24" height="24" className="search-icon-svg">
                        <path fill="currentColor"
                              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                    </svg>
                </div>
                <div className='search-bar-input-container'>
                    <input
                        className='search-bar-input'
                        placeholder='Search or new chat'
                    />
                </div>
                <div className='search-bar-close'>
                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M17.25 7.8 16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}