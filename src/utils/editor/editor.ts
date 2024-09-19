import { EditorState, type Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "./extensions";
import { materialPalenight } from "./theme-dark";
import { basicLightTheme } from "./theme-light";

export function editorFromTextArea(
    textarea: HTMLTextAreaElement,
    facet?: Extension
) {
    let setup = basicSetup();
    if (document.body.hasClass("theme-dark")) {
        setup.push(materialPalenight);
    } else {
        setup.push(basicLightTheme);
    }
    const extensions = [...setup];
    if (facet) extensions.push(facet);
    let view = new EditorView({
        state: EditorState.create({
            doc: textarea.value,
            extensions,
        }),
    });
    textarea.parentNode!.appendChild(view.dom);
    textarea.style.display = "none";
    if (textarea.form)
        textarea.form.addEventListener("submit", () => {
            textarea.value = view.state.doc.toString();
        });
    return view;
}
