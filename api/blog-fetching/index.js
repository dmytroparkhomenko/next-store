export async function getPosts() {
  const query = `
  {
    posts {
      nodes {
        title
        content
        uri
        featuredImage {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    }
  }
    `;

  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export async function getSinglePost(uri) {
  const query = `
    query GetPostByUri($uri: ID!) {
      post(id: $uri, idType: URI) {
        title
        content
        id
        uri
        featuredImage {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    }
      `;

  const variables = {
    uri,
  };

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.post) {
    return responseBody.data.post;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

