"use client";

export default function Footer() {
  return (
    <footer className="border px-6 py-4 text-sm">
      <div>
        © {new Date().getFullYear()} <strong>그릿</strong> all rights reserved
      </div>
    </footer>
  );
}
