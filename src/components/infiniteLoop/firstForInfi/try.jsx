import React, { useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import InfiniteScroll from "react-infinite-scroller";
import parseLinkHeader from "parse-link-header";

async function fetchIssues(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/vnd.github.v3+json"
    })
  });

  const links = parseLinkHeader(response.headers.get("Link"));
  const issues = await response.json();

  return {
    links,
    issues
  };
}

const MyTryApp = () => {
  const [items, setItems] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://api.github.com/repos/facebook/react/issues"
  );
  console.log(" nextPageUrl = ", nextPageUrl);
  const [fetching, setFetching] = useState(false);

  const fetchItems = useCallback(async () => {
    if (fetching) {
      return;
      console.log(" return nothing = ");
    }

    setFetching(true);
    console.log(" fetching = ", fetching);

    try {
      const { issues, links } = await fetchIssues(nextPageUrl);

      setItems([...items, ...issues]);
      console.log("items changed bro");

      if (links.next) {
        setNextPageUrl(links.next.url);
        console.log("NextPageUrl", links.next.url);
      } else {
        setNextPageUrl(null);
        console.log("NextPageUrl is null");
      }
    } finally {
      setFetching(false);
      console.log("NextPageUrl is false");
    }
  }, [items, fetching, nextPageUrl]);

  const hasMoreItems = !!nextPageUrl;
  console.log(" nextPageUrl ", nextPageUrl);

  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  );

  return (
    <InfiniteScroll
      loadMore={fetchItems}
      hasMore={hasMoreItems}
      loader={loader}
    >
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};
export default MyTryApp;
