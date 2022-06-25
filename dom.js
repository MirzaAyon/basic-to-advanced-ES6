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