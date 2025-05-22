import generateInlineStyle from 'tailwind-css-generator';

generateInlineStyle();

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-16 bg-gray-800 text-white flex items-center px-4">
        Header
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-full lg:w-64 lg:block bg-gray-100 border-r overflow-y-auto">
          <div className="p-4" style={{ height: 1000 }}>
            Sidebar Content
          </div>
        </div>

        <main className="flex-1 p-4 overflow-y-auto">
          <div style={{ height: 1024 }}>Main Content</div>
        </main>
      </div>
    </div>
  );
}
