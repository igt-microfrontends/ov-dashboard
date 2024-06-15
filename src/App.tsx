import { useState } from "react";

import { useAuth } from "remoteHostApp/useAuth";

export const App = () => {
    const [count, setCount] = useState(0);
    const { token, setToken } = useAuth();
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
            <div>{token}</div>
            <button onClick={() => setToken("token remote")}>Setar token</button>
        </div>
    );
};
