import { verifyData } from './services/login';

export const login = (req, res) => Promise.resolve("TEST DEV")
.then(verifyData)
.then(result => res.status(200).json(result))
.catch(error => res.status(500).json(error));