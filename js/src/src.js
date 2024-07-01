//Display feed source
function Displaysource() {
    const List = document.getElementById('src-list');
    List.innerHTML = '';

    let src_li = JSON.parse(localStorage.getItem('feed-source') || '[]');
    src_li.forEach((feed_source, i) => {
        let src_box = document.createElement('div');
        src_box.className = 'src_box';

        let url_box = document.createElement('div');
        url_box.className = 'url_box';
        let url_link = document.createElement('a');
        url_link.href = feed_source;
        url_link.textContent = feed_source;
        url_box.appendChild(url_link);

        let Btns = document.createElement('div');
        Btns.className = 'Btns';

        let editButton = document.createElement('button');
        editButton.className = 'edit_btn';
        editButton.textContent = 'Edit';
        editButton.onclick = () => edit_src(i);
        Btns.appendChild(editButton);

        let removeButton = document.createElement('button');
        removeButton.className = 'rem_btn';
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => rem_src(i);
        Btns.appendChild(removeButton);

        url_box.appendChild(Btns);
        src_box.appendChild(url_box);
        List.appendChild(src_box);
    });
}
