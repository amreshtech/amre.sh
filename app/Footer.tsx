const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center max-w-3xl mx-auto w-full mb-8">
      {/* {router.pathname !== '/' && (
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      )} */}
      <div className="text-sm text-black dark:text-white">
        &copy; {currentYear} Amresh Mishra
      </div>
    </footer>
  );
};

export default Footer;
