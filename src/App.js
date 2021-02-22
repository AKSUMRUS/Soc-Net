import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '_navigations/RootNavigation';
import { Provider } from 'react-redux';
import { store } from '_store/index';
import {ThemeProvider} from "./context/ThemeStore";

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider>
                <Provider store={store}>
                    <RootNavigation />
                </Provider>
            </ThemeProvider>
        </NavigationContainer>
    );
}
