import React, { useEffect, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  // Gunakan usePersistedState
  const [pageNumber, setPageNumber] = usePersistedState("pageNumber", 1);
  const [pageSize, setPageSize] = usePersistedState("pageSize", 10);
  const [sortBy, setSortBy] = usePersistedState("sortBy", "-published_at");
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": pageNumber,
              "page[size]": pageSize,
              "append[]": ["small_image", "medium_image"],
              populate: "*",
              sort: sortBy,
            },
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setPosts(res.data.data);
        setTotalItems(res.data.meta.total);

        // Prevent page overflow after filtering/sorting
        const lastPage = Math.max(1, Math.ceil(res.data.meta.total / pageSize));
        if (res.data.data.length === 0 && pageNumber > lastPage) {
          setPageNumber(lastPage);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [pageNumber, pageSize, sortBy]);

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setPageNumber(page);
  };

  return (
    <div className="container">
      <div className="header-controls">
        <div className="status-text">
          Showing {(pageNumber - 1) * pageSize + 1} -{" "}
          {Math.min(pageNumber * pageSize, totalItems)} of {totalItems}
        </div>

        <div className="dropdowns">
          <label>
            Show per page:{" "}
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </label>

          <label>
            Sort by:{" "}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </label>
        </div>
      </div>

      <div className="post-grid">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div>No posts found.</div>
        )}
      </div>

      <Pagination
        totalItems={totalItems}
        pageSize={pageSize}
        currentPage={pageNumber}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PostList;
