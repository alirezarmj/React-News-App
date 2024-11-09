// import React, { useState } from "react";

// interface NewsArticle {
//   id: string;
//   title: string;
//   content: string;
// }

// interface NewsItemProps {
//   article: NewsArticle;
//   onDelete: (id: string) => void;
//   onEdit: (id: string, updatedArticle: NewsArticle) => void;
// }

// const NewsItem: React.FC<NewsItemProps> = ({ article, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedArticle, setEditedArticle] = useState(article);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//     setEditedArticle(article);
//   };

//   const handleEditSubmit = () => {
//     if (editedArticle.title && editedArticle.content) {
//       onEdit(article.id, editedArticle);
//       setIsEditing(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md mb-4">
//       {isEditing ? (
//         <div className="flex flex-col gap-3">
//           <input
//             type="text"
//             value={editedArticle.title}
//             onChange={(e) => setEditedArticle({ ...editedArticle, title: e.target.value })}
//             className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//             placeholder="Edit title"
//           />
//           <textarea
//             value={editedArticle.content}
//             onChange={(e) => setEditedArticle({ ...editedArticle, content: e.target.value })}
//             className="px-3 resize-none py-2 border rounded-md focus:outline-none focus:border-blue-400"
//             placeholder="Edit content"
//             rows={3}
//           />
//           <div className="flex gap-2 mt-3">
//             <button onClick={handleEditSubmit} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
//               Save
//             </button>
//             <button onClick={handleEditToggle} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">
//               Cancel
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-1">{article.title}</h2>
//           <p className="text-gray-600 text-lg mb-4 leading-relaxed">{article.content}</p>
//           <div className="flex gap-2">
//             <button onClick={() => onDelete(article.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
//               Delete
//             </button>
//             <button onClick={handleEditToggle} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//               Edit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsItem;
// NewsItem.tsx
import React, { useState } from "react";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
}

interface NewsItemProps {
  article: NewsArticle;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedArticle: NewsArticle) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ article, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState(article);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedArticle(article);
  };

  const handleEditSubmit = () => {
    if (editedArticle.title && editedArticle.content) {
      onEdit(article.id, editedArticle);
      setIsEditing(false);
    }
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded shadow-md">
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editedArticle.title}
            onChange={(e) => setEditedArticle({ ...editedArticle, title: e.target.value })}
            className="px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Edit title"
          />
          <textarea
            value={editedArticle.content}
            onChange={(e) => setEditedArticle({ ...editedArticle, content: e.target.value })}
            className="px-4 py-3 resize-none border rounded focus:outline-none focus:border-blue-500"
            placeholder="Edit content"
            rows={4}
          />
          <div className="flex gap-2 mt-4">
            <button onClick={handleEditSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all">
              Save
            </button>
            <button onClick={handleEditToggle} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-all">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">{article.title}</h2>
          <p className="text-gray-700 text-md mb-4">{article.content}</p>
          <div className="flex gap-2">
            <button onClick={() => onDelete(article.id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all">
              Delete
            </button>
            <button onClick={handleEditToggle} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
