import { DrizzleError } from "drizzle-orm";
import { ApiError } from "../utils/ApiError";
import { NextFunction, Request, Response } from "express";
import { isAPIError } from "better-auth/api";

const globalErrorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    next:NextFunction
) => {

    const isDev = process.env.NODE_ENV === "development";

    //* ApiError (Custom)
    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json(
                new ApiError(
                    err.status,
                    err.message,
                    isDev ? err.error : undefined
                )
            );
    }

    //* Better Auth
    if (isAPIError(err)) {
        return res
            .status(Number(err.status))
            .json(
                new ApiError(
                    Number(err.status),
                    `Auth Error: ${err.message}`
                )
            );
    }

    //* Drizzle (DB Errors)
    if (err instanceof DrizzleError) {
        return res
            .status(400)
            .json(
                new ApiError(
                    400,
                    `Database Error: ${err.message}`
                )
            );
    }

    //* Internal Server Error
    return res.status(500).json(
        new ApiError(
            500,
            "Internal Server Error",
            isDev ? err.stack : undefined
        )
    );
};

export default globalErrorHandler