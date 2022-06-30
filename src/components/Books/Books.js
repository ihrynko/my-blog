import { useEffect, useState } from "react";
import { getBooks } from "../../service/api";
import { Link } from "react-router-dom";

import React from "react";
import BookItem from "../BookItem/BookItem";
// import Loader from "../../../components/Loader";
import { Row, CardDeck } from "reactstrap";

class BookList extends React.Component {
  state = {
    data: [],
    loading: false,
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({ loading: !loading }));
  };
  componentDidMount() {
    getBooks()
      .then((response) =>
        this.setState(
          {
            [data: ...response.data],
            isLoading: false,
          }
        )
      ).catch (error) {
      console.error(error);
    } 
  };
  componentDidMount() {
    getBooks()
      .then((response) =>
        this.setState(
          {
            data: response.data,
            isLoading: false,
          },
          () => {
            console.log(this.state.data);
          }
        )
      )
      .catch((rej) => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }
  paginationHandler = (number) => {
    this.setState({
      currentPageNumber: number,
    });
  };

  render() {
    const { isLoading, data } = this.state;
    const indexOfLastPost = this.state.currentPageNumber * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="list-container">
        {!isLoading && (
          <CardDeck>
            <Row>
              {currentPosts.map((item, index) => (
                <BookItem
                  title={item.title}
                  description={item.description}
                  id={item.id}
                  key={index}
                />
              ))}
            </Row>
          </CardDeck>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default BookList;
