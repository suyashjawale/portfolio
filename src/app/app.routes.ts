import { Routes } from '@angular/router';

export function getRoutes(): Routes {
    // if (window.innerWidth > 768) {
    //     return [
    //         {
    //             path: '',
    //             loadComponent: () => import('./components/large/large/large.component').then(mod => mod.LargeComponent),
    //             children:[
    //                 {
    //                     path:'',
    //                     loadComponent: () => import('./components/large/homepage-l/homepage-l.component').then(mod => mod.HomepageLComponent),
    //                 },
    //                 {
    //                     path:'blog',
    //                     loadComponent: () => import('./components/large/blog-l/blog-l.component').then(mod => mod.BlogLComponent),
    //                 },
    //                 {
    //                     path:'collection',
    //                     loadComponent: () => import('./components/large/collection-l/collection-l.component').then(mod => mod.CollectionLComponent),
    //                 },
    //                 {
    //                     path:'projects',
    //                     loadComponent: () => import('./components/large/projects-l/projects-l.component').then(mod => mod.ProjectsLComponent),
    //                 },
    //                 {
    //                     path:'snippets',
    //                     loadComponent: () => import('./components/large/snippets-l/snippets-l.component').then(mod => mod.SnippetsLComponent),
    //                 },
    //                 {
    //                     path:'posts',
    //                     loadComponent: () => import('./components/large/posts-l/posts-l.component').then(mod => mod.PostsLComponent),
    //                 },
    //                 {
    //                     path:'playlist',
    //                     loadComponent: () => import('./components/large/playlist-l/playlist-l.component').then(mod => mod.PlaylistLComponent),
    //                 },
    //             ]
    //         }
    //     ]
    // }

    return [
        {
            path: '',
            loadComponent: () => import('./components/small/s-landing/s-landing').then(mod => mod.SLanding),
            children:[
                {
                    path:'',
                    loadComponent: () => import('./components/small/s-home/s-home').then(mod => mod.SHome),
                },
                {
                    path:'blog',
                    loadComponent: () => import('./components/small/s-blog/s-blog').then(mod => mod.SBlog),
                },
                {
                    path:'collection',
                    loadComponent: () => import('./components/small/s-collection/s-collection').then(mod => mod.SCollection),
                },
                {
                    path:'projects',
                    loadComponent: () => import('./components/small/s-projects/s-projects').then(mod => mod.SProjects),
                },
                {
                    path:'snippets',
                    loadComponent: () => import('./components/small/s-snippets/s-snippets').then(mod => mod.SSnippets),
                },
                {
                    path:'posts',
                    loadComponent: () => import('./components/small/s-posts/s-posts').then(mod => mod.SPosts),
                },
                {
                    path:'playlist',
                    loadComponent: () => import('./components/small/s-playlist/s-playlist').then(mod => mod.SPlaylist),
                },
                {
                    path:'search',
                    loadComponent: () => import('./components/small/s-search/s-search').then(mod => mod.SSearch),
                }
            ]
        }
    ]

}
