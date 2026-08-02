package ru.des88.dinopedia.core;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.MouseEvent;

/**
 * Вспомогательные методы для работы с DOM через TeaVM JSO.
 */
public final class UIHelper {
    private static final HTMLDocument doc = Window.current().getDocument();

    private UIHelper() {}

    public static HTMLElement byId(String id) {
        return doc.getElementById(id);
    }

    public static HTMLElement create(String tag) {
        return doc.createElement(tag);
    }

    public static HTMLInputElement createInput(String type, String placeholder) {
        HTMLInputElement input = (HTMLInputElement) doc.createElement("input");
        input.setType(type);
        input.setPlaceholder(placeholder);
        return input;
    }

    public static HTMLElement createButton(String text, Runnable action) {
        HTMLElement btn = doc.createElement("button");
        btn.withText(text);
        btn.onClick(mouseEvent -> action.run());
        return btn;
    }

    public static void setText(String id, String text) {
        HTMLElement el = byId(id);
        if (el != null) el.withText(text);
    }

    public static void setHTML(String id, String html) {
        HTMLElement el = byId(id);
        if (el != null) el.setInnerHTML(html);
    }

    public static void clear(String id) {
        HTMLElement el = byId(id);
        if (el != null) el.clear();
    }

    public static void showScreen(String screenId) {
        // Hide all screens
        HTMLElement app = byId("app");
        if (app != null) {
            for (int i = 0; i < app.getChildren().getLength(); i++) {
                HTMLElement child = app.getChildren().get(i).cast();
                child.getClassList().remove("active");
            }
        }
        // Show target
        HTMLElement target = byId(screenId);
        if (target != null) target.getClassList().add("active");
    }

    public static String getInputValue(String id) {
        HTMLInputElement input = (HTMLInputElement) byId(id);
        return input != null ? input.getValue() : "";
    }

    /** Call JS alert() */
    public static void alert(String message) {
        Window.alert(message);
    }

    /** Call JS confirm() */
    public static boolean confirm(String message) {
        return Window.confirm(message);
    }

    /** Inject a CSS class onto an element */
    public static void addClass(String id, String cls) {
        HTMLElement el = byId(id);
        if (el != null) el.getClassList().add(cls);
    }

    public static void removeClass(String id, String cls) {
        HTMLElement el = byId(id);
        if (el != null) el.getClassList().remove(cls);
    }

    /** Set CSS style property via inline style */
    @JSBody(params = {"el", "prop", "value"}, script = "el.style[prop] = value;")
    public static native void setStyle(JSObject el, String prop, String value);

    /** Get window inner width */
    public static int windowWidth() {
        return Window.current().getInnerWidth();
    }

    /** Get window inner height */
    public static int windowHeight() {
        return Window.current().getInnerHeight();
    }
}
