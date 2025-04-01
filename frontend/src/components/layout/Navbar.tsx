import {
  RxClipboard,
  RxPencil2,
  RxFileText,
  RxChatBubble,
  RxHeart,
} from "react-icons/rx";

function Navbar() {
  const navItems = [
    { label: "Prescrição", icon: <RxPencil2 /> },
    { label: "Exames", icon: <RxClipboard /> },
    { label: "Atestados", icon: <RxFileText /> },
    { label: "Laudos", icon: <RxHeart /> },
    { label: "Orientações", icon: <RxChatBubble /> },
  ];

  return (
    <nav className="bg-zinc-600 text-zinc-200 shadow-sm border-b border-zinc-700 sticky top-14 z-40">
      <ul className="flex gap-6 px-4 py-2 text-sm overflow-x-auto justify-center items-center">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 cursor-pointer hover:text-white transition"
            title={item.label}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
