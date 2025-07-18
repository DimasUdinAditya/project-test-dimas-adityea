import React, { useState } from "react";

function PostCard({ post }) {
  if (!post || !post.medium_image || !post.medium_image[0]?.url) return null;

  const imageUrl = post.medium_image?.[0]?.url?.startsWith("http")
    ? post.medium_image[0].url
    : `https://assets.suitdev.com${post.medium_image[0].url}`;

  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <div className="post-card">
      {post.medium_image?.[0]?.url && (
        <img
          src={imgSrc}
          alt={post.title}
          loading="lazy"
          onError={() => setImgSrc("/placeholder.png")}
        />
      )}
      <div className="date">
        {post.published_at
          ? new Date(post.published_at).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </div>
      <h3 className="post-title">{post.title}</h3>
    </div>
  );
}

export default PostCard;
