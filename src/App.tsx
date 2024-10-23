import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
    Admin,
    CustomRoutes,
    Resource,
    localStorageStore,
    useStore,
    StoreContextProvider,
    ThemesContext,
    ThemeProvider
} from 'react-admin';
// import { Route } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import authProvider from './authProvider';
import categories from './categories';
import { Home } from './home';
import { Dashboard } from './dashboard';
import dataProviderFactory from './dataProvider';
import englishMessages from './i18n/en';
import invoices from './invoices';
import { Layout, Login } from './layout';
import orders from './orders';
import products from './products';
import reviews from './reviews';
import Segments from './segments/Segments';
import visitors from './visitors';
import { themes, ThemeName } from './themes/themes';

const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }

        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);

const store = localStorageStore(undefined, 'ECommerce');

const App = () => {
    const [themeName] = useStore<ThemeName>('themeName', 'radiant');
    const lightTheme = themes.find(theme => theme.name === themeName)?.light;
    const darkTheme = themes.find(theme => theme.name === themeName)?.dark;

    return (
        <ThemesContext.Provider value={{ lightTheme, darkTheme }}>
        <ThemeProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={
                <Admin
                    title=""
                    dataProvider={dataProviderFactory(
                        process.env.REACT_APP_DATA_PROVIDER || ''
                    )}
                    store={store}
                    authProvider={authProvider}
                    dashboard={Dashboard}
                    loginPage={Login}
                    layout={Layout}
                    i18nProvider={i18nProvider}
                    disableTelemetry
                    lightTheme={lightTheme}
                    darkTheme={darkTheme}
                    defaultTheme="light"
                >
                    <CustomRoutes>

                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/segments" element={<Segments />} />
                    </CustomRoutes>
                    <Resource name="customers" {...visitors} />
                    <Resource name="orders" {...orders} />
                    <Resource name="invoices" {...invoices} />
                    <Resource name="products" {...products} />
                    <Resource name="categories" {...categories} />
                    <Resource name="reviews" {...reviews} />
                </Admin>
                } />
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
        </ThemesContext.Provider>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
