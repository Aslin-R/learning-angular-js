import {Blog} from './bloghub';

export let blogs:Blog[]= [ 
   // blog about angular
    new Blog(1,"Angular","Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.","Angular"),
    // blog about react
    new Blog(2,"React","React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.","React"),
    // blog about vue
    new Blog(3,"Vue","Vue.js - The Progressive JavaScript Framework. Versatile. An incrementally adoptable ecosystem that scales between a library and a full-featured framework.","Vue"),
    // blog about node
    new Blog(4,"Node","Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.","Node"), 
]