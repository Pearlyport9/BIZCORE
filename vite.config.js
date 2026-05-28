import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  plugins: [tailwindcss()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        services: resolve(__dirname, "src/services.html"),
        about: resolve(__dirname, "src/about.html"),
        blog: resolve(__dirname, "src/blog.html"),
        "blog-post": resolve(__dirname, "src/blog-post.html"),
        contact: resolve(__dirname, "src/contact.html"),
        "case-studies": resolve(__dirname, "src/case-studies.html"),
      },
    },
  },
});
