# Next13 new features

## App directory

Previously to Next 13 to create a homepage you created a file named 'index.tsx'. With the new Next directory we do the same thing but instead call the file 'page.tsx'.

Previously to create a route we could create a file by the name of the path we want to create. eg. 'about.tsx' creates a path '/about'. With Next 13 this does not work and instead we have to create a directory and place a file 'page.tsx' within that. eg. 'about/page.tsx' creates the path '/about'.

We can also create a layout within a routes directory. The default export from 'layout.tsx' will automatically be passed the page as the children prop. If you have a 'layout.tsx' file directly within the app directory then this will be a default layout for all pages. To override this layout you simply add a 'layout.tsx' to the directory for the specific page. If there are nested routes within the directory you have created a layout for then they will also adopt this layout.

You can also create error pages in the same way as layout. To create a custom 404 page you simply do so within a file named 'not-found.tsx'. Again if you wish to override this custom 404 page you do so the same way as you would for layout. There are other special files such as loading.tsx that work in a similar way.

In order to create a dynamic route, very similar to how the pages directory works, you have to create a directory with the name in square brackets. eg. 'products/[id]/page.tsx' will create a page at the path 'products/42' (where 42 could be any string, and will get passed as a property of the param object, which is automatically passed to the page component).

You can also create directories with parenthesis around the name which have no effect on the path. This is useful for structuring the app directory in a readable way, and also because some things you want to create within the app directory but don't want to potentially create a page/route/path. This is true for Server components which you can read about below.

## Server components

Previous to Next 13 all components were client components, meaning that all components were sent to the client with additional js in order for them to be hydrated.
Next 13 introduces Server components which bundles far less js with those components, in turn making them run faster and more efficiently.
Client components are still needed for anything that handles state, effects, routing, etc.
Server components are also better for handling sensitive information because it's hidden away on the server.
Server components can also be async functions, meaning that fetching data within them is far easier.

Crucially this does mean, no more emotion styled components (for now). These components get rendered on the client, so if you're using a server component they will not work. If you want a Next 13 project with emotion styled components in, you will have to use the pages directory.

Server components are the default within the app directory, meaning if you want to make efficient components the component directory should be inside the app directory (My least favourite part of Next 13). If you wish to define a client component within this directory then you need to add the pragma 'use client' at the top of the file you are defining the component within.

If you wish to nest a server component inside a client component, you can! But there are some limitations. If you simply import a server component to a client component like you would previous to Next 13, then that server component will default to a client component. Instead you can pass in the server component as either children or as a prop to the client component and that way it will still get built on the server.

more reading:
<https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns>

## Suspense boundaries

We can now use suspense boundaries to render a page on the client while still fetching data on the server, allowing for only the components that need that data to show a loading state.

To create a suspense boundary simply import the Suspense component from react and wrap any components which use fetch. Then pass the component you want to render instead of the component which is loading to the fallback prop in the Suspense component.

## Other new bits

- New Image component
- New Link component
- New font system for bringing in and optimising any custom fonts
- Server actions (functions that run on the server but that can be called directly in components)
- new api route handlers
