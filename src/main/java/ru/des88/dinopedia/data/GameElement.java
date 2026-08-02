package ru.des88.dinopedia.data;

/**
 * Элементы для мини-игры «Три в ряд» (Раскопки).
 * Кость — целевой элемент, даёт бонусные очки.
 */
public final class GameElement {
    public static final String[] TYPES = { "bone", "stone", "brick", "bush" };
    public static final String[] ICONS  = { "🦴", "🪨", "🧱", "🌿" };
    public static final String[] NAMES  = { "Кость динозавра", "Камень", "Кирпич", "Куст" };

    public final String type;
    public final String icon;
    public final String name;
    public final boolean isTarget;

    private GameElement(String type, String icon, String name, boolean isTarget) {
        this.type = type;
        this.icon = icon;
        this.name = name;
        this.isTarget = isTarget;
    }

    public static GameElement random() {
        int i = (int)(Math.random() * TYPES.length);
        return of(i);
    }

    public static GameElement of(int index) {
        return new GameElement(TYPES[index], ICONS[index], NAMES[index], index == 0);
    }

    public static int count() { return TYPES.length; }
}
