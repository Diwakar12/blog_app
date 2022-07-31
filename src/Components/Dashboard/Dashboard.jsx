import React, { useEffect } from "react";
import { Card } from "../../shared/components/Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../shared/components/skeletons/SkeletonVideo";
import { Spinner } from "../../shared/components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getLatestArticles } from "../../redux/actions/latestArticlesAction";
import { Banner } from "../../shared/components/Banner/Banner";

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
    <div className="container">
      <div className="row">
        <Banner />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="section-title listpostsbycats mb-4">
            <h2 className="m-0">
              <i class="bi bi-megaphone me-2"></i>
              <span>Featured Posts</span>
            </h2>
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
                  <div className="col-lg-9 mx-auto">
                    <Card key={item.id} articles={item} />
                  </div>
                ))
              : [...Array(20)].map(() => (
                  <div className="col-md-3 mt-2">
                    <SkeletonVideo />
                  </div>
                ))}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}
