const Footer = () => {
  return (
    <div className="w-full mt-2">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider ">
        <p className="mb-5">&copy; 2024 Zhafran Admin Dashboard.</p>
        <p className="flex gap-4 mt-2 md:mt-0 mb-5 ">
          <span className="hover:text-white cursor-pointer transition-colors">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Support
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
