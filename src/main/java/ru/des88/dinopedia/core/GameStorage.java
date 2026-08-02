package ru.des88.dinopedia.core;

import org.teavm.jso.browser.Storage;
import org.teavm.jso.core.JSString;
import org.teavm.jso.JSObject;
import ru.des88.dinopedia.data.Dinosaurs;

/**
 * Сохранение прогресса игры через localStorage (TeaVM Storage API).
 * Хранит пользователей, коллекции динозавров, настройки.
 */
public final class GameStorage {
    private static final String KEY = "dinopedia_arch_save";
    private static final Storage ls = Storage.getLocalStorage();

    private GameStorage() {}

    // === JSON building / parsing (manual, no external libs) ===

    public static class Profile {
        public String email;
        public String name;
        public int level = 1;
        public int totalScore = 0;
        public int gamesPlayed = 0;
        public int gamesWon = 0;
        public int unlockedLevels = 1;
        public boolean isDemo = false;
        public int[] collection = new int[Dinosaurs.count()];
        public boolean sound = true;
        public boolean music = true;
        public boolean hints = true;
    }

    private static Profile current = null;

    public static Profile current() { return current; }

    // === Save / Load ===

    public static void loadSaved() {
        String json = ls.getItem(KEY);
        if (json != null && !json.isEmpty()) {
            String email = extract(json, "currentEmail");
            if (email != null) {
                loadUser(email);
            }
        }
    }

    public static boolean register(String email, String password) {
        String userJson = ls.getItem("user_" + email);
        if (userJson != null) return false; // already exists
        Profile p = new Profile();
        p.email = email;
        p.name = email.split("@")[0];
        ls.setItem("user_" + email, password);
        saveProfile(p);
        current = p;
        saveCurrentEmail(email);
        return true;
    }

    public static boolean login(String email, String password) {
        String stored = ls.getItem("user_" + email);
        if (stored == null || !stored.equals(password)) return false;
        current = loadProfile(email);
        if (current == null) {
            current = new Profile();
            current.email = email;
            current.name = email.split("@")[0];
        }
        saveCurrentEmail(email);
        return true;
    }

    public static void enableDemo() {
        current = new Profile();
        current.email = "demo";
        current.name = "Демо-игрок";
        current.isDemo = true;
        saveCurrentEmail("demo");
    }

    public static void logout() {
        current = null;
        saveCurrentEmail("");
    }

    public static boolean isLoggedIn() {
        return current != null;
    }

    public static void save() {
        if (current != null) {
            saveProfile(current);
        }
    }

    public static void unlockLevel(int level) {
        if (current != null && level > current.unlockedLevels) {
            current.unlockedLevels = level;
            save();
        }
    }

    public static int addDinosaur(int dinoId) {
        if (current == null) return 0;
        current.collection[dinoId - 1]++;
        save();
        return current.collection[dinoId - 1];
    }

    public static int getStars(int dinoId) {
        if (current == null) return 0;
        int count = current.collection[dinoId - 1];
        if (count >= 25) return 3;
        if (count >= 10) return 2;
        if (count >= 1) return 1;
        return 0;
    }

    public static int getDinoCount(int dinoId) {
        if (current == null) return 0;
        return current.collection[dinoId - 1];
    }

    // === Internal profile serialization (simple JSON) ===

    private static void saveCurrentEmail(String email) {
        ls.setItem(KEY, "{\"currentEmail\":\"" + email + "\"}");
    }

    private static void loadUser(String email) {
        if (email == null || email.isEmpty()) return;
        current = loadProfile(email);
    }

    private static void saveProfile(Profile p) {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append("\"email\":\"").append(escape(p.email)).append("\"");
        sb.append(",\"name\":\"").append(escape(p.name)).append("\"");
        sb.append(",\"level\":").append(p.level);
        sb.append(",\"totalScore\":").append(p.totalScore);
        sb.append(",\"gamesPlayed\":").append(p.gamesPlayed);
        sb.append(",\"gamesWon\":").append(p.gamesWon);
        sb.append(",\"unlockedLevels\":").append(p.unlockedLevels);
        sb.append(",\"isDemo\":").append(p.isDemo);
        sb.append(",\"sound\":").append(p.sound);
        sb.append(",\"music\":").append(p.music);
        sb.append(",\"hints\":").append(p.hints);
        sb.append(",\"collection\":[");
        for (int i = 0; i < p.collection.length; i++) {
            if (i > 0) sb.append(",");
            sb.append(p.collection[i]);
        }
        sb.append("]}");
        ls.setItem("profile_" + p.email, sb.toString());
    }

    private static Profile loadProfile(String email) {
        String json = ls.getItem("profile_" + email);
        if (json == null || json.isEmpty()) return null;
        Profile p = new Profile();
        p.email = email;
        p.name = extract(json, "name");
        if (p.name == null) p.name = email.split("@")[0];
        p.level = extractInt(json, "level", 1);
        p.totalScore = extractInt(json, "totalScore", 0);
        p.gamesPlayed = extractInt(json, "gamesPlayed", 0);
        p.gamesWon = extractInt(json, "gamesWon", 0);
        p.unlockedLevels = extractInt(json, "unlockedLevels", 1);
        p.isDemo = extractBool(json, "isDemo");
        p.sound = extractBoolDef(json, "sound", true);
        p.music = extractBoolDef(json, "music", true);
        p.hints = extractBoolDef(json, "hints", true);
        // Parse collection array
        int[] col = extractArray(json, "collection");
        if (col != null) {
            for (int i = 0; i < Math.min(col.length, p.collection.length); i++) {
                p.collection[i] = col[i];
            }
        }
        return p;
    }

    // === Simple JSON value extractors ===

    private static String extract(String json, String key) {
        String marker = "\"" + key + "\":\"";
        int start = json.indexOf(marker);
        if (start < 0) return null;
        start += marker.length();
        int end = json.indexOf("\"", start);
        if (end < 0) return null;
        return unescape(json.substring(start, end));
    }

    private static int extractInt(String json, String key, int def) {
        String marker = "\"" + key + "\":";
        int start = json.indexOf(marker);
        if (start < 0) return def;
        start += marker.length();
        int end = start;
        while (end < json.length() && (Character.isDigit(json.charAt(end)) || json.charAt(end) == '-')) end++;
        try { return Integer.parseInt(json.substring(start, end)); }
        catch (Exception e) { return def; }
    }

    private static boolean extractBool(String json, String key) {
        String marker = "\"" + key + "\":";
        int start = json.indexOf(marker);
        if (start < 0) return false;
        start += marker.length();
        return json.substring(start).startsWith("true");
    }

    private static boolean extractBoolDef(String json, String key, boolean def) {
        String marker = "\"" + key + "\":";
        int start = json.indexOf(marker);
        if (start < 0) return def;
        start += marker.length();
        if (json.substring(start).startsWith("true")) return true;
        if (json.substring(start).startsWith("false")) return false;
        return def;
    }

    private static int[] extractArray(String json, String key) {
        String marker = "\"" + key + "\":[";
        int start = json.indexOf(marker);
        if (start < 0) return null;
        start += marker.length();
        int end = json.indexOf("]", start);
        if (end < 0) return null;
        String[] parts = json.substring(start, end).split(",");
        int[] arr = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            try { arr[i] = Integer.parseInt(parts[i].trim()); }
            catch (Exception e) { arr[i] = 0; }
        }
        return arr;
    }

    private static String escape(String s) {
        return s.replace("\\", "\\\\").replace("\"", "\\\"");
    }

    private static String unescape(String s) {
        return s.replace("\\\"", "\"").replace("\\\\", "\\");
    }
}
