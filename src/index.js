export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return env.ASSETS.fetch("/index.html");
    }
    return env.ASSETS.fetch(request);
  },
};
