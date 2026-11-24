import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";

/** Standard page wrapper used by every content page (matches existing pages). */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar active="" />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
