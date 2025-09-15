import './bootstrap';
import './../css/app.css';
import './../css/style.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import AdminLayout from './Layouts/AdminLayout';
import MyAccountLayout from './Layouts/MyAccountLayout';
import MainLayout from './Layouts/MainLayout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        const resolved = pages[`./Pages/${name}.jsx`];

        if (!resolved) {
            throw new Error(`Page not found: ./Pages/${name}.jsx`);
        }
        const Page = resolved.default;

        if (!Page.layout && name.startsWith('Admin/')) {
            Page.layout = page => <AdminLayout>{page}</AdminLayout>;
        }
        if (!Page.layout && name.startsWith('MyAccount/')) {
            Page.layout = page => <MyAccountLayout>{page}</MyAccountLayout>;
        }
        if (!Page.layout && name.startsWith('Site/')) {
            Page.layout = page => <MainLayout>{page}</MainLayout>;
        }

        return Page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});