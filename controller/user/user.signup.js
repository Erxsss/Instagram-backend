import { userModel } from "../../users.schema.js";
import { hash } from "bcrypt";
export const signup = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const saltRound = 10;
  const hashedPassword = await hash(body.password, saltRound);
  const isExisting = await userModel.findOne({ email: email });
  if (isExisting) {
    res.json("Change email pls");
  } else {
    const newUser = await userModel.create({
      username: body.username,
      email: body.email,
      password: hashedPassword,
      bio: body.bio,
    });
    res.json(newUser);
  }
};
