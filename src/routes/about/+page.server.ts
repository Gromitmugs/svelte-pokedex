// .server.ts does not send information about the api to the client

export const load = () => {
    // throw new Error() // redirects to the +error.svelte page

    return {
        about: "This is the about page",
    }
}