document.getElementById("expForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let exp = document.getElementById("experience").value;
    let photoInput = document.getElementById("photo");

    let postBox = document.createElement("div");
    postBox.classList.add("post-box");

    let imgTag = "";

    if (photoInput.files && photoInput.files[0]) {
        let imgURL = URL.createObjectURL(photoInput.files[0]);
        imgTag = `<img src="${imgURL}" class="post-img">`;
    }

    postBox.innerHTML = `
        ${imgTag}
        <h3>${name}</h3>
        <p>${exp}</p>
    `;

    document.getElementById("postContainer").prepend(postBox);

    document.getElementById("expForm").reset();
});
