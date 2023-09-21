interface MediaLibAdapterConfig {
    mediaLibToggleFunc?: (index: number) => void;
}
interface MediaLibToolbox {
    title: string;
    icon: string;
}
export declare class MediaLibAdapter {
    private api;
    private config;
    static get toolbox(): MediaLibToolbox;
    constructor({ api, config }: {
        api: any;
        config?: MediaLibAdapterConfig;
    });
    render(): HTMLElement;
    save(): {
        name: string;
    };
}
export {};
