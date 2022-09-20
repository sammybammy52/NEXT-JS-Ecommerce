import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/User";

/**
 * @param { import('next').NextApiRequest} req
 * @param { import('next').NextApiResponse} res
 */

export default async function Login(req, res) {
    console.log('connecting to mongo');

    await connectMongo();

    console.log('connected to mongo successfully');

    res.json({
        name: "seye",
        age: "21",
    });
}