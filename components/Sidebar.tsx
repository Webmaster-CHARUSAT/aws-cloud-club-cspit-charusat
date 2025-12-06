import Link from "next/link";

const links = [
  { href: "/admin/collaborate-responses", label: "Collaborate Responses" },
  { href: "/admin/join-responses", label: "Join Responses" },
];

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-20 left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg "
              >
                <span className="ms-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
