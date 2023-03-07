import { z } from "zod";


//validating user input data for user_registration 
export const userValidator = z.object({
    userName: z.string().min(4, { message: "too short usernmae" }),
    password: z.string().min(8, { message: "password must be at least 8 character" }),
});


type userType = z.infer<typeof userValidator>; 