import React, { useEffect } from "react";
import { Card } from "../../shared/components/Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../shared/components/skeletons/SkeletonVideo";
import { Spinner } from "../../shared/components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getLatestArticles } from "../../redux/actions/latestArticlesAction";

export function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestArticles());
  }, [dispatch]);

  const { articles, loading } = useSelector((state) => state.latestArticles);

  const fetchData = () => {
    dispatch(getLatestArticles());
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
          <div className="section-title listpostsbycats mb-2">          
					<h2 className="m-0"><i class="bi bi-megaphone me-2"></i><span>Featured Posts</span></h2>          			
				</div>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className="spinner-border text-danger d-block mx-auto"></div>
            }
            className="row mb-2"
          >
            {!loading
              ? articles.map((item) => (                  
                    <Card key={item.id} articles={item} />                 
                ))
              : [...Array(20)].map(() => (
                  <div className="col-md-3 mt-2">
                    <SkeletonVideo />
                  </div>
                ))}
          </InfiniteScroll>
        </div>
        </div>
        </div>
      )}
    </>
  );
}
