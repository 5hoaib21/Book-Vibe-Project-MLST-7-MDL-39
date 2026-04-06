import React, { use } from "react";
import { useParams } from "react-router";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const params = useParams();
  // console.log('params' , params);

  const books = use(booksPromise);
  // console.log(books);

  const updatedBook = books.find(
    (book) => book.bookId === Number(params.bookId),
  );
  console.log("Updated Book:", updatedBook);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = updatedBook;

  return (
    <div className="my-12">
      <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto">
        <figure className="w-full flex items-center justify-center p-6 bg-gray-100 rounded-xl">
          <img
            src={image}
            alt="Album"
            className={"rounded-xl h-[400px] "}
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{bookName}</h2>
          <h2 className="card-title">{author}</h2>
          <div className="divider"></div>
          <p className="py-2 ">{category}</p>
          <div className="divider"></div>
          <p>{review}</p>
          <div className="flex items-center gap-2">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="badge text-green-500 bg-green-100 font-bold "
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="">
            <div className="flex justify-between items-center">
              <span>Number of Pages: </span>
              <span>{totalPages}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Publisher: </span>
              <span>{publisher}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Year of Publishing: </span>
              <span>{yearOfPublishing}</span>
            </div>
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
