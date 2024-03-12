// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    "github:cssninjaStudio/tairo/layers/xxx#v1.0.0",

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    // '../layers/tairo-layout-sidebar',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    "@fontsource-variable/inter/index.css",
    "@fontsource-variable/karla/index.css",
  ],
  devtools: { enabled: true },
  ssr: false, // SSR must be turned off
})
