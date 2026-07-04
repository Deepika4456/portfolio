function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-center py-8">

      <h2 className="text-2xl font-bold text-white">
        Deepika <span className="text-blue-400">Surisetty</span>
      </h2>

      <p className="text-gray-400 mt-4">
        Aspiring Data Analyst | AI Enthusiast | Python Developer
      </p>

      <p className="text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Deepika Surisetty.
        All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;