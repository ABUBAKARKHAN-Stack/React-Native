export class ApiError<E> {
    constructor(
        public status: number,
        public message: string,
        public error?: E
    ) {
    }
}