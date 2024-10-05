const api_url = "https://v2.jokeapi.dev/joke/Any?lang=fr";

const btn = new Qwik(
    "Faites moi rire",
    {
        id: "btn",
        events: {
            click: fetchJoke,
        }
    },
    QWIK.BUTTON,
);
const menu = new Qwik(null, { id: "menu", children: [btn] });
const jokeContainer = new Qwik(null, { id: "jokeContainer" });
const content = new Qwik(null, { id: "content", children: [menu, jokeContainer] });

const root = new QwikRoot();
root.render(content);



function countWord(sentence = "") {
    return sentence.trim().split(" ").filter(v => v.trim() !== "").length;
}


function fetchJoke() {
    const jokeContainer = new QwikRoot("jokeContainer");
    jokeContainer.renderOnly(new Qwik("En cours.."));
    fetch(api_url).then(async (v) => {
        const joke = await v.json();
        const setup = new Qwik(joke.setup);
        const delivery = new Qwik(joke.delivery);

        const waitTime = 2000 + (countWord(joke.setup) * 100);
        jokeContainer.renderOnly(setup);

        setTimeout(() => {
            jokeContainer.render(delivery);
        }, waitTime);
    });
}


