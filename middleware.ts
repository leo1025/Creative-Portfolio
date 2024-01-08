export { default } from "next-auth/middleware"

// Without matcher, middleware applies to entire project. See Next-Auth docs
export const config = { matcher: [ "/editpost", "/posts", "/newpost" ] }