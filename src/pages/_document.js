import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script id="theme-switcher" strategy='beforeInteractive'>

          {`
      if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
        } else {
              document.documentElement.classList.remove('dark')
         }
          `}

        </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
