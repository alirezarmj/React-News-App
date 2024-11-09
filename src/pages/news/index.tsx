// import React, { useState } from "react";
// import { NewsItem } from "../../components";
// import { NewsArticle, useCreateArticle, useDeleteArticle, useEditArticle, useFetchArticles } from "../../api";
// import { Toaster } from "react-hot-toast";

// const News: React.FC = () => {
//   const { articles, setArticles } = useFetchArticles();
//   const { createArticle } = useCreateArticle(setArticles);
//   const { deleteArticle } = useDeleteArticle(setArticles);
//   const { editArticle } = useEditArticle(setArticles);

//   const [newArticle, setNewArticle] = useState<Pick<NewsArticle, "title" | "content">>({
//     title: "",
//     content: "",
//   });

//   const handleCreate = () => {
//     if (newArticle.title && newArticle.content) {
//       createArticle(newArticle.title, newArticle.content);
//       setNewArticle({ title: "", content: "" });
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <Toaster position="top-center" reverseOrder={false} />

//       <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">News Page</h1>

//         <div className="mb-6">
//           <input
//             className="w-full px-4 py-2 mb-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//             type="text"
//             placeholder="Title"
//             value={newArticle.title}
//             onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
//           />
//           <textarea
//             className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
//             placeholder="Content"
//             value={newArticle.content}
//             onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
//             rows={4}
//           />
//           <button className="w-full mt-3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors" onClick={handleCreate}>
//             Add Article
//           </button>
//         </div>

//         <div className="space-y-4">
//           {articles
//             .slice()
//             .reverse()
//             .map((article) => (
//               <NewsItem key={article.id} article={article} onDelete={deleteArticle} onEdit={editArticle} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
// News.tsx
import React, { useState } from "react";
import { NewsItem } from "../../components";
import { NewsArticle, useCreateArticle, useDeleteArticle, useEditArticle, useFetchArticles } from "../../api";
import { Toaster } from "react-hot-toast";

const News: React.FC = () => {
  const { articles, setArticles } = useFetchArticles();
  const { createArticle } = useCreateArticle(setArticles);
  const { deleteArticle } = useDeleteArticle(setArticles);
  const { editArticle } = useEditArticle(setArticles);

  const [newArticle, setNewArticle] = useState<Pick<NewsArticle, "title" | "content">>({
    title: "",
    content: "",
  });

  const handleCreate = () => {
    if (newArticle.title && newArticle.content) {
      createArticle(newArticle.title, newArticle.content);
      setNewArticle({ title: "", content: "" });
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-8 font-sans">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">Latest News</h1>

        <div className="mb-8">
          <input
            className="w-full px-4 py-3 mb-4 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Enter article title"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
          />
          <textarea
            className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            placeholder="Enter article content"
            value={newArticle.content}
            onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
            rows={5}
          />
          <button className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-all" onClick={handleCreate}>
            Publish Article
          </button>
        </div>

        <div className="space-y-6">
          {articles
            .slice()
            .reverse()
            .map((article) => (
              <NewsItem key={article.id} article={article} onDelete={deleteArticle} onEdit={editArticle} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
