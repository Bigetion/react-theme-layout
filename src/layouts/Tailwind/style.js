import { cssHash } from 'css-hash';
import { twsx } from 'tailwind-to-style';

const cssString = twsx({
  '.app-wrapper': 'bg-white antialiased',

  '.topbar':
    'flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center',
  '.topbar-container': 'w-full relative mx-auto px-6',
  '.topbar-inner': 'flex justify-between lg:justify-start items-center -mx-6',
  '.logo-container': 'lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8',
  '.logo-wrapper': 'flex items-center',
  '.logo-link': 'block lg:mr-4 outline-none',
  '.logo-link svg': 'w-auto hidden lg:block h-10',

  '.topbar-right': 'flex min-w-0 lg:w-3/4 xl:w-4/5',
  '.nav-button':
    'flex px-6 items-center lg:hidden text-gray-500 focus:text-gray-700',
  '.open-icon': 'fill-current size-4',
  '.close-icon': 'fill-current size-4',

  '.layout-wrapper': 'w-full mx-auto px-6',
  '.layout-inner': 'lg:flex -mx-6',

  '.sidebar':
    'fixed inset-0 h-full bg-white z-90 w-full border-b border-r-none -mb-16 pt-16 lg:(-mb-0 static h-auto overflow-y-visible border-r border-b-0 pt-0 w-64 block)',
  '.sidebar-scroll':
    'overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-0 lg:pt-16 bg-white',
  '.sidebar-content':
    'overscroll-contain px-6 pt-6 overflow-y-auto text-sm lg:py-6 lg:pl-6 lg:pr-8 z-90 h-[calc(100vh - 4rem)]',

  '.main-content':
    'min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5',
  '.content-wrapper': '',

  '.nav-wrapper': 'mb-5',
  '.nav-heading': 'mb-2 tracking-wide font-semibold text-slate-900',
  '.nav-list': 'space-y-3 border-l border-slate-100',
  '.nav-list li .nav-link':
    'text-slate-700 border-l pl-3 -ml-px transition duration-200 ease-in-out relative block border-transparent hover:border-slate-400',
  '.nav-link .link-label': 'relative',
});

cssHash(() => {
  return cssString;
});
