interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    color: string;
    video: string;
    summary: string;
    isLoanedBook: boolean;
    coverUrl: string;
}
interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    universityId: number;
    universityCard: string;
}
