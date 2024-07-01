//Delete src from local storage
function rem_src(i) {
    let rem_src = JSON.parse(localStorage.getItem('feed-source'));
    rem_src.splice(i, 1);
    localStorage.setItem('feed-source', JSON.stringify(rem_src));
    Displaysource();
    if (isProcessing == true) {
        isProcessing = false;
        feed.innerHTML = '';
        isProcessing = true;
        processFeedUrls();
    } else {
        feed.innerHTML = '';
        isProcessing = true;
        processFeedUrls();
    }
}