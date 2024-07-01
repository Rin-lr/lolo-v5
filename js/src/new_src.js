const new_a_src = document.getElementById('article-url').value;

//Add new src if it is not in the storage
document.getElementById('parse-button').addEventListener('click', function() {
    
    let save_src = (localStorage.getItem('feed-source'));
    if (new_a_src && !JSON.parse(save_src || '[]').includes(new_a_src)) {
        let new_src = JSON.parse(save_src || '[]');
        new_src.push(new_a_src);
        localStorage.setItem('feed-source', JSON.stringify(new_src));
        Displaysource();
        

        //stop fetching if src is somehow changed... (later fix)
        if (isProcessing  == true) {
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
});
