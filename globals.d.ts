declare module "remoteHostApp/useAuth" {
    export const useAuth: () => { token: string; setToken: (token: string) => void };
}
