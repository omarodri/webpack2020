import "../css/index.css";
import search from "./search";
import render from "./render";

const id = prompt("Quien es ese pockemon");

search(id)
    .then((data) => {
        render(data);
    })
    .catch(() => {
        console.log("no se encontrô pokemon");
    });
