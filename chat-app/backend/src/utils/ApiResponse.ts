export class ApiResponse<D> {
    public success: boolean;
    constructor(
        private status: number,
        private message: string,
        private data?: D
    ) {
        this.success = status < 400
    }
}