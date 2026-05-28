import MaskReveal from "../MaskReveal";
import { motion } from 'framer-motion';
import { articles } from '../../data/articles';
import { Link } from "react-router-dom";

export default function Blog() {
  const displayedArticles = articles.slice(0, 3);

  return (
    <MaskReveal>
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Derniers articles
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Restez informé des dernières actualités, tutoriels et conseils de la communauté.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
            <article key={article.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <img src={article.image} alt={article.titre} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {article.categorie}
                  </span>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{article.titre}</h3>
                <p className="text-sm text-gray-300">{article.extrait}</p>
                <div className="mt-2 text-sm text-gray-400">Par {article.auteur}</div>
                <Link to={`/articles/${article.id}`} className="mt-2 inline-block text-sm font-medium text-blue-400 hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/articles"
            className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </MaskReveal>
  );
}