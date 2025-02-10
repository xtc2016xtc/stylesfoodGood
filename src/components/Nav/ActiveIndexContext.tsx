import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveIndexContextProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const ActiveIndexContext = createContext<ActiveIndexContextProps | undefined>(undefined);

interface ActiveIndexProviderProps {
    children: ReactNode;
}

export const ActiveIndexProvider: React.FC<ActiveIndexProviderProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <ActiveIndexContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </ActiveIndexContext.Provider>
    );
};

/*
* ESLint: Fast refresh only works when a file only exports components.
* Use a new file to share constants or functions between components.
* (react-refresh/ only-export-components)
* */
// eslint-disable-next-line react-refresh/only-export-components
export const useActiveIndex = (): ActiveIndexContextProps => {
    const context = useContext(ActiveIndexContext);
    if (!context) {
        throw new Error('useActiveIndex must be used within an ActiveIndexProvider');
    }
    return context;
};