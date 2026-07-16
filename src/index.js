export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip the /mahjong prefix so assets resolve correctly
    url.pathname = url.pathname.replace(/^\/mahjong/, '') || '/';
    return env.ASSETS.fetch(url);
  },
};
