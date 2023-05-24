const checkCertification = {
    path: '/moduleA',
    component: () => import('@/views/moduleA/Index.vue'),
    redirect: '/moduleA/pageA',
    name: 'moduleA',
    meta: {
        title: 'moduleA'
    },
    children: [
        {
            path: 'pageA',
            component: () => import('@/views/moduleA/pageA/index.vue'),
            name: 'moduleAPageA',
            meta: {
                title: 'pageA'
            }
        },
    ]

}

export default checkCertification
