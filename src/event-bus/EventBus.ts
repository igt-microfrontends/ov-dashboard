type CallbackFunction<T> = (data: T) => void;

interface Eventpos_listeners {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: CallbackFunction<any>[];
}

declare global {
    interface Window {
        pos_listeners: Eventpos_listeners;
    }
}

class EventBus {
    private pos_listeners: Eventpos_listeners = window.pos_listeners ?? {};

    public subscribe<T>(eventType: string, callback: CallbackFunction<T>): () => void {
        if (!this.pos_listeners[eventType]) {
            this.pos_listeners[eventType] = [];
        }

        this.pos_listeners[eventType].push(callback);

        // Return an unsubscribe function
        return () => {
            this.pos_listeners[eventType] = this.pos_listeners[eventType].filter((cb) => cb !== callback);
        };
    }

    public publish<T>(eventType: string, data: T): void {
        console.log(`EventBus: Publishing event: ${eventType}`);

        if (this.pos_listeners[eventType]) {
            this.pos_listeners[eventType].forEach((callback) => {
                callback(data);
            });
        }
    }

    public unsubscribe(eventType: string): void {
        delete this.pos_listeners[eventType];
    }
}

export const eventBus = new EventBus();
