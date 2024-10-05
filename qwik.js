
const QWIK = {
    A: "a",
    ABBR: "abbr",
    ADDRESS: "address",
    AREA: "area",
    ARTICLE: "article",
    ASIDE: "aside",
    AUDIO: "audio",
    B: "b",
    BASE: "base",
    BDI: "bdi",
    BDO: "bdo",
    BLOCKQUOTE: "blockquote",
    BODY: "body",
    BR: "br",
    BUTTON: "button",
    CANVAS: "canvas",
    CAPTION: "caption",
    CITE: "cite",
    CODE: "code",
    COL: "col",
    COLGROUP: "colgroup",
    DATA: "data",
    DATALIST: "datalist",
    DD: "dd",
    DEL: "del",
    DETAILS: "details",
    DFN: "dfn",
    DIALOG: "dialog",
    DIV: "div",
    DL: "dl",
    DT: "dt",
    EM: "em",
    EMBED: "embed",
    FIELDSET: "fieldset",
    FIGCAPTION: "figcaption",
    FIGURE: "figure",
    FOOTER: "footer",
    FORM: "form",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    HEAD: "head",
    HEADER: "header",
    HR: "hr",
    HTML: "html",
    I: "i",
    IFRAME: "iframe",
    IMG: "img",
    INPUT: "input",
    INS: "ins",
    KBD: "kbd",
    LABEL: "label",
    LEGEND: "legend",
    LI: "li",
    LINK: "link",
    MAIN: "main",
    MAP: "map",
    MARK: "mark",
    MATH: "math",
    MENU: "menu",
    MENUITEM: "menuitem",
    META: "meta",
    METER: "meter",
    NAV: "nav",
    NOSCRIPT: "noscript",
    OBJECT: "object",
    OL: "ol",
    OPTGROUP: "optgroup",
    OPTION: "option",
    OUTPUT: "output",
    P: "p",
    PARAM: "param",
    PICTURE: "picture",
    PRE: "pre",
    PROGRESS: "progress",
    Q: "q",
    RP: "rp",
    RT: "rt",
    RUBY: "ruby",
    S: "s",
    SAMP: "samp",
    SCRIPT: "script",
    SECTION: "section",
    SELECT: "select",
    SLOT: "slot",
    SMALL: "small",
    SOURCE: "source",
    SPAN: "span",
    STRONG: "strong",
    STYLE: "style",
    SUB: "sub",
    SUMMARY: "summary",
    SUP: "sup",
    SVG: "svg",
    TABLE: "table",
    TBODY: "tbody",
    TD: "td",
    TEMPLATE: "template",
    TEXTAREA: "textarea",
    TFOOT: "tfoot",
    TH: "th",
    THEAD: "thead",
    TIME: "time",
    TITLE: "title",
    TR: "tr",
    TRACK: "track",
    U: "u",
    UL: "ul",
    VAR: "var",
    VIDEO: "video",
    WBR: "wbr"
}

function Qwik(
    text,
    config = {
        id: '',
        cl: "",
        attr: {},
        children: [],
        events: {
            click: null,
            keypress: null,
            keydown: null,
            keyup: null,
            mouseover: null,
            mouseout: null,
            mousemove: null,
            mousedown: null,
            mouseup: null,
            touchstart: null,
            touchend: null,
            touchmove: null,
            focus: null,
            blur: null,
            input: null,
            change: null,
            submit: null,
            scroll: null,
            resize: null,
        }
    },
    type = QWIK.DIV,
) {
    const { id, cl, attr, events, children } = config;

    const el = document.createElement(type);

    if (cl)
        el.className = cl;

    if (id)
        el.id = id;

    if (text)
        el.textContent = text;

    if (attr)
        for (let a in attr) {
            el.setAttribute(a, attr[a]);
        }
    if (children)
        for (let child of children) {
            el.appendChild(child);
        }

    if (events)
        for (let event in events) {
            if (events[event])
                el.addEventListener(event, events[event]);
        }



    return el;

}


class QwikRoot {
    constructor(id) {
        this.id = id;
    }

    render(d) {
        const id = this.id;
       
        if (!d) return console.error("[QWIK]", "Nothing to render on root '", id, "'.");

        if (!id) return document.body.appendChild(d);


        const rootDiv = document.getElementById(id);

        if (!rootDiv) return console.error("[QWIK]", "Can not found root '", id, "'.")


        rootDiv.appendChild(d);
    }

    clear() {
        const id = this.id;
        if (!id) return;

        const rootDiv = document.getElementById(id);

        if (!rootDiv) return console.error("[QWIK]", "Can not found root '", id, "'.")

         rootDiv.innerHTML = "";
    }

    renderOnly(d) {
        this.clear();
        this.render(d);
    }
}
