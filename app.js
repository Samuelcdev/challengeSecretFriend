let friends = [];

function addFriend() {
    let friend = document.getElementById("friend").value.trim();

    // Validación: campo vacío
    if (friend === "") {
        alert(
            "No se puede registrar un nombre vacio. Por favor inserte un nombre valido."
        );
        return;
    }

    if (friends.includes(friend)) {
        alert("Ese nombre ya se encuentra en la lista");
        cleanBox();
        return;
    }

    friends.push(friend);

    showList();

    cleanBox();
}

function cleanBox() {
    document.querySelector("#friend").value = "";
}

function showList() {
    let list = document.getElementById("friendsList");
    list.innerHTML = "";

    friends.forEach(function (name) {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}

function raffleFriend() {
    if (friends.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let aleatoryIndex = Math.floor(Math.random() * friends.length);

    let raffledFriend = friends[aleatoryIndex];

    let result = document.getElementById("result");
    result.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${raffledFriend}</strong></li>`;
}
