import reactLogo from './assets/react.svg'
import Combobox from './components/Combobox/Combobox'

const App = () => (
  <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className="flex w-full max-w-7xl lg:px-8">
        <div className="w-full  bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
      </div>
    </div>
    <div className="relative">
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
        <div
          className="sm:px-8 top-0 order-last -mb-3 pt-3"
          // @ts-ignore
          style={{ position: 'var(--header-position)' }}
        >
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-2-2xl lg:max-w-5xl">
                <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                  <div className="relative">
                    <div
                      className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                      style={{
                        opacity: 'var(--avatar-border-opacity, 0)',
                        transform: 'var(--avatar-border-transform)',
                      }}
                    />
                    <a
                      aria-label="Home"
                      className="block h-16 w-16 origin-left pointer-events-auto"
                      style={{
                        transform: 'var(--avatar-image-transform)',
                      }}
                      href="/"
                    >
                      <img
                        alt=""
                        sizes="4rem"
                        src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=3840&amp;q=75"
                        width="512"
                        height="512"
                        decoding="async"
                        data-nimg="future"
                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                        style={{ color: 'transparent' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-0 z-10 h-16 pt-6"
          // @ts-ignore
          style={{ position: 'var(--header-position)' }}
        >
          <div
            className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
            // @ts-ignore
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="relative flex gap-4">
                  <div className="flex flex-1" />
                  <div className="flex flex-1 justify-end md:justify-center">
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <a
                            href="/#"
                            className="relative block px-3 py-2 transitio hover:text-teal-500 dark:text-teal-400"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="relative block px-3 py-2 transitio hover:text-teal-500 dark:text-teal-400"
                          >
                            Articles
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="relative block px-3 py-2 transitio hover:text-teal-500 dark:text-teal-400"
                          >
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="relative block px-3 py-2 transitio hover:text-teal-500 dark:text-teal-400"
                          >
                            Speaking
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="relative block px-3 py-2 transitio hover:text-teal-500 dark:text-teal-400"
                          >
                            Users
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Toggle dark mode"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                        onClick={() => {
                          if (
                            document.documentElement.classList.contains('dark')
                          ) {
                            document.documentElement.classList.remove('dark')
                          } else {
                            document.documentElement.classList.add('dark')
                          }
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                        >
                          <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
                          <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                        >
                          <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: 'var(--content-offset)' }} />
      <main>
        <div className="sm:px-8 mt-9">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Monorepo setup with Turborepo
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    The configuration of the Turborepo with the newest tools in
                    the ecosystem. Buid with vite, test with vitest, style with
                    tailwind, and deploy with Github Actions and Vercel.
                  </p>
                  <div className="mt-6 flex gap-6">
                    <a
                      className="group -m-1 p-1"
                      aria-label="Vitejs"
                      href="https://vitejs.dev"
                    >
                      <img
                        src="/vite.svg"
                        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                        alt="Vite logo"
                      />
                    </a>
                    <a
                      className="group -m-1 p-1"
                      aria-label="React"
                      href="https://reactjs.org"
                    >
                      <img
                        src={reactLogo}
                        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 animate-spin-slow"
                        alt="React logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                srcSet="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=16&amp;q=75 16w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=32&amp;q=75 32w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=48&amp;q=75 48w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=64&amp;q=75 64w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=96&amp;q=75 96w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=128&amp;q=75 128w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=256&amp;q=75 256w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=384&amp;q=75 384w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=640&amp;q=75 640w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=750&amp;q=75 750w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=828&amp;q=75 828w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1080&amp;q=75 1080w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1200&amp;q=75 1200w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=1920&amp;q=75 1920w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=2048&amp;q=75 2048w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&amp;w=3840&amp;q=75"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                srcSet="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=16&amp;q=75 16w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=32&amp;q=75 32w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=48&amp;q=75 48w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=64&amp;q=75 64w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=96&amp;q=75 96w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=128&amp;q=75 128w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=256&amp;q=75 256w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=384&amp;q=75 384w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=640&amp;q=75 640w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=750&amp;q=75 750w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=828&amp;q=75 828w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1080&amp;q=75 1080w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1200&amp;q=75 1200w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1920&amp;q=75 1920w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=2048&amp;q=75 2048w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75"
                width="3936"
                height="2624"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                srcSet="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=16&amp;q=75 16w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=32&amp;q=75 32w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=48&amp;q=75 48w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=64&amp;q=75 64w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=96&amp;q=75 96w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=128&amp;q=75 128w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=256&amp;q=75 256w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=384&amp;q=75 384w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=640&amp;q=75 640w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=750&amp;q=75 750w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=828&amp;q=75 828w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1080&amp;q=75 1080w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1200&amp;q=75 1200w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1920&amp;q=75 1920w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=2048&amp;q=75 2048w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75"
                width="5760"
                height="3840"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                srcSet="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=16&amp;q=75 16w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=32&amp;q=75 32w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=48&amp;q=75 48w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=64&amp;q=75 64w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=96&amp;q=75 96w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=128&amp;q=75 128w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=256&amp;q=75 256w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=384&amp;q=75 384w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=640&amp;q=75 640w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=750&amp;q=75 750w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=828&amp;q=75 828w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1080&amp;q=75 1080w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1200&amp;q=75 1200w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=1920&amp;q=75 1920w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=2048&amp;q=75 2048w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&amp;w=3840&amp;q=75"
                width="2400"
                height="3000"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <img
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                srcSet="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=16&amp;q=75 16w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=32&amp;q=75 32w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=48&amp;q=75 48w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=64&amp;q=75 64w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=96&amp;q=75 96w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=128&amp;q=75 128w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=256&amp;q=75 256w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=384&amp;q=75 384w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=640&amp;q=75 640w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=750&amp;q=75 750w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=828&amp;q=75 828w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1080&amp;q=75 1080w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1200&amp;q=75 1200w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=1920&amp;q=75 1920w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=2048&amp;q=75 2048w, https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&amp;w=3840&amp;q=75"
                width="4240"
                height="2384"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Search with highlighted input text example
                </p>
                <div className="mt-8 w-64">
                  <Combobox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default App
