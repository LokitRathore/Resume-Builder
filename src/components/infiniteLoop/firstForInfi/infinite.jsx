import axios from "axios";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "../../apimethods/fsrMethod/list";

const MyComPo = () => {
  const [items, setItems] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";

  axios
    .get(api)
    .then((res) => {
      setItems(res.data);
      console.log(items);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        // next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {<List />}
      </InfiniteScroll>
    </div>
  );
};

export default MyComPo;