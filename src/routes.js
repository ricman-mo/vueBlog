    import AppHome from '@/components/home/AppHome';
    import work from '@/components/works/wordItem';
    const routes = [{
            path: '/',
            name: 'Home',
            meta: {
                layout: "no-sidebar"
            },
            component: AppHome
        },
        {
            path: '/work',
            name: 'Work',
            meta: {
                layout: "default"
            },
            component: work
        }
    ];

    export default routes;