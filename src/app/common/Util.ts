
export class Util {

    public static key() {
        var key = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            key += possible.charAt(Math.floor(Math.random() * possible.length));

        return key;
    }
}