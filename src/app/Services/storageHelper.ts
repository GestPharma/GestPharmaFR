import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
abstract class Storage<T extends string> {
    private readonly storage: IStorage;

    public constructor(getStorage = (): IStorage => window.sessionStorage) {
        this.storage = getStorage();
    }
    protected get(key: T): string | null {
        return this.storage.getItem(key);
    }
    protected set(key: T, value: string): void {
        this.storage.setItem(key, value);
    }
    protected clearItem(key: T): void {
        this.storage.removeItem(key);
    }
    protected clearItems(keys: T[]): void {
        keys.forEach((key) => this.clearItem(key));
    }
}

enum Locals {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}


@Injectable({
    providedIn: 'root'
})

export default class TkStorage extends Storage<Locals> {
    private static instance?: TkStorage;
    private _ACCESS_TOKEN  : string = this.getAccessToken();

    private constructor() {
        super();
    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new TkStorage();
        }
        return this.instance;
    }
    public getAccessToken() {
        //return this.get(Locals.ACCESS_TOKEN);
        return this._ACCESS_TOKEN ?? this.get(Locals.ACCESS_TOKEN);
    }
    public setAccessToken(accessToken: string) {
        this.set(Locals.ACCESS_TOKEN, accessToken);
        this._ACCESS_TOKEN = accessToken;
    }
    public getRefreshToken() {
        return this.get(Locals.REFRESH_TOKEN);
    }
    public setRefreshToken(refreshToken: string) {
        this.set(Locals.REFRESH_TOKEN, refreshToken);
    }
    public clear() {
        this.clearItems([Locals.ACCESS_TOKEN, Locals.REFRESH_TOKEN]);
    }
}
