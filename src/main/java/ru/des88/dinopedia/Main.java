package ru.des88.dinopedia;

import ru.des88.dinopedia.core.GameStorage;

/**
 * Точка входа TeaVM-приложения.
 * TeaVM компилирует этот класс в JavaScript, который запускается в браузере.
 */
public final class Main {
    private Main() {}

    public static void main(String[] args) {
        GameStorage.loadSaved();
        new Game().start();
    }
}
