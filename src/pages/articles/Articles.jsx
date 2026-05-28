import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles as initialArticles } from '../../data/articles';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    titre: '',
    extrait: '',
    auteur: '',
    categorie: '',
    image: '',
  });

  // Charger les articles depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem('articles');
    if (stored) {
      setArticles(JSON.parse(stored));
    } else {
      // Initialiser avec les données mockées + les sauvegarder
      localStorage.setItem('articles', JSON.stringify(initialArticles));
      setArticles(initialArticles);
    }
  }, []);

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      titre: formData.titre,
      extrait: formData.extrait,
      auteur: formData.auteur,
      date: new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      categorie: formData.categorie,
      image: formData.image || 'https://images.unsplash.com/photo-1504384308090-c54be3855463?w=400&h=300&fit=crop',
    };
    const updated = [newArticle, ...articles];
    setArticles(updated);
    localStorage.setItem('articles', JSON.stringify(updated));
    setFormData({
      titre: '',
      extrait: '',
      auteur: '',
      categorie: '',
      image: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tous les articles</h1>

      {/* Formulaire d’ajout */}
      <div className="mb-12 p-6 border rounded-lg bg-gray-50 dark:bg-neutral-800">
        <h2 className="text-xl font-semibold mb-4">Ajouter un article</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="titre"
            placeholder="Titre *"
            value={formData.titre}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            name="auteur"
            placeholder="Auteur *"
            value={formData.auteur}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            name="categorie"
            placeholder="Catégorie *"
            value={formData.categorie}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            name="image"
            placeholder="URL de l'image (optionnelle)"
            value={formData.image}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <textarea
            name="extrait"
            placeholder="Extrait *"
            value={formData.extrait}
            onChange={handleChange}
            required
            className="p-2 border rounded col-span-1 md:col-span-2"
            rows="3"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Publier l’article
          </button>
        </form>
      </div>

      {/* Liste des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={article.image}
              alt={article.titre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                  {article.categorie}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.titre}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {article.extrait}
              </p>
              <div className="text-sm text-gray-500">Par {article.auteur}</div>
              <Link
                to={`/articles/${article.id}`}
                className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Lire la suite →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;