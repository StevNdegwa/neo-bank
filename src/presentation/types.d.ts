export interface EBFallBack {
    error: Error | null;
    retry?: ()=>void;
}

export interface PortalRoutes {
    label:string;
    url:string;
    links?:Array<PortalRoutes>;
}