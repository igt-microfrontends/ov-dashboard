import { useEffect } from "react";
import { eventBus } from "./event-bus/EventBus";
import "chart.js/auto";

import { Line } from "react-chartjs-2";

const App = () => {
    useEffect(() => {
        return () => {
            eventBus.unsubscribe("authStateChanged");
        };
    }, []);

    const DATA_COUNT = 7;

    const labels = Array.from({ length: DATA_COUNT }, (_, i) => i);
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: "Dataset 2",
                data: [28, 48, 40, 19, 86, 27, 90],
            },
        ],
    };

    return <Line data={data} />;
};

export default App;
