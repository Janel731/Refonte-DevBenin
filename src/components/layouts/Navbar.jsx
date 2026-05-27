import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 dark:text-blue-400 dark:bg-neutral-950/90 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/50 backdrop-blur-md shadow-lg "
          : "bg-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">DevBenin</div>

        {/* Desktop Menu - Maintenant à partir de lg (desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Accueil
          </a>

          {/* Dropdown 1 */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              Communauté
              <ChevronDown size={18} />
            </button>

            <div className="absolute left-0 top-10 hidden w-72 rounded-xl border bg-white p-3 shadow-xl group-hover:block">
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Membres</h4>
                <p className="text-sm text-gray-500">
                  Découvrez les développeurs talentueux du Bénin
                </p>
              </a>

              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Projets</h4>
                <p className="text-sm text-gray-500">
                  Participés à des projets open source innovant et collaborez avec la communauté
                </p>
              </a>

              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Blog</h4>
                <p className="text-sm text-gray-500">
                  Un espace dédié à l'innovation, l'apprentissage et le partage
                </p>
              </a>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              Ressources
              <ChevronDown size={18} />
            </button>

            <div className="absolute left-0 top-10 hidden w-72 rounded-xl border bg-white p-3 shadow-xl group-hover:block">
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Challenges</h4>
                <p className="text-sm text-gray-500">Testez vos compétences avec des défis de quiz hebdomadaire</p>
              </a>

              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Classement</h4>
                <p className="text-sm text-gray-500">
                  Le top des développeurs béninois
                </p>
              </a>

              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100">
                <h4 className="font-semibold">Components</h4>
                <p className="text-sm text-gray-500">
                   Retrouver les composants partagés par les dévéloppeur membres
                </p>
              </a>


            </div>
          </div>

        </nav>

        {/* Buttons - Maintenant à partir de lg */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle animation="circle" duration={600} origin="center" />
          <button className="rounded-lg border px-4 py-2 hover:bg-gray-100 transition-colors">
            Connexion
          </button>

          <button className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition-opacity">
            Commencer
          </button>
        </div>

        {/* Mobile Button - Maintenant masqué à partir de lg */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Maintenant avec scroll et ThemeToggle */}
      {mobileMenu && (
        <div className="border-t px-6 py-4 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <a href="#">Accueil</a>

            {/* Mobile Dropdown 1 */}
            <div>
              <button
                className="flex w-full items-center justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown size={18} />
              </button>

              {servicesOpen && (
                <div className="mt-3 ml-3 flex flex-col gap-3">
                  <a href="#">Création de site web</a>
                  <a href="#">Landing Pages</a>
                  <a href="#">UI/UX Design</a>
                </div>
              )}
            </div>

            {/* Mobile Dropdown 2 */}
            <div>
              <button
                className="flex w-full items-center justify-between"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Ressources
                <ChevronDown size={18} />
              </button>

              {resourcesOpen && (
                <div className="mt-3 ml-3 flex flex-col gap-3">
                  <a href="#">Blog</a>
                  <a href="#">Documentation</a>
                  <a href="#">Support</a>
                </div>
              )}
            </div>

            <a href="#">Tarifs</a>

            <div className="mt-4 flex flex-col gap-3">
              {/* ThemeToggle ajouté dans le menu mobile */}
              <div className="flex justify-center">
                <ThemeToggle animation="circle" duration={600} origin="center" />
              </div>
              <button className="rounded-lg border px-4 py-2">Connexion</button>
              <button className="rounded-lg bg-black px-4 py-2 text-white">
                Commencer
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;