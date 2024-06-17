import { useEffect, useState } from "react";
import { eventBus } from "./event-bus/EventBus";

interface AuthState {
    user: string | null;
    token: string | null;
}

const App = () => {
    const [count, setCount] = useState(0);
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        token: null,
    });

    useEffect(() => {
        eventBus.subscribe("authStateChanged", (newAuthState: AuthState) => {
            console.log("authStateChanged event received");

            setAuthState(newAuthState);
        });

        return () => {
            eventBus.unsubscribe("authStateChanged");
        };
    }, []);

    return (
        <div
            style={{
                backgroundColor: "red",
            }}
        >
            <div>Dashboard remoto</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Holaaa!</p>
            <div>{authState.token}</div>
        </div>
    );
};

export default App;
