import Sidebar from "@/components/sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-white/50 dark:bg-gradient-to-br  dark:from-[#222] dark:to-black ">
      <div className="flex">
        <Sidebar />
        <section className="flex flex-col items-center justify-center min-h-screen flex-1 px-6 pb-20 pt-28 max-md:pb-14 sm:px-20 overflow-x-hidden">
          <div className="w-full ">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
