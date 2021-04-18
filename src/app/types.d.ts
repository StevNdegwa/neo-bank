export interface EBFallBack {
    error: Error | null;
    retry?: ()=>void;
}