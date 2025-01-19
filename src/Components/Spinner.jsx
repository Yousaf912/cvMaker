export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: ' #506bc2',
            opacity: '0.5',
            top:0,
            bottom:0,
            left:0,
            right:0,


        }}>
            <div class="spinner-grow text-white" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-white ms-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-white ms-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

