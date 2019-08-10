import ContentEntries from '@/components/markdowns/content.json';
import homePage from '@/views/index';

const contentRoutes = Object.keys(ContentEntries).map(section => {
    const children = ContentEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        meta: {
            layout: "default"
        },
        component: () =>
            import (`@/components/markdowns/${section}/${child.id}.md`)
    }))
    return {
        path: `/article/${section}`,
        name: section,
        component: () =>
            import ('@/views/Content.vue'),
        children: [
            { path: '', component: homePage },
            ...children
        ]
    }
})

export default contentRoutes;