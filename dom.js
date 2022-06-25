//eta event listener diye korlam
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
});

//porer ta onclick diye krbo

// const friends = document.getElementsByClassName('friend');
//     for (const friend of friends) {
//         friend.style.backgroundColor = 'lightblue';
//     }

//ei kaj ta direct korle click kora por kaj na kore emni emni manually kaj korbe tai eke akta function er mdhe rakhbo

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}


//add friend
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Quam, sapiente.</p>
    `;
    container.appendChild(friendDiv);
})