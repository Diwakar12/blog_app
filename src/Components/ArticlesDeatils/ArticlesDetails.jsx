import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesById } from "../../redux/actions/latestArticlesAction";
import {Spinner} from "../../shared/components/Spinner/Spinner";

export function ArticlesDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesById(id));
  }, [dispatch, id]);

  const { articles, loading } = useSelector((state) => state.selectedArticles);
  console.log(loading);
 

  return (
    <section>
      {loading ?(
        <Spinner/>
      ) : (
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto pt-md-5">            
            <h1 class="display-4">
              {articles?.title}
            </h1>
            <p class="lead">
             {articles?.body}
            </p>
           
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
