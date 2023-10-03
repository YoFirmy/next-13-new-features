# Next13 new features

## App directory

Previously to Next 13 to create a homepage you created a file named 'index.tsx'. With the new Next directory we do the same thing but instead call the file 'page.tsx'.

Previously to create a route we could create a file by the name of the path we want to create. eg. 'about.tsx' creates a path '/about'. With Next 13 this does not work and instead we have to create a directory and place a file 'page.tsx within that. eg. 'about/page.tsx' creates the path '/about'.

## Server components

Previous to Next 13 all components were client components, meaning that all components were sent to the client with additional js in order for them to be hydrated.
Next 13 introduces Server components which bundles far less js with those components, in turn making them run faster and more efficiently.
Client components are still needed for anything that handles state, effects, routing, etc.
Server components are also better for handling sensitive information because it's hidden away on the server.
Server components can also be async functions, meaning that fetching data within them is far easier.

Crucially this does mean, no more emotion styled components (for now). These components get rendered on the client, so if you're using a server component they will not work. If you want a Next 13 project with emotion styled components in, you will have to use the pages directory.

Server components are the default within the app directory, meaning if you want to make efficient components the component directory should be inside the app directory (My least favourite part of Next 13). If you wish to define a client component within this directory then you need to add the pragma 'use client' at the top of the file you are defining the component within.

more reading:
<https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns>

## Suspense boundaries

We can now use suspense boundaries to render a page on the client while still fetching data on the server, allowing for only the components that need that data to show a loading state.

## Other new bits

- New Image component
- New Link component
- New font system for bringing in and optimising any custom fonts
- Server actions (functions that run on the server but that can be called directly in components)
- new api route handlers
