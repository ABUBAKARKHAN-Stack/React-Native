import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { isAPIError } from "better-auth/api";

const globalErrorHandler = (
    err: Error,
    _req: Request,
    res: Response,
) => {

    //* (CASE) Api Error Class Instance
    if (
        err instanceof ApiError
    ) {
        return res
            .status(err.status)
            .json(new ApiError(
                err.status,
                err.message,
                err.error
            ))
    }

    //* (CASE) Better Auth
    if (isAPIError(err)) {
        return res
            .status(+err.status)
            .json(new ApiError(
                +err.status,
                err.message,
            ))
    }

    //* (CASE) Internal Server
    return res
        .status(500)
        .json(new ApiError(500, "Internal Server Error"))
}

export default globalErrorHandler