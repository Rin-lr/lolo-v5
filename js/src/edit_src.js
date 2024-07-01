//EDIT src url in storage
function edit_src(i) {
   let edit_src = JSON.parse(localStorage.getItem('feed-source'));
   const ch_url = prompt("Edit URL:", edit_src[i]);
   if (ch_url && ch_url !== edit_src[i]) {
      edit_src[i] = ch_url;
      localStorage.setItem('feed-source', JSON.stringify(edit_src));
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
}