// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  usuarios from "../../data/lista_usuarios.json"
export default function handler(req, res) {
  res.status(200).json(usuarios)
}
