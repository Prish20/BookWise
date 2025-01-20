import Image from "next/image";
import React from "react";
import BookCover from "@/components/BookCover";
import BorrowBook from "./BorrowBook";
import { db } from "@/database/seed";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";

interface Props extends Book {
    userId: string;
}

const BookOverview = async ({
    title,
    author,
    genre,
    rating,
    totalCopies,
    availableCopies,
    description,
    coverColor,
    coverUrl,
    id,
    userId,
}: Props) => {
    const [user] = await db
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);

    if (!user) return null;

    const borrowingEligibility = {
        isEligible: availableCopies > 0 && user.status === "APPROVED",
        message:
            availableCopies <= 0
                ? "Book is not available for borrowing"
                : "You are not eligible to borrow this books",
    };
    return (
        <section className="book-overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1 className="">{title}</h1>
                <div className="book-info">
                    <p className="">
                        By{" "}
                        <span className="font-semibold text-light-200">
                            {author}
                        </span>
                    </p>
                    <p className="">
                        Category{""}{" "}
                        <span className="font-semibold text-light-200">
                            {genre}
                        </span>
                    </p>
                    <div className="flex flex-row gap-1">
                        <Image
                            src="/icons/star.svg"
                            alt="star"
                            width={22}
                            height={22}
                        />
                        <p className="">{rating}</p>
                    </div>
                </div>
                <div className="book-copies">
                    <p className="">
                        Total Books: <span className="">{totalCopies}</span>
                    </p>
                    <p className="">
                        Available Books:{" "}
                        <span className="">{availableCopies}</span>
                    </p>
                </div>
                <p className="book-description">{description}</p>
                <BorrowBook
                    bookId={id}
                    userId={userId}
                    borrowingEligibility={borrowingEligibility}
                />
            </div>
            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={coverColor}
                        coverUrl={coverUrl}
                    />
                    <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                        <BookCover
                            variant="wide"
                            coverColor={coverColor}
                            coverUrl={coverUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookOverview;
