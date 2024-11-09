// // src/api/useArticles.ts
// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// export interface NewsArticle {
//   id: string;
//   title: string;
//   content: string;
// }

// const API_URL = "http://localhost:9000/articles";

// export const useFetchArticles = () => {
//   const [articles, setArticles] = useState<NewsArticle[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch articles");
//         }
//         return response.json();
//       })
//       .then((data) => setArticles(data))
//       .catch((err) => setError(err.message));
//   }, []);

//   return { articles, setArticles, error };
// };

// export const useCreateArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
//   const [error, setError] = useState<string | null>(null);

//   const createArticle = (title: string, content: string) => {
//     const newArticle = { id: uuidv4(), title, content };

//     fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newArticle),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to create article");
//         }
//         return response.json();
//       })
//       .then((createdArticle) => setArticles((prevArticles) => [...prevArticles, createdArticle]))
//       .catch((err) => setError(err.message));
//   };

//   return { createArticle, error };
// };

// export const useDeleteArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
//   const [error, setError] = useState<string | null>(null);

//   const deleteArticle = (id: string) => {
//     fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete article");
//         }
//         setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
//       })
//       .catch((err) => setError(err.message));
//   };

//   return { deleteArticle, error };
// };

// export const useEditArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
//   const [error, setError] = useState<string | null>(null);

//   const editArticle = (id: string, updatedArticle: NewsArticle) => {
//     fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedArticle),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to update article");
//         }
//         return response.json();
//       })
//       .then(() => setArticles((prevArticles) => prevArticles.map((article) => (article.id === id ? updatedArticle : article))))
//       .catch((err) => setError(err.message));
//   };

//   return { editArticle, error };
// };
// src/api/useArticles.ts
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
}

const API_URL = "http://localhost:9000/articles";

export const useFetchArticles = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        return response.json();
      })
      .then((data) => setArticles(data))
      .catch((err) => {
        setError(err.message);
        toast.error("Error fetching articles");
      });
  }, []);

  return { articles, setArticles, error };
};

export const useCreateArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
  const [error, setError] = useState<string | null>(null);

  const createArticle = (title: string, content: string) => {
    const newArticle = { id: uuidv4(), title, content };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create article");
        }
        return response.json();
      })
      .then((createdArticle) => {
        setArticles((prevArticles) => [...prevArticles, createdArticle]);
        toast.success("Article added successfully");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Error adding article");
      });
  };

  return { createArticle, error };
};

export const useDeleteArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
  const [error, setError] = useState<string | null>(null);

  const deleteArticle = (id: string) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete article");
        }
        setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
        toast.success("Article deleted successfully");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Error deleting article");
      });
  };

  return { deleteArticle, error };
};

export const useEditArticle = (setArticles: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
  const [error, setError] = useState<string | null>(null);

  const editArticle = (id: string, updatedArticle: NewsArticle) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedArticle),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update article");
        }
        return response.json();
      })
      .then(() => setArticles((prevArticles) => prevArticles.map((article) => (article.id === id ? updatedArticle : article))))
      .then(() => toast.success("Article updated successfully"))
      .catch((err) => {
        setError(err.message);
        toast.error("Error updating article");
      });
  };

  return { editArticle, error };
};
