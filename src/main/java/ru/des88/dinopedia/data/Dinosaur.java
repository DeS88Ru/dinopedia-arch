package ru.des88.dinopedia.data;

/**
 * Модель динозавра для энциклопедии.
 */
public class Dinosaur {
    public final int id;
    public final String name;
    public final String latinName;
    public final String icon;
    public final String shortInfo;
    public final String fullArticle;
    public final String funFact;
    public final String category;

    public Dinosaur(int id, String name, String latinName, String icon,
                    String shortInfo, String fullArticle, String funFact, String category) {
        this.id = id;
        this.name = name;
        this.latinName = latinName;
        this.icon = icon;
        this.shortInfo = shortInfo;
        this.fullArticle = fullArticle;
        this.funFact = funFact;
        this.category = category;
    }
}
